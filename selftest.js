const fs = require('fs');
const path = require('path');
const vm = require('vm');
const appPath = path.join(__dirname, 'app.js');
let code = fs.readFileSync(appPath, 'utf8');
code += '\nthis.__TEST__ = { TYPES, WEIGHTS, QUESTIONS };';
const sandbox = {
  console,
  setTimeout: () => 0,
  clearTimeout: () => {},
  navigator: { clipboard: { writeText: () => Promise.resolve() } },
  document: {
    getElementById: () => ({ innerHTML: '' }),
    querySelectorAll: () => []
  }
};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const { TYPES, WEIGHTS, QUESTIONS } = sandbox.__TEST__;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function calc(fill) {
  const scores = Object.keys(TYPES).reduce((acc, key) => {
    acc[key] = 0;
    return acc;
  }, {});
  for (let i = 1; i <= QUESTIONS.length; i += 1) {
    Object.entries(WEIGHTS[i][fill]).forEach(([code, score]) => {
      scores[code] += score;
    });
  }
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 5)
    .map(([code, score]) => `${code}:${score}`)
    .join(', ');
}
assert(QUESTIONS.length === 24, `Expected 24 questions, got ${QUESTIONS.length}`);
QUESTIONS.forEach((question, index) => {
  assert(question.options.length === 3, `Question ${index + 1} should have 3 options`);
  ['A', 'B', 'C'].forEach((key) => {
    assert(WEIGHTS[index + 1] && WEIGHTS[index + 1][key], `Missing weights for Q${index + 1}${key}`);
    Object.keys(WEIGHTS[index + 1][key]).forEach((code) => {
      assert(TYPES[code], `Unknown type ${code} in Q${index + 1}${key}`);
    });
  });
});

console.log('question count =>', QUESTIONS.length);
console.log('all A =>', calc('A'));
console.log('all B =>', calc('B'));
console.log('all C =>', calc('C'));
console.log('selftest => ok');
