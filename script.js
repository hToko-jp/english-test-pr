// Vocabulary Data from "System English Vocabulary" (1-100)
const vocabData = [
    { word: "follow", time: 7.0, choices: ["〜に従う", "率いる", "探す", "止める", "去る"], correct: 0 },
    { word: "consider", time: 13.15, choices: ["〜を考慮する", "無視する", "決める", "驚く", "伝える"], correct: 0 },
    { word: "increase", time: 19.30, choices: ["減る", "維持する", "増える", "壊れる", "配る"], correct: 2 },
    { word: "expect", time: 25.45, choices: ["疑う", "〜を予期する", "忘れる", "拒否する", "守る"], correct: 1 },
    { word: "decide", time: 31.60, choices: ["迷う", "〜することを決意する", "試す", "学ぶ", "教える"], correct: 1 },
    { word: "develop", time: 37.75, choices: ["発達させる", "破壊する", "隠す", "真似する", "運ぶ"], correct: 0 },
    { word: "provide", time: 43.90, choices: ["奪う", "〜を供給する", "禁止する", "捨てる", "描く"], correct: 1 },
    { word: "continue", time: 50.05, choices: ["〜を続ける", "中断する", "始める", "終える", "変える"], correct: 0 },
    { word: "include", time: 56.20, choices: ["除外する", "〜を含む", "隠す", "分ける", "送る"], correct: 1 },
    { word: "remain", time: 62.35, choices: ["変化する", "離れる", "ままでいる", "戻る", "入る"], correct: 2 },
    { word: "reach", time: 68.50, choices: ["逃げる", "〜に達する", "落とす", "投げる", "待つ"], correct: 1 },
    { word: "allow", time: 74.65, choices: ["禁止する", "〜を許可する", "強制する", "非難する", "疑う"], correct: 1 },
    { word: "force", time: 80.80, choices: ["〜を強制する", "誘う", "助ける", "守る", "許す"], correct: 0 },
    { word: "offer", time: 86.95, choices: ["拒否する", "〜を申し出る", "盗む", "借りる", "貸す"], correct: 1 },
    { word: "realize", time: 93.10, choices: ["忘れる", "〜を悟る", "誤解する", "想像する", "期待する"], correct: 1 },
    { word: "suggest", time: 99.25, choices: ["提案する", "命じる", "反対する", "説明する", "批判する"], correct: 0 },
    { word: "require", time: 105.40, choices: ["供給する", "〜を必要とする", "捨てる", "選ぶ", "持つ"], correct: 1 },
    { word: "worry", time: 111.55, choices: ["喜ぶ", "心配する", "怒る", "驚く", "楽しむ"], correct: 1 },
    { word: "wonder", time: 117.70, choices: ["信じる", "〜かと疑問に思う", "知っている", "教える", "学ぶ"], correct: 1 },
    { word: "cost", time: 123.85, choices: ["稼ぐ", "〜を要する", "節約する", "払う", "借りる"], correct: 1 },
    { word: "tend", time: 130.00, choices: ["〜する傾向がある", "止まる", "急ぐ", "避ける", "試す"], correct: 0 },
    { word: "depend", time: 136.15, choices: ["独立する", "〜に依存する", "支配する", "従う", "反対する"], correct: 1 },
    { word: "share", time: 142.30, choices: ["独占する", "〜を共有する", "隠す", "捨てる", "奪う"], correct: 1 },
    { word: "demand", time: 148.45, choices: ["〜を要求する", "承諾する", "提案する", "疑う", "忘れる"], correct: 0 },
    { word: "support", time: 154.60, choices: ["攻撃する", "〜を支持する", "無視する", "壊す", "妨げる"], correct: 1 },
    { word: "hire", time: 160.75, choices: ["解雇する", "〜を雇う", "育てる", "教える", "呼ぶ"], correct: 1 },
    { word: "regard", time: 166.90, choices: ["〜をみなす", "無視する", "忘れる", "疑う", "嘲笑する"], correct: 0 },
    { word: "base", time: 173.05, choices: ["壊す", "〜に基づいている", "浮かぶ", "隠す", "建てる"], correct: 1 },
    { word: "improve", time: 179.20, choices: ["悪化させる", "〜を向上させる", "維持する", "隠す", "捨てる"], correct: 1 },
    { word: "recognize", time: 185.35, choices: ["〜を認める", "否定する", "忘れる", "無視する", "誤解する"], correct: 0 },
    { word: "notice", time: 191.50, choices: ["〜に気づく", "見逃す", "忘れる", "隠す", "無視する"], correct: 0 },
    { word: "suppose", time: 197.65, choices: ["〜だと思う", "知らない", "疑う", "決める", "止める"], correct: 0 },
    { word: "raise", time: 203.80, choices: ["〜を上げる", "下げる", "壊す", "投げる", "隠す"], correct: 0 },
    { word: "prefer", time: 209.95, choices: ["〜をより好む", "嫌う", "選ばない", "無視する", "忘れる"], correct: 0 },
    { word: "cheer", time: 216.10, choices: ["〜を励ます", "怒鳴る", "悲しむ", "無視する", "嘲笑う"], correct: 0 },
    { word: "suffer", time: 222.25, choices: ["楽しむ", "〜に苦しむ", "逃げる", "勝つ", "忘れる"], correct: 1 },
    { word: "describe", time: 228.40, choices: ["〜を描写する", "隠す", "描かない", "消す", "壊す"], correct: 0 },
    { word: "prevent", time: 234.55, choices: ["促す", "〜を妨げる", "助ける", "始める", "続ける"], correct: 1 },
    { word: "reduce", time: 240.70, choices: ["〜を減らす", "増やす", "拡大する", "維持する", "壊す"], correct: 0 },
    { word: "mistake", time: 246.85, choices: ["正解する", "〜を間違える", "理解する", "悟る", "覚える"], correct: 1 },
    { word: "prepare", time: 253.00, choices: ["片付ける", "〜の準備をする", "壊す", "忘れる", "無視する"], correct: 1 },
    { word: "encourage", time: 259.15, choices: ["がっかりさせる", "〜を励ます", "止める", "批判する", "無視する"], correct: 1 },
    { word: "prove", time: 265.30, choices: ["隠す", "〜とわかる", "疑う", "信じる", "忘れる"], correct: 1 },
    { word: "treat", time: 271.45, choices: ["無視する", "〜を扱う", "壊す", "捨てる", "忘れる"], correct: 1 },
    { word: "establish", time: 277.60, choices: ["壊す", "〜を設立する", "隠す", "去る", "忘れる"], correct: 1 },
    { word: "relate", time: 283.75, choices: ["切り離す", "〜と関係がある", "無視する", "忘れる", "疑う"], correct: 1 },
    { word: "compare", time: 289.90, choices: ["無視する", "〜を比較する", "混ぜる", "壊す", "隠す"], correct: 1 },
    { word: "spread", time: 296.05, choices: ["畳む", "〜を広げる", "集める", "隠す", "捨てる"], correct: 1 },
    { word: "refer", time: 302.20, choices: ["無視する", "〜を指す", "隠す", "忘れる", "疑う"], correct: 1 },
    { word: "supply", time: 308.35, choices: ["奪う", "〜を供給する", "禁止する", "捨てる", "使う"], correct: 1 },
    { word: "gain", time: 314.50, choices: ["失う", "〜を得る", "捨てる", "壊す", "隠す"], correct: 1 },
    { word: "destroy", time: 320.65, choices: ["直す", "〜を破壊する", "建てる", "守る", "作る"], correct: 1 },
    { word: "perform", time: 326.80, choices: ["サボる", "〜を行う", "待つ", "忘れる", "止める"], correct: 1 },
    { word: "maintain", time: 332.95, choices: ["変える", "〜を維持する", "壊す", "捨てる", "忘れる"], correct: 1 },
    { word: "obtain", time: 339.10, choices: ["失う", "〜を得る", "捨てる", "隠す", "忘れる"], correct: 1 },
    { word: "design", time: 345.25, choices: ["壊す", "〜を設計する", "真似する", "隠す", "忘れる"], correct: 1 },
    { word: "publish", time: 351.40, choices: ["隠す", "〜を出版する", "捨てる", "忘れる", "書く"], correct: 1 },
    { word: "protect", time: 357.55, choices: ["攻撃する", "〜を保護する", "壊す", "無視する", "忘れる"], correct: 1 },
    { word: "cause", time: 363.70, choices: ["防ぐ", "〜を引き起こす", "助ける", "止める", "解決する"], correct: 1 },
    { word: "deal", time: 369.85, choices: ["放置する", "〜を扱う", "壊す", "忘れる", "避ける"], correct: 1 },
    { word: "accept", time: 376.00, choices: ["拒む", "〜を受け入れる", "疑う", "批判する", "忘れる"], correct: 1 },
    { word: "apply", time: 382.15, choices: ["無視する", "〜を適用する", "壊す", "忘れる", "隠す"], correct: 1 },
    { word: "mention", time: 388.30, choices: ["黙る", "〜に言及する", "忘れる", "隠す", "疑う"], correct: 1 },
    { word: "feed", time: 394.45, choices: ["奪う", "〜に食べ物を与える", "育てる", "殺す", "逃がす"], correct: 1 },
    { word: "limit", time: 400.60, choices: ["広げる", "〜を制限する", "壊す", "無視する", "忘れる"], correct: 1 },
    { word: "remove", time: 406.75, choices: ["置く", "〜を取り除く", "集める", "隠す", "忘れる"], correct: 1 },
    { word: "replace", time: 412.90, choices: ["そのままにする", "〜を置き換える", "壊す", "忘れる", "隠す"], correct: 1 },
    { word: "reveal", time: 419.05, choices: ["隠す", "〜を明らかにする", "忘れる", "疑う", "嘘をつく"], correct: 1 },
    { word: "save", time: 425.20, choices: ["捨てる", "〜を救う", "壊す", "無駄遣いする", "忘れる"], correct: 1 },
    { word: "seek", time: 431.35, choices: ["逃げる", "〜を探し求める", "捨てる", "隠す", "忘れる"], correct: 1 },
    { word: "serve", time: 437.50, choices: ["支配する", "〜に役立つ", "邪魔する", "忘れる", "疑う"], correct: 1 },
    { word: "settle", time: 443.65, choices: ["かき混ぜる", "〜を解決する", "壊す", "忘れる", "逃げる"], correct: 1 },
    { word: "survive", time: 449.80, choices: ["死ぬ", "〜を生き残る", "殺す", "忘れる", "去る"], correct: 1 },
    { word: "threaten", time: 455.95, choices: ["助ける", "〜を脅す", "励ます", "守る", "許す"], correct: 1 },
    { word: "vary", time: 462.10, choices: ["維持する", "変化する", "壊す", "忘れる", "集める"], correct: 1 },
    { word: "warn", time: 468.25, choices: ["褒める", "〜に警告する", "誘う", "疑う", "忘れる"], correct: 1 },
    { word: "waste", time: 474.40, choices: ["大切にする", "〜を浪費する", "拾う", "洗う", "置く"], correct: 1 },
    { word: "approach", time: 480.55, choices: ["遠ざかる", "〜に近づく", "止まる", "逃げる", "待つ"], correct: 1 },
    { word: "attend", time: 486.70, choices: ["欠席する", "〜に出席する", "忘れる", "邪魔する", "批判する"], correct: 1 },
    { word: "avoid", time: 492.85, choices: ["求める", "〜を避ける", "ぶつかる", "探す", "待つ"], correct: 1 },
    { word: "concern", time: 499.00, choices: ["無関心でいる", "〜に関係する", "忘れる", "壊す", "隠す"], correct: 1 },
    { word: "deny", time: 505.15, choices: ["認める", "〜を否定する", "信じる", "忘れる", "期待する"], correct: 1 },
    { word: "determine", time: 511.30, choices: ["迷う", "〜を決定する", "試す", "学ぶ", "教える"], correct: 1 },
    { word: "divide", time: 517.45, choices: ["合わせる", "〜を分割する", "壊す", "捨てる", "隠す"], correct: 1 },
    { word: "employ", time: 523.60, choices: ["解雇する", "〜を雇う", "育てる", "教える", "呼ぶ"], correct: 1 },
    { word: "engage", time: 529.75, choices: ["離れる", "〜に従事する", "忘れる", "疑う", "拒否する"], correct: 1 },
    { word: "examine", time: 535.90, choices: ["放置する", "〜を調査する", "信じる", "壊す", "忘れる"], correct: 1 },
    { word: "express", time: 542.05, choices: ["隠す", "〜を表現する", "忘れる", "疑う", "嘘をつく"], correct: 1 },
    { word: "suit", time: 548.20, choices: ["〜に似合う", "壊す", "嫌う", "忘れる", "脱ぐ"], correct: 0 },
    { word: "occur", time: 554.35, choices: ["〜が起こる", "消える", "止まる", "防ぐ", "忘れる"], correct: 0 },
    { word: "attach", time: 560.50, choices: ["〜を取り付ける", "外す", "捨てる", "壊す", "隠す"], correct: 0 },
    { word: "settle", time: 566.65, choices: ["解決する", "かき混ぜる", "壊す", "忘れる", "逃げる"], correct: 0 },
    { word: "admire", time: 572.80, choices: ["〜に感嘆する", "見下す", "忘れる", "嫌う", "疑う"], correct: 0 },
    { word: "manage", time: 578.95, choices: ["〜を管理する", "失敗する", "忘れる", "壊す", "隠す"], correct: 0 },
    { word: "admit", time: 585.10, choices: ["〜を認める", "拒否する", "疑う", "忘れる", "隠す"], correct: 0 },
    { word: "appreciate", time: 591.25, choices: ["〜を正しく評価する", "感謝する", "忘れる", "疑う", "壊す"], correct: 0 },
    { word: "ignore", time: 597.40, choices: ["〜を無視する", "気づく", "大切にする", "褒める", "探す"], correct: 0 },
    { word: "maintain", time: 603.55, choices: ["〜を維持する", "主張する", "壊す", "捨てる", "忘れる"], correct: 0 },
    { word: "predict", time: 609.70, choices: ["〜を予測する", "思い出す", "忘れる", "疑う", "隠す"], correct: 0 },
    { word: "own", time: 615.85, choices: ["〜を所有する", "借りる", "貸す", "捨てる", "壊す"], correct: 0 }
];

// State variables
let player;
let isPlayerReady = false;
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 50;

// YouTube IFrame API Callback (Global)
window.onYouTubeIframeAPIReady = function () {
    console.log("YouTube API Ready.");
    initPlayer();
};

function initPlayer() {
    if (player) return; // Prevent double init

    player = new YT.Player('player', {
        height: '200',
        width: '320',
        videoId: 'RNNf7vd880c',
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'rel': 0,
            'modestbranding': 1,
            'enablejsapi': 1,
            'origin': window.location.protocol === 'file:' ? '*' : window.location.origin
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange
        }
    });

    // Fallback: If onReady doesn't fire after 10 seconds, force it
    setTimeout(() => {
        if (!isPlayerReady) {
            console.warn("Fallback: Forcing ready.");
            onPlayerReady();
        }
    }, 10000);
}

function onPlayerError(event) {
    console.error("YouTube Player Error:", event.data);
    let msg = "YouTube 読み込みエラー";
    if (event.data === 2) msg = "動画IDが無効です";
    if (event.data === 5) msg = "ブラウザがこのプレーヤーに対応していません";
    if (event.data === 100) msg = "動画が見つからないか削除されています";
    if (event.data === 101 || event.data === 150) msg = "動画の再生が制限されています";

    document.getElementById('api-status').textContent = msg + " (再読み込みしてください)";
    document.getElementById('api-status').style.color = "#ef4444";
}

function onPlayerReady(event) {
    if (isPlayerReady) return;
    isPlayerReady = true;
    console.log("Player is synchronized and ready.");
    document.getElementById('api-status').textContent = "YouTube 連携完了";
    document.getElementById('api-status').classList.add('ready');
    const startBtn = document.getElementById('start-btn');
    startBtn.disabled = false;
    startBtn.textContent = "クイズをはじめる";
}

function onPlayerStateChange(event) {
    // Stop audio after a few seconds when testing/guessing
}

class VocabQuizApp {
    constructor() {
        this.currentSet = [];
        this.init();
    }

    init() {
        document.getElementById('start-btn').onclick = () => this.startQuiz();
        document.getElementById('restart-btn').onclick = () => this.startQuiz();
        document.getElementById('replay-btn').onclick = () => this.playWordAudio();
        document.getElementById('next-btn').onclick = () => this.nextQuestion();
    }

    startQuiz() {
        // Shuffle and pick 50
        this.currentSet = [...vocabData].sort(() => 0.5 - Math.random()).slice(0, TOTAL_QUESTIONS);
        currentQuestionIndex = 0;
        score = 0;
        this.switchScreen('quiz-screen');
        this.loadQuestion();
    }

    loadQuestion() {
        currentQuiz = this.currentSet[currentQuestionIndex];

        // UI Update
        document.getElementById('question-text').textContent = currentQuiz.word;
        document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/${TOTAL_QUESTIONS}`;
        document.getElementById('score-display').textContent = `Score: ${score}`;
        document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / TOTAL_QUESTIONS) * 100}%`;

        // Generate Options
        const grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        currentQuiz.choices.forEach((choice, idx) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = choice;
            btn.onclick = () => this.handleAnswer(idx);
            grid.appendChild(btn);
        });

        document.getElementById('feedback-area').classList.add('hidden');

        // Play Audio
        this.playWordAudio();
    }

    playWordAudio() {
        if (isPlayerReady && currentQuiz) {
            player.seekTo(currentQuiz.time, true);
            player.playVideo();
            // Stop after 1.8 seconds roughly to play only English pronunciation
            setTimeout(() => {
                player.pauseVideo();
            }, 1800);
        }
    }

    handleAnswer(idx) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);

        if (idx === currentQuiz.correct) {
            score += 20;
            buttons[idx].classList.add('correct');
            this.playEffect('correct');
            document.getElementById('feedback-text').innerHTML = `<strong>✨ Correct! ✨</strong>`;
        } else {
            buttons[idx].classList.add('wrong');
            buttons[currentQuiz.correct].classList.add('correct');
            this.playEffect('wrong');
            document.getElementById('feedback-text').innerHTML = `<strong>⚠️ Mistake...</strong>`;
        }

        document.getElementById('feedback-area').classList.remove('hidden');
    }

    nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < TOTAL_QUESTIONS) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.switchScreen('result-screen');
        document.getElementById('final-score').textContent = score;
        const rank = document.getElementById('rank-label');
        if (score >= 900) rank.textContent = "マスター・リンガリスト";
        else if (score >= 600) rank.textContent = "ベテラン・リスナー";
        else rank.textContent = "ビギナー・リスナー";

        if (score === TOTAL_QUESTIONS * 20) {
            document.getElementById('perfect-msg').classList.remove('hidden');
        }
    }

    switchScreen(id) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }

    playEffect(type) {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;
        if (type === 'correct') {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.type = 'sine';
            o.frequency.setValueAtTime(880, now);
            o.frequency.exponentialRampToValueAtTime(1320, now + 0.1);
            g.gain.setValueAtTime(0.1, now);
            g.gain.linearRampToValueAtTime(0, now + 0.3);
            o.connect(g);
            g.connect(audioCtx.destination);
            o.start(); o.stop(now + 0.3);
        } else {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.type = 'sawtooth';
            o.frequency.setValueAtTime(150, now);
            g.gain.setValueAtTime(0.1, now);
            g.gain.linearRampToValueAtTime(0, now + 0.4);
            o.connect(g);
            g.connect(audioCtx.destination);
            o.start(); o.stop(now + 0.4);
        }
    }
}

// Initialize App
const app = new VocabQuizApp();

// If API already loaded before script runs
if (window.YT && window.YT.Player) {
    initPlayer();
}

// Dynamic YouTube API Loading
function loadYoutubeAPI() {
    if (document.querySelector('script[src*="youtube.com/iframe_api"]')) return;
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
loadYoutubeAPI();
