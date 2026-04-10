const TYPES = {
  ULTI: { code: 'ULTI', name: '开大型', punchline: '平时不抢戏，一到关键时刻我直接开大。', tags: ['关键时刻', '稳准狠', '一出手就收场'], summary: '你不是那种时时刻刻都很吵的人，但关键局到了，你总能把节奏拿回来。别人靠存在感刷脸，你靠关键时刻的含金量立住。你最厉害的地方不是一直在线，而是该上线的时候从不掉链子。', share: { default: '我测出来是开大型，平时不抢戏，关键时刻直接开大。', showoff: '原来我这种人不是低调，是把输出都留给关键局。', selfmock: '难怪我平时像没开机，一到关键时刻突然像换了个人。' } },
  CTRL: { code: 'CTRL', name: '场控王', punchline: '冷场到我这儿，基本就算它命不好。', tags: ['兜场子', '会接梗', '默认控场'], summary: '你有种很烦但很有用的能力，就是总能把快散掉的局重新拢回来。别人负责出现，你负责让事情继续发生。你不是场面的附属品，你经常就是那个场面本身。', share: { default: '我测出来是场控王，冷场到我这儿基本就算它命不好。', showoff: '有的人负责到场，我这种人负责让场子继续活着。', selfmock: '怪不得每次烂摊子最后都能莫名其妙落我手里。' } },
  HOLD: { code: 'HOLD', name: '拿捏派', punchline: '我不一定都上，但我基本都能拿捏。', tags: ['有分寸', '会看时机', '稳准狠'], summary: '你最牛的地方不是莽，而是准。什么话该说到哪，什么人该推到哪一步，什么事该做到什么程度，你心里通常比别人更有数。别人是硬冲，你是高级处理。', share: { default: '我测出来是拿捏派，不一定都上，但基本都能拿捏。', showoff: '真正的高手不是硬冲，是把分寸感玩明白。', selfmock: '行吧，我承认，我这个人确实有点爱拿捏。' } },
  CLUT: { code: 'CLUT', name: '反杀型', punchline: '你以为我要输了，不好意思，我剧情反转。', tags: ['逆风局', '翻盘感', '后手狠'], summary: '你这种人最适合出现在别人已经开始提前庆祝的时候。越不被看好，你越容易把局翻回来。你的牛逼不在顺风起飞，而在于快输的时候还能让剧情改写。', share: { default: '我测出来是反杀型，越不被看好越容易翻盘。', showoff: '别急着下结论，我这种人的剧情一般都在后半段。', selfmock: '难怪我老把人生玩成高难度模式，原来我是靠反杀吃饭的。' } },
  LAST: { code: 'LAST', name: '后劲王', punchline: '第一眼不一定是我，但最后赢的经常是我。', tags: ['慢热型', '后程发力', '越处越顶'], summary: '你不是那种靠第一眼惊艳立住的人，你更像那种越合作越离不开的狠角色。前半场你可能不抢戏，后半场你开始显含金量。别人的强是 loud，你的强是 long。', share: { default: '我测出来是后劲王，第一眼不一定是我，最后赢的经常是我。', showoff: '有些人强在第一眼，我这种人强在越往后越离不开。', selfmock: '原来我不是慢热，我只是加载条比较长。' } },
  SEAT: { code: 'SEAT', name: '上桌人', punchline: '这次终于轮到我上桌了。', tags: ['上桌感', '迟早轮到我', '关键局玩家'], summary: '你身上有一种“迟早会被看见”的气质。不是因为你一直在吵，而是因为轮到真格的时候，你总有资格坐上来。你不是边角料型选手，你是那种会被正式请上桌的人。', share: { default: '我测出来是上桌人，这次终于轮到我上桌了。', showoff: '不是谁都能坐上来，我这种人是迟早会被请上桌。', selfmock: '原来我不是边角料，我只是出场比较晚。' } },
  RICH: { code: 'RICH', name: '有点贵', punchline: '我不一定抢镜，但我站那儿就像有点贵。', tags: ['稀缺感', '有点高级', '自带身价'], summary: '你这种人的厉害，不一定在于动作多，而在于很容易让人自动高看一眼。不是张扬，也不是端着，就是会让人觉得你身上有点不好替代的东西。你不解释，别人也会先多看两眼。', share: { default: '我测出来是有点贵，站那儿就像有点不好替代。', showoff: '有些人靠努力发光，我这种人是自带点稀缺感。', selfmock: '好吧，原来我这人最大的特点是看起来有点贵。' } },
  HARD: { code: 'HARD', name: '狠角色', punchline: '我平时挺好说话，但别把我当软的。', tags: ['边界硬', '关键敢切', '别惹我'], summary: '你不是天天把狠挂嘴边的人，所以很多人会误判你。可一旦碰到底线，你往往比那些平时很凶的人还干脆。你最强的地方不是嘴硬，而是真有那个下手的决心。', share: { default: '我测出来是狠角色，平时好说话，但别把我当软的。', showoff: '真正的狠不是天天挂嘴边，是关键时候真敢切。', selfmock: '难怪大家总以为我脾气好，直到我真翻脸。' } },
  ANCH: { code: 'ANCH', name: '定海针', punchline: '你们先乱，我一般是最后那个把事情扶正的人。', tags: ['稳得住', '能兜底', '乱局回正'], summary: '别人一慌，局就更乱；你一出来，事情开始回正。你不是最花的那种牛逼，但是真到关键时刻，大家最想找的人往往是你。因为你身上有种让混乱慢慢安静下来的能力。', share: { default: '我测出来是定海针，你们先乱，我一般是最后那个把事情扶正的人。', showoff: '有的人负责制造波动，我这种人负责让世界重新回正。', selfmock: '原来我不是爱兜底，我只是天生容易被安排去兜底。' } },
  LIVE: { code: 'LIVE', name: '活人王', punchline: '我既能把事干了，也没把自己活丢。', tags: ['能打能活', '不苦行僧', '人还挺有意思'], summary: '很多人一厉害就变得紧绷、无聊、难接近，你不一样。你这种人是既能把事做了，也还保留着活人感。别人是赢得很苦，你是赢得还挺像个人。', share: { default: '我测出来是活人王，能把事干了，也没把自己活丢。', showoff: '很多人一厉害就变得无聊，我这种人是又能打又像个活人。', selfmock: '好消息，我挺厉害；坏消息，我看起来还挺轻松。' } },
  READ: { code: 'READ', name: '预判怪', punchline: '我不是想太多，我只是比你们早想到三步。', tags: ['脑子快', '后手多', '预判型玩家'], summary: '你不是爱脑补，你只是总能比别人更早看到后果。大家刚反应过来发生了什么，你已经在想下一步怎么处理。跟你比，很多人的“临场反应”看起来像系统延迟。', share: { default: '我测出来是预判怪，不是想太多，是比多数人早想到三步。', showoff: '别人还在反应发生了什么，我已经在想下一步怎么赢。', selfmock: '难怪我经常一脸无语，原来是脑子老比现场快半拍。' } },
  SAVE: { code: 'SAVE', name: '盘活王', punchline: '给我一个烂场面，我给你盘活。', tags: ['救场王', '热场人', '快散了也能救'], summary: '你身上有一种特别稀缺的能力，就是不管局面多尴尬、多散、多乱，到你这儿总还能再活过来。别人看到的是麻烦，你看到的是还能怎么救。说白了，你很像很多关系和项目里的隐形续命装置。', share: { default: '我测出来是盘活王，给我一个烂场面，我给你盘活。', showoff: '有的人只能锦上添花，我这种人比较适合起死回生。', selfmock: '行吧，看来我这辈子就是个专门给烂局续命的人。' } },
  FULL: { code: 'FULL', name: '满配人', punchline: '我不是某一项最夸张，但我几乎没短板。', tags: ['综合强', '放哪都能用', '难替代'], summary: '你不一定是在某一项上最炸的那个，但你是很少会掉链子的那个。别人靠一招鲜，你靠的是整体配置都在线。单拎一项不一定压人，整个人放出来就很难被替代。', share: { default: '我测出来是满配人，不一定某项最夸张，但几乎没短板。', showoff: '单看一项未必赢你，整个人拿出来就很难输。', selfmock: '原来我不是普通平均，我是均衡到有点烦。' } },
  WAKE: { code: 'WAKE', name: '清醒挂', punchline: '你们上头的时候，我一般还醒着。', tags: ['人间清醒', '不上头', '看得透'], summary: '你不是不投入，而是不容易被带跑。别人陷进情绪、热闹和幻觉里的时候，你通常还能看清这局到底怎么回事。你这种人不一定最好哄，但很适合当关键时刻的外脑。', share: { default: '我测出来是清醒挂，你们上头的时候，我一般还醒着。', showoff: '很多人负责投入情绪，我这种人负责看清局。', selfmock: '怪不得我老像个扫兴的人，原来只是醒得太早。' } },
  BURN: { code: 'BURN', name: '真卷王', punchline: '不是我想卷，是我认真起来真的像开加速。', tags: ['自驱型', '稳定推进', '开机就不停'], summary: '你不是嘴上说说要努力的人，你一旦认真起来，节奏会快到让旁边的人开始怀疑自己是不是还没开机。你最可怕的不是一时爆发，而是你能把强度稳定维持下去。', share: { default: '我测出来是真卷王，不是我想卷，是我认真起来真的像开加速。', showoff: '你们说卷，我理解的是：既然要做，那就直接拉满。', selfmock: '难怪别人一看我认真起来就开始怀疑自己是不是没开机。' } },
  AURA: { code: 'AURA', name: '压场脸', punchline: '我不一定说很多，但空气会先替我说。', tags: ['气场型', '压得住', '不好惹'], summary: '你有一种不靠喧哗也能把场面压住的能力。不是话多，不是表演欲强，是你一出现，周围人的判断会自动提高你的权重。很多人不是先认识你，是先感受到你。', share: { default: '我测出来是压场脸，我不一定说很多，但空气会先替我说。', showoff: '真正的压场不是抢话，是你一出现，大家自动提高你的权重。', selfmock: '原来我不是冷，我只是看起来就不太像好惹的。' } },
};

const QUESTIONS = [
  ['群里已经冷了十分钟了，你一般会：', ['继续潜水，当没看见', '找个不尴尬的角度把话接起来', '直接扔个东西把场子炸热']],
  ['明明这事你最懂，结果有人已经开始装懂了，你会：', ['懒得争，先记住这个人', '找个机会把话接回来，让大家听懂真正的重点', '直接让他知道，懂和装懂不是一回事']],
  ['一个你等了挺久的机会终于轮到你了，你第一反应更像：', ['先别激动，看看值不值得我真上', '坐稳了再说，别刚上桌就飘', '终于轮到我了，那这把我得狠狠干']],
  ['朋友临时放你鸽子，你心里第一句更像：', ['算了，也不是第一次了', '行，我记住了，但我先不说', '不行，这种事我得让他知道不太对']],
  ['一个项目已经乱得有点像菜市场了，你更可能：', ['先把最乱那块按住', '想办法把快散掉的局重新接起来', '这种时候别磨叽了，我来接管']],
  ['大家第一次见你，最容易对你有哪种感觉：', ['这人感觉不太简单', '这人应该挺会来事', '这人话不一定多，但感觉留了后手']],
  ['那种又长又烦、还得慢慢磨的事，你更像：', ['一旦决定做，我就会一直往前推', '刚开始一般，越到后面越来劲', '先别急，我想想有没有更聪明的做法']],
  ['一桌人越聊越散，开始谁也接不上谁了，你会：', ['再看看，没必要我先动', '找个点把大家重新拢回来', '直接换个话题，把节奏拿过来']],
  ['你忙了半天，结果别人开始顺手抢功劳，你会：', ['先不说，后面我会把这账翻回来', '当场把自己的位置拿回来', '不吵，但我会让他知道这事不能这么干']],
  ['一件事你已经手动做了三遍，你更可能：', ['找个 AI 或工具把它包掉，以后让它自己跑', '把做法整理成模板，免得下次谁来都重头踩坑', '先继续手动做，等真烦了再说']],
  ['如果团队里有人最容易被抓来救火，大概率是因为：', ['他能把事情稳住', '他能把快死的局救回来', '他比较全，哪里缺都能补一手']],
  ['朋友半夜突然来一句“我真的不行了”，你更像：', ['先让他把情绪说完，我陪着听', '听两句后就开始帮他想后面怎么搞', '第二天直接约出来，陪他把眼前这关先过掉']],
  ['大家都开始上头、吵快了的时候，你通常会：', ['先在心里把这局看明白', '先想后面会不会翻车', '先把最容易炸的地方按住']],
  ['别人夸你厉害时，更像是在夸哪种厉害：', ['你这人就是有种不太好替代的感觉', '你能把事做了，但人还挺鲜活', '你一认真起来，别人看着都累']],
  ['你去一个陌生局，通常会是：', ['还没怎么说话，存在感先到了', '很快就能把气氛接住', '先安静一下，把人和局都扫一遍']],
  ['一件事眼看要输了，你更像：', ['我还能给它翻回来', '我先把最差的结果兜住', '我先让这个局别彻底死掉']],
  ['别人说你“有点贵”，大概是在说：', ['你身上有种不太像普通人的稀缺感', '你一站那儿就不太像好惹的', '你这人感觉迟早会坐到更前面去']],
  ['真到该拍板的时候，你更像：', ['前面不一定说很多，开口的时候基本就定了', '我其实前面一直在慢慢控节奏', '你以为我没动作，其实我后手都想好了']],
  ['你最常被人夸的一点，更像：', ['你这人分寸拿得挺准', '你站那儿就有点压场', '你越往后越显得有东西']],
  ['你今天状态很烂，但还得面对一堆人，你更可能：', ['就这样吧，谁爱看不看', '先想办法把自己哄好，再决定见不见人', '嗯嗯好的哈哈，把流程走完就撤']],
  ['你更容易为哪种东西花钱：', ['角色、周边、谷子这些让我看着开心的东西', '某个固定品牌、套餐、联名和那套仪式感', '看心情，什么让我开心买什么']],
  ['如果有人背后说你“有点难搞”，大概率是因为：', ['你边界确实硬', '你太清醒，不容易被带跑', '你总能一眼看穿别人的小九九']],
  ['在一段关系或者一次合作里，你最常做的事是：', ['接住快掉地上的场面', '稳住节奏，别让它乱下去', '让事情继续往前走，不停在那耗着']],
  ['周末终于没人找你了，你最想：', ['随便活一下，主打一个活人味儿', '给自己安排点吃的喝的，把自己照顾舒服', '直接切省电模式，谁也别来打扰']]
].map((item, index) => ({
  id: index + 1,
  text: item[0],
  options: item[1].map((text, i) => ({ key: ['A','B','C'][i], text }))
}));

const WEIGHTS = {
  1: { A: { WAKE: 2, READ: 1 }, B: { SAVE: 2, CTRL: 1 }, C: { CTRL: 2, ULTI: 1 } },
  2: { A: { WAKE: 2, READ: 1 }, B: { HOLD: 2, CTRL: 1 }, C: { HARD: 2, ULTI: 1 } },
  3: { A: { SEAT: 2, WAKE: 1 }, B: { LAST: 2, ANCH: 1 }, C: { BURN: 2, ULTI: 1 } },
  4: { A: { WAKE: 2, LIVE: 1 }, B: { HOLD: 2, READ: 1 }, C: { HARD: 2, CLUT: 1 } },
  5: { A: { ANCH: 2, FULL: 1 }, B: { SAVE: 2, CTRL: 1 }, C: { ULTI: 2, HARD: 1 } },
  6: { A: { AURA: 2, RICH: 1 }, B: { CTRL: 2, SAVE: 1 }, C: { LAST: 2, READ: 1 } },
  7: { A: { BURN: 2, FULL: 1 }, B: { LAST: 2, CLUT: 1 }, C: { READ: 2, HOLD: 1 } },
  8: { A: { WAKE: 2, SEAT: 1 }, B: { SAVE: 2, CTRL: 1 }, C: { CTRL: 2, ULTI: 1 } },
  9: { A: { CLUT: 2, LAST: 1 }, B: { ULTI: 2, HARD: 1 }, C: { HARD: 2, HOLD: 1 } },
  10: { A: { READ: 2, WAKE: 1 }, B: { ANCH: 2, FULL: 1 }, C: { BURN: 2, LIVE: 1 } },
  11: { A: { ANCH: 2, ULTI: 1 }, B: { SAVE: 2, LIVE: 1 }, C: { FULL: 2, LIVE: 1 } },
  12: { A: { SAVE: 2, LIVE: 1 }, B: { READ: 2, HOLD: 1 }, C: { ANCH: 2, FULL: 1 } },
  13: { A: { WAKE: 2, READ: 1 }, B: { READ: 2, HOLD: 1 }, C: { ANCH: 2, HARD: 1 } },
  14: { A: { RICH: 2, AURA: 1 }, B: { LIVE: 2, FULL: 1 }, C: { BURN: 2, ULTI: 1 } },
  15: { A: { AURA: 2, RICH: 1 }, B: { CTRL: 2, SAVE: 1 }, C: { HOLD: 2, WAKE: 1 } },
  16: { A: { CLUT: 2, ULTI: 1 }, B: { ANCH: 2, FULL: 1 }, C: { SAVE: 2, CTRL: 1 } },
  17: { A: { RICH: 2, SEAT: 1 }, B: { AURA: 2, HARD: 1 }, C: { SEAT: 2, RICH: 1 } },
  18: { A: { ULTI: 2, AURA: 1 }, B: { CTRL: 2, ANCH: 1 }, C: { READ: 2, LAST: 1 } },
  19: { A: { HOLD: 2, WAKE: 1 }, B: { AURA: 2, RICH: 1 }, C: { LAST: 2, BURN: 1 } },
  20: { A: { LIVE: 2, HARD: 1 }, B: { ANCH: 2, HOLD: 1 }, C: { WAKE: 2, LAST: 1 } },
  21: { A: { LIVE: 2, RICH: 1 }, B: { HOLD: 2, RICH: 1 }, C: { LIVE: 2, FULL: 1 } },
  22: { A: { HARD: 2, AURA: 1 }, B: { WAKE: 2, READ: 1 }, C: { READ: 2, HOLD: 1 } },
  23: { A: { SAVE: 2, CTRL: 1 }, B: { ANCH: 2, HOLD: 1 }, C: { BURN: 2, LIVE: 1 } },
  24: { A: { LIVE: 2, FULL: 1 }, B: { ANCH: 2, LIVE: 1 }, C: { WAKE: 2, LAST: 1 } },
};

const PREVIEWS = ['ULTI', 'CTRL', 'LAST', 'RICH'];
const state = { view: 'home', answers: Array(QUESTIONS.length).fill(null), currentIndex: 0, result: null, toast: '' };
const app = document.getElementById('app');

function render() {
  app.innerHTML = `
    <div class="app-shell">
      ${state.view === 'home' ? renderHome() : ''}
      ${state.view === 'test' ? renderTest() : ''}
      ${state.view === 'result' ? renderResult() : ''}
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ''}
    </div>
  `;
  bindEvents();
}

function renderHome() {
  return `
    <section class="card hero">
      <div class="badge">NBTI 静态原型 v1</div>
      <h1>NBTI 人格测试</h1>
      <p class="subtitle">测测你到底是哪种牛逼人</p>
      <p class="desc">24 道题，3-5 分钟出结果。仅供娱乐，不用于招聘、相亲、升职、分手和人生判决。先做一个能测、能发、能验证的最小版本。</p>
      <div class="actions">
        <button class="btn btn-primary" data-action="start">开始测试</button>
      </div>
      <div class="preview-grid">
        ${PREVIEWS.map(code => {
          const item = TYPES[code];
          return `<div class="mini-card"><div class="code">${item.code}</div><h3>${item.name}</h3><p>${item.punchline}</p></div>`;
        }).join('')}
      </div>
    </section>
  `;
}

function renderTest() {
  const question = QUESTIONS[state.currentIndex];
  const progress = ((state.currentIndex) / QUESTIONS.length) * 100;
  return `
    <section class="card test-page">
      <div class="progress-meta"><span>第 ${state.currentIndex + 1} / ${QUESTIONS.length} 题</span><span>${Math.round(progress)}%</span></div>
      <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
      <div class="card question-card">
        <h2 class="question-title">${question.text}</h2>
        <div class="option-list">
          ${question.options.map(option => `
            <button class="option-btn ${state.answers[state.currentIndex] === option.key ? 'active' : ''}" data-action="answer" data-key="${option.key}">
              <span class="option-key">${option.key}</span>${option.text}
            </button>
          `).join('')}
        </div>
        <div class="nav-row">
          <button class="btn btn-secondary" data-action="prev" ${state.currentIndex === 0 ? 'disabled' : ''}>上一题</button>
          <button class="btn btn-secondary" data-action="next" ${state.answers[state.currentIndex] ? '' : 'disabled'}>${state.currentIndex === QUESTIONS.length - 1 ? '查看结果' : '下一题'}</button>
        </div>
      </div>
    </section>
  `;
}

function renderResult() {
  const { primary, secondary, ranking, shareText } = state.result;
  return `
    <section class="card result-hero">
      <div class="result-hero-inner">
        <div class="result-header">
          <div>
            <div class="result-code">${primary.code}</div>
            <h1 class="result-name">${primary.name}</h1>
          </div>
          ${secondary ? `<div class="badge">副人格倾向：${secondary.name}</div>` : ''}
        </div>
        <p class="result-punchline">${primary.punchline}</p>
        <div class="tags">${primary.tags.map(tag => `<span>#${tag}</span>`).join('')}</div>
        <p class="result-summary">${primary.summary}</p>
        <div class="share-box">
          <div class="result-code">默认分享文案</div>
          <p>${shareText}</p>
        </div>
        <div class="actions">
          <button class="btn btn-primary" data-action="copy-share">复制分享文案</button>
          <button class="btn btn-secondary" data-action="restart">再测一次</button>
        </div>
        <div class="score-board">
          ${ranking.slice(0, 5).map(item => `<div class="score-item"><span>${item.type.name} · ${item.type.code}</span><strong>${item.score} 分</strong></div>`).join('')}
        </div>
        <div class="footer-note">首版规则：24 题累计加权，主命中 +2，次命中 +1；若第二名与第一名分差 ≤ 2，则显示副人格倾向。</div>
      </div>
    </section>
  `;
}

function bindEvents() {
  document.querySelectorAll('[data-action]').forEach(el => el.addEventListener('click', handleAction));
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === 'start') {
    state.view = 'test';
    state.currentIndex = 0;
    render();
    return;
  }
  if (action === 'answer') {
    const key = event.currentTarget.dataset.key;
    state.answers[state.currentIndex] = key;
    render();
    setTimeout(() => {
      if (state.answers[state.currentIndex] === key) {
        if (state.currentIndex === QUESTIONS.length - 1) finalize();
        else { state.currentIndex += 1; render(); }
      }
    }, 180);
    return;
  }
  if (action === 'prev' && state.currentIndex > 0) {
    state.currentIndex -= 1;
    render();
    return;
  }
  if (action === 'next') {
    if (!state.answers[state.currentIndex]) return;
    if (state.currentIndex === QUESTIONS.length - 1) finalize();
    else { state.currentIndex += 1; render(); }
    return;
  }
  if (action === 'restart') {
    state.answers = Array(QUESTIONS.length).fill(null);
    state.currentIndex = 0;
    state.result = null;
    state.view = 'home';
    render();
    return;
  }
  if (action === 'copy-share') {
    navigator.clipboard.writeText(state.result.shareText).then(() => showToast('已复制分享文案')).catch(() => showToast('复制失败，请手动复制'));
  }
}

function finalize() {
  const scores = Object.keys(TYPES).reduce((acc, code) => ({ ...acc, [code]: 0 }), {});
  state.answers.forEach((answer, idx) => {
    const map = WEIGHTS[idx + 1][answer];
    Object.entries(map).forEach(([code, score]) => { scores[code] += score; });
  });
  const ranking = Object.entries(scores)
    .map(([code, score]) => ({ type: TYPES[code], score }))
    .sort((a, b) => b.score - a.score || a.type.code.localeCompare(b.type.code));
  const primary = ranking[0].type;
  const secondary = ranking[1] && ranking[0].score - ranking[1].score <= 2 ? ranking[1].type : null;
  state.result = {
    primary,
    secondary,
    ranking,
    scores,
    shareText: primary.share.default,
  };
  state.view = 'result';
  render();
}

function showToast(text) {
  state.toast = text;
  render();
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => { state.toast = ''; render(); }, 1600);
}

render();
