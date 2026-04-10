const fs = require('fs');
const vm = require('vm');
let code = fs.readFileSync('app.js', 'utf8');
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
console.log('all A =>', calc('A'));
console.log('all B =>', calc('B'));
console.log('all C =>', calc('C'));
