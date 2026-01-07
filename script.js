// Vocabulary Data from "System English Vocabulary" (1-100)
const vocabData = [
    { word: "follow", time: 7, choices: ["〜に従う", "率いる", "探す", "止める", "去る"], correct: 0, explanation: "follow: 〜の後に続く、〜に従う。'Follow the rules'で「規則に従う」です。" },
    { word: "consider", time: 13, choices: ["〜を考慮する", "無視する", "決める", "驚く", "伝える"], correct: 0, explanation: "consider: 〜を考慮する、〜を考える。'Consider the possibility'で「可能性を考える」です。" },
    { word: "increase", time: 19, choices: ["減る", "維持する", "増える", "壊れる", "配る"], correct: 2, explanation: "increase: 増える、〜を増やす。'Increase in number'で「数が増える」です。" },
    { word: "expect", time: 25, choices: ["疑う", "〜を予期する", "忘れる", "拒否する", "守る"], correct: 1, explanation: "expect: 〜を予期する、期待する。'Expect a call'で「電話を待つ」です。" },
    { word: "decide", time: 31, choices: ["迷う", "〜することを決意する", "試す", "学ぶ", "教える"], correct: 1, explanation: "decide: 〜することを決意する、決める。'Decide to go'で「行くことにする」です。" },
    { word: "develop", time: 37, choices: ["発達させる", "破壊する", "隠す", "真似する", "運ぶ"], correct: 0, explanation: "develop: 発達する、〜を発達させる。'Develop a new system'で「新システムを開発する」です。" },
    { word: "provide", time: 43, choices: ["奪う", "〜を供給する", "禁止する", "捨てる", "描く"], correct: 1, explanation: "provide: 〜を供給する、与える。'Provide information'で「情報を与える」です。" },
    { word: "continue", time: 49, choices: ["〜を続ける", "中断する", "始める", "終える", "変える"], correct: 0, explanation: "continue: 続く、〜を続ける。'Continue to grow'で「成長し続ける」です。" },
    { word: "include", time: 55, choices: ["除外する", "〜を含む", "隠す", "分ける", "送る"], correct: 1, explanation: "include: 〜を含む、含める。'Include taxes'で「税金を含む」です。" },
    { word: "remain", time: 61, choices: ["変化する", "離れる", "ままでいる", "戻る", "入る"], correct: 2, explanation: "remain: ままでいる。'Remain silent'で「黙ったままでいる」です。" },
    { word: "reach", time: 67, choices: ["逃げる", "〜に達する", "落とす", "投げる", "待つ"], correct: 1, explanation: "reach: 〜に着く、〜に達する。'Reach the top'で「頂上に達する」です。" },
    { word: "allow", time: 73, choices: ["禁止する", "〜を許可する", "強制する", "非難する", "疑う"], correct: 1, explanation: "allow: 〜を許可する。'Allow him to go'で「彼の外出を許可する」です。" },
    { word: "force", time: 79, choices: ["〜を強制する", "誘う", "助ける", "守る", "許す"], correct: 0, explanation: "force: 〜を強制する。'Force them to work'で「彼らに働くことを強いる」です。" },
    { word: "offer", time: 85, choices: ["拒否する", "〜を申し出る", "盗む", "借りる", "貸す"], correct: 1, explanation: "offer: 〜を申し出る、提供する。'Offer help'で「助けを申し出る」です。" },
    { word: "realize", time: 91, choices: ["忘れる", "〜を悟る", "誤解する", "想像する", "期待する"], correct: 1, explanation: "realize: 〜を悟る、〜に気づく、〜を実現する。'Realize a dream'で「夢を実現する」です。" },
    { word: "suggest", time: 97, choices: ["提案する", "命じる", "反対する", "説明する", "批判する"], correct: 0, explanation: "suggest: 〜と提案する、〜をほのめかす。'Suggest a plan'で「計画を提案する」です。" },
    { word: "require", time: 103, choices: ["供給する", "〜を必要とする", "捨てる", "選ぶ", "持つ"], correct: 1, explanation: "require: 〜を必要とする。'Require many efforts'で「多くの努力を要する」です。" },
    { word: "worry", time: 109, choices: ["喜ぶ", "心配する", "怒る", "驚く", "楽しむ"], correct: 1, explanation: "worry: 心配する。'Worry about health'で「健康を心配する」です。" },
    { word: "wonder", time: 115, choices: ["信じる", "〜かと疑問に思う", "知っている", "教える", "学ぶ"], correct: 1, explanation: "wonder: 〜かと疑問に思う。'Wonder why'で「なぜだろうと思う」です。" },
    { word: "cost", time: 121, choices: ["稼ぐ", "〜を要する", "節約する", "払う", "借りる"], correct: 1, explanation: "cost: 〜を要する（費用・労力など）。'Cost a lot of money'で「多額の費用がかかる」です。" },
    { word: "tend", time: 127, choices: ["〜する傾向がある", "止まる", "急ぐ", "避ける", "試す"], correct: 0, explanation: "tend: 〜する傾向がある、〜しがちである。'Tend to forget'で「忘れがちである」です。" },
    { word: "depend", time: 133, choices: ["独立する", "〜に依存する", "支配する", "従う", "反対する"], correct: 1, explanation: "depend: 〜に依存する、〜しだいで決まる。'Depend on him'で「彼を頼りにする」です。" },
    { word: "share", time: 139, choices: ["独占する", "〜を共有する", "隠す", "捨てる", "奪う"], correct: 1, explanation: "share: 〜を分け合う、共有する。'Share a room'で「部屋を共有する」です。" },
    { word: "demand", time: 145, choices: ["〜を要求する", "承諾する", "提案する", "疑う", "忘れる"], correct: 0, explanation: "demand: 〜を要求する。'Demand more free time'で「より多くの自由時間を要求する」です。" },
    { word: "support", time: 151, choices: ["攻撃する", "〜を支持する", "無視する", "壊す", "妨げる"], correct: 1, explanation: "support: 〜を支持する、養う。'Support the team'で「チームを応援する」です。" },
    { word: "hire", time: 157, choices: ["解雇する", "〜を雇う", "育てる", "教える", "呼ぶ"], correct: 1, explanation: "hire: 〜を雇う。'Hire a new staff'で「新しいスタッフを雇う」です。" },
    { word: "regard", time: 163, choices: ["〜をみなす", "無視する", "忘れる", "疑う", "嘲笑する"], correct: 0, explanation: "regard: AをBだと思う、みなす。'Regard him as a friend'で「彼を友人と思う」です。" },
    { word: "base", time: 169, choices: ["壊す", "〜に基づいている", "浮かぶ", "隠す", "建てる"], correct: 1, explanation: "base: AをBの基礎に置く。'Based on a true story'で「実話に基づいた」です。" },
    { word: "improve", time: 175, choices: ["悪化させる", "〜を向上させる", "維持する", "隠す", "捨てる"], correct: 1, explanation: "improve: 〜を向上させる、良くなる。'Improve skills'で「スキルを向上させる」です。" },
    { word: "recognize", time: 181, choices: ["〜を認める", "否定する", "忘れる", "無視する", "誤解する"], correct: 0, explanation: "recognize: 〜を認める、〜を識別する。'Recognize the faces'で「顔を認識する」です。" },
    { word: "notice", time: 187, choices: ["〜に気づく", "見逃す", "忘れる", "隠す", "無視する"], correct: 0, explanation: "notice: 〜に気づく。'Notice a small change'で「小さな変化に気づく」です。" },
    { word: "suppose", time: 193, choices: ["〜だと思う", "知らない", "疑う", "決める", "止める"], correct: 0, explanation: "suppose: 〜だと思う、〜することになっている。'I suppose so'で「そう思います」です。" },
    { word: "raise", time: 199, choices: ["〜を上げる", "下げる", "壊す", "投げる", "隠す"], correct: 0, explanation: "raise: 〜を上げる、〜を育てる。'Raise your hand'で「手を挙げて」です。" },
    { word: "prefer", time: 205, choices: ["〜をより好む", "嫌う", "選ばない", "無視する", "忘れる"], correct: 0, explanation: "prefer: 〜をより好む。'Prefer tea to coffee'で「コーヒーよりお茶を好む」です。" },
    { word: "cheer", time: 211, choices: ["〜を励ます", "怒鳴る", "悲しむ", "無視する", "嘲笑う"], correct: 0, explanation: "cheer: 〜を励ます、歓声を送る。'Cheer up'で「元気づける」です。" },
    { word: "suffer", time: 217, choices: ["楽しむ", "〜に苦しむ", "逃げる", "勝つ", "忘れる"], correct: 1, explanation: "suffer: 〜を経験する、受ける、苦しむ。'Suffer from a cold'で「風邪で苦しむ」です。" },
    { word: "describe", time: 223, choices: ["〜を描写する", "隠す", "描かない", "消す", "壊す"], correct: 0, explanation: "describe: 〜を描写する、〜の特徴を説明する。'Describe the scene'で「場面を描写する」です。" },
    { word: "prevent", time: 229, choices: ["促す", "〜を妨げる", "助ける", "始める", "続ける"], correct: 1, explanation: "prevent: 〜をさまたげる、防ぐ。'Prevent accidents'で「事故を防ぐ」です。" },
    { word: "reduce", time: 235, choices: ["〜を減らす", "増やす", "拡大する", "維持する", "壊す"], correct: 0, explanation: "reduce: 〜を減らす。'Reduce waste'で「ゴミを減らす」です。" },
    { word: "mistake", time: 241, choices: ["正解する", "〜を間違える", "理解する", "悟る", "覚える"], correct: 1, explanation: "mistake: 〜を誤解する、まちがえる。'Mistake salt for sugar'で「塩を砂糖と間違える」です。" },
    { word: "prepare", time: 247, choices: ["片付ける", "〜の準備をする", "壊す", "忘れる", "無視する"], correct: 1, explanation: "prepare: 〜の準備をする。'Prepare for the exam'で「試験の準備をする」です。" },
    { word: "encourage", time: 253, choices: ["がっかりさせる", "〜を励ます", "止める", "批判する", "無視する"], correct: 1, explanation: "encourage: 〜を励ます、勇気づける。'Encourage him to try'で「彼に試すよう励ます」です。" },
    { word: "prove", time: 259, choices: ["隠す", "〜とわかる", "疑う", "信じる", "忘れる"], correct: 1, explanation: "prove: 〜とわかる、〜を証明する。'Prove to be true'で「本当だとわかる」です。" },
    { word: "treat", time: 265, choices: ["無視する", "〜を扱う", "壊す", "捨てる", "忘れる"], correct: 1, explanation: "treat: 〜をあつかう、治療する。'Treat him like a child'で「彼を子供のように扱う」です。" },
    { word: "establish", time: 271, choices: ["壊す", "〜を設立する", "隠す", "去る", "忘れる"], correct: 1, explanation: "establish: 〜を設立する、確立する。'Establish a company'で「会社を設立する」です。" },
    { word: "relate", time: 277, choices: ["切り離す", "〜と関係がある", "無視する", "忘れる", "疑う"], correct: 1, explanation: "relate: 〜と関係がある。'Related to stress'で「ストレスに関係した」です。" },
    { word: "compare", time: 283, choices: ["無視する", "〜を比較する", "混ぜる", "壊す", "隠す"], correct: 1, explanation: "compare: 〜を比較する。'Compare A with B'で「AをBと比較する」です。" },
    { word: "spread", time: 289, choices: ["畳む", "〜を広げる", "集める", "隠す", "捨てる"], correct: 1, explanation: "spread: 〜を広げる、広がる。'Spread the news'で「ニュースを広める」です。" },
    { word: "refer", time: 295, choices: ["無視する", "〜を指す", "隠す", "忘れる", "疑う"], correct: 1, explanation: "refer: 〜を指す、〜に言及する。'Refer to the map'で「地図を参照する」です。" },
    { word: "supply", time: 301, choices: ["奪う", "〜を供給する", "禁止する", "捨てる", "使う"], correct: 1, explanation: "supply: 〜を供給する。'Supply food'で「食べ物を供給する」です。" },
    { word: "gain", time: 307, choices: ["失う", "〜を得る", "捨てる", "壊す", "隠す"], correct: 1, explanation: "gain: 〜を得る、増す。'Gain weight'で「体重が増える」です。" },
    { word: "destroy", time: 313, choices: ["直す", "〜を破壊する", "建てる", "守る", "作る"], correct: 1, explanation: "destroy: 〜を破壊する。'Destroy the environment'で「環境を破壊する」です。" },
    { word: "perform", time: 319, choices: ["サボる", "〜を行う", "待つ", "忘れる", "止める"], correct: 1, explanation: "perform: 〜を行う、演じる。'Perform an operation'で「手術を行う」です。" },
    { word: "maintain", time: 325, choices: ["変える", "〜を維持する", "壊す", "捨てる", "忘れる"], correct: 1, explanation: "maintain: 〜を維持する、主張する。'Maintain health'で「健康を維持する」です。" },
    { word: "obtain", time: 331, choices: ["失う", "〜を得る", "捨てる", "隠す", "忘れる"], correct: 1, explanation: "obtain: 〜を得る。'Obtain permission'で「許可を得る」です。" },
    { word: "design", time: 337, choices: ["壊す", "〜を設計する", "真似する", "隠す", "忘れる"], correct: 1, explanation: "design: 〜を設計する、デザインする。'Design a house'で「家を設計する」です。" },
    { word: "publish", time: 343, choices: ["隠す", "〜を出版する", "捨てる", "忘れる", "書く"], correct: 1, explanation: "publish: 〜を出版する、発表する。'Publish a book'で「本を出版する」です。" },
    { word: "protect", time: 349, choices: ["攻撃する", "〜を保護する", "壊す", "無視する", "忘れる"], correct: 1, explanation: "protect: 〜を保護する、守る。'Protect children'で「子供たちを守る」です。" },
    { word: "cause", time: 355, choices: ["防ぐ", "〜を引き起こす", "助ける", "止める", "解決する"], correct: 1, explanation: "cause: 〜を引き起こす、原因となる。'Cause a problem'で「問題を引き起こす」です。" },
    { word: "deal", time: 361, choices: ["放置する", "〜を扱う", "壊す", "忘れる", "避ける"], correct: 1, explanation: "deal: 〜を処理する、扱う。'Deal with it'で「それに対処する」です。" },
    { word: "accept", time: 367, choices: ["拒む", "〜を受け入れる", "疑う", "批判する", "忘れる"], correct: 1, explanation: "accept: 〜を受け入れる。'Accept an invitation'で「招待を受ける」です。" },
    { word: "apply", time: 373, choices: ["無視する", "〜を適用する", "壊す", "忘れる", "隠す"], correct: 1, explanation: "apply: 〜を適用する、申し込む。'Apply for a job'で「仕事に応募する」です。" },
    { word: "mention", time: 379, choices: ["黙る", "〜に言及する", "忘れる", "隠す", "疑う"], correct: 1, explanation: "mention: 〜に言及する、〜を口にする。'Don't mention it'で「どういたしまして」です。" },
    { word: "feed", time: 385, choices: ["奪う", "〜に食べ物を与える", "育てる", "殺す", "逃がす"], correct: 1, explanation: "feed: 〜に食べ物を与える、食べさせる。'Feed the birds'で「鳥にエサをやる」です。" },
    { word: "limit", time: 391, choices: ["広げる", "〜を制限する", "壊す", "無視する", "忘れる"], correct: 1, explanation: "limit: 〜を制限する。'Limit speed'で「スピードを制限する」です。" },
    { word: "remove", time: 397, choices: ["置く", "〜を取り除く", "集める", "隠す", "忘れる"], correct: 1, explanation: "remove: 〜を取り除く。'Remove your shoes'で「靴を脱いで」です。" },
    { word: "replace", time: 403, choices: ["そのままにする", "〜を置き換える", "壊す", "忘れる", "隠す"], correct: 1, explanation: "replace: 〜を置き換える。'Replace the old parts'で「古い部品を交換する」です。" },
    { word: "reveal", time: 409, choices: ["隠す", "〜を明らかにする", "忘れる", "疑う", "嘘をつく"], correct: 1, explanation: "reveal: 〜を明らかにする。'Reveal a secret'で「秘密を明かす」です。" },
    { word: "save", time: 415, choices: ["捨てる", "〜を救う", "壊す", "無駄遣いする", "忘れる"], correct: 1, explanation: "save: 〜を救う、蓄える、節約する。'Save time'で「時間を節約する」です。" },
    { word: "seek", time: 421, choices: ["逃げる", "〜を探し求める", "捨てる", "隠す", "忘れる"], correct: 1, explanation: "seek: 〜を探し求める。'Seek a better life'で「より良い生活を求める」です。" },
    { word: "serve", time: 427, choices: ["支配する", "〜に役立つ", "邪魔する", "忘れる", "疑う"], correct: 1, explanation: "serve: 〜に仕える、〜に役立つ。'Serve the lunch'で「昼食を出す」です。" },
    { word: "settle", time: 433, choices: ["かき混ぜる", "〜を解決する", "壊す", "忘れる", "逃げる"], correct: 1, explanation: "settle: 〜を解決する、落ち着かせる。'Settle the problem'で「問題を解決する」です。" },
    { word: "survive", time: 439, choices: ["死ぬ", "〜を生き残る", "殺す", "忘れる", "去る"], correct: 1, explanation: "survive: 〜を生き残る。'Survive the crash'で「事故から生き残る」です。" },
    { word: "threaten", time: 445, choices: ["助ける", "〜を脅す", "励ます", "守る", "許す"], correct: 1, explanation: "threaten: 〜を脅す。'Threaten the peace'で「平和を脅かす」です。" },
    { word: "vary", time: 451, choices: ["維持する", "変化する", "壊す", "忘れる", "集める"], correct: 1, explanation: "vary: 変化する、〜を変える。'Vary in color'で「色が変わる」です。" },
    { word: "warn", time: 457, choices: ["褒める", "〜に警告する", "誘う", "疑う", "忘れる"], correct: 1, explanation: "warn: 〜に警告する。'Warn him of danger'で「彼に危険を警告する」です。" },
    { word: "waste", time: 463, choices: ["大切にする", "〜を浪費する", "拾う", "洗う", "置く"], correct: 1, explanation: "waste: 〜を浪費する、無駄にする。'Waste time'で「時間を無駄にする」です。" },
    { word: "approach", time: 469, choices: ["遠ざかる", "〜に近づく", "止まる", "逃げる", "待つ"], correct: 1, explanation: "approach: 〜に近づく。'Approach the city'で「街に近づく」です。" },
    { word: "attend", time: 475, choices: ["欠席する", "〜に出席する", "忘れる", "邪魔する", "批判する"], correct: 1, explanation: "attend: 〜に出席する、〜の世話をする。'Attend the meeting'で「会議に出席する」です。" },
    { word: "avoid", time: 481, choices: ["求める", "〜を避ける", "ぶつかる", "探す", "待つ"], correct: 1, explanation: "avoid: 〜を避ける。'Avoid heavy traffic'で「渋滞を避ける」です。" },
    { word: "concern", time: 487, choices: ["無関心でいる", "〜に関係する", "忘れる", "壊す", "隠す"], correct: 1, explanation: "concern: 〜に関係する、〜を心配させる。'As far as I'm concerned'で「私に関する限り」です。" },
    { word: "deny", time: 493, choices: ["認める", "〜を否定する", "信じる", "忘れる", "期待する"], correct: 1, explanation: "deny: 〜を否定する。'Deny the fact'で「事実を否定する」です。" },
    { word: "determine", time: 499, choices: ["迷う", "〜を決定する", "試す", "学ぶ", "教える"], correct: 1, explanation: "determine: 〜を決定する、決心する。'Determine the cause'で「原因を突き止める」です。" },
    { word: "divide", time: 505, choices: ["合わせる", "〜を分割する", "壊す", "捨てる", "隠す"], correct: 1, explanation: "divide: 〜を分割する。'Divide the cake'で「ケーキを分ける」です。" },
    { word: "employ", time: 511, choices: ["解雇する", "〜を雇う", "育てる", "教える", "呼ぶ"], correct: 1, explanation: "employ: 〜を雇う、〜を用いる。'Employ many methods'で「多くの方法を用いる」です。" },
    { word: "engage", time: 517, choices: ["離れる", "〜に従事する", "忘れる", "疑う", "拒否する"], correct: 1, explanation: "engage: 〜に従事する、〜を引きつける。'Engage in activities'で「活動に従事する」です。" },
    { word: "examine", time: 523, choices: ["放置する", "〜を調査する", "信じる", "壊す", "忘れる"], correct: 1, explanation: "examine: 〜を調査する、試験する。'Examine the results'で「結果を調査する」です。" },
    { word: "express", time: 529, choices: ["隠す", "〜を表現する", "忘れる", "疑う", "嘘をつく"], correct: 1, explanation: "express: 〜を表現する、述べる。'Express my feelings'で「気持ちを表現する」です。" },
    { word: "suit", time: 535, choices: ["〜に似合う", "壊す", "嫌う", "忘れる", "脱ぐ"], correct: 0, explanation: "suit: 〜に似合う、ふさわしい。'Suit your needs'で「ニーズに合う」です。" },
    { word: "occur", time: 541, choices: ["〜が起こる", "消える", "止まる", "防ぐ", "忘れる"], correct: 0, explanation: "occur: 〜が起こる、心に浮かぶ。'A good idea occurred to me'で「良い考えが浮かんだ」です。" },
    { word: "attach", time: 547, choices: ["〜を取り付ける", "外す", "捨てる", "壊す", "隠す"], correct: 0, explanation: "attach: 〜を付ける、添付する。'Attach a file'で「ファイルを添付する」です。" },
    { word: "settle", time: 553, choices: ["解決する", "かき混ぜる", "壊す", "忘れる", "逃げる"], correct: 0, explanation: "settle: 〜を解決する、定住する。'Settle in a new city'で「新しい街に定住する」です。" },
    { word: "admire", time: 559, choices: ["〜に感嘆する", "見下す", "忘れる", "嫌う", "疑う"], correct: 0, explanation: "admire: 〜に感嘆する、〜を賞賛する。'Admire her talent'で「彼女の才能を褒める」です。" },
    { word: "manage", time: 565, choices: ["〜を管理する", "失敗する", "忘れる", "壊す", "隠す"], correct: 0, explanation: "manage: 〜を何とかやり遂げる、管理する。'Manage to finish'で「何とか終える」です。" },
    { word: "admit", time: 571, choices: ["〜を認める", "拒否する", "疑う", "忘れる", "隠す"], correct: 0, explanation: "admit: 〜を認める、（入場を）許可する。'Admit a mistake'で「間違いを認める」です。" },
    { word: "appreciate", time: 577, choices: ["〜を正しく評価する", "軽蔑する", "忘れる", "疑う", "壊す"], correct: 0, explanation: "appreciate: 〜を正しく評価する、感謝する。'Appreciate your help'で「助けに感謝する」です。" },
    { word: "ignore", time: 583, choices: ["〜を無視する", "気づく", "大切にする", "褒める", "探す"], correct: 0, explanation: "ignore: 〜を無視する。'Ignore warnings'で「警告を無視する」です。" },
    { word: "maintain", time: 589, choices: ["〜を維持する", "主張する", "壊す", "捨てる", "忘れる"], correct: 0, explanation: "maintain: 〜を維持する、主張する。'Maintain a high standard'で「高い水準を維持する」です。" },
    { word: "predict", time: 595, choices: ["〜を予測する", "思い出す", "忘れる", "疑う", "隠す"], correct: 0, explanation: "predict: 〜を予測する、予言する。'Predict the future'で「未来を予測する」です。" },
    { word: "own", time: 601, choices: ["〜を所有する", "借りる", "貸す", "捨てる", "壊す"], correct: 0, explanation: "own: 〜を所有する。'Own a car'で「車を持っている」です。" },
];

// Dynamic YouTube API Loading
(function loadYoutubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

let player;
let isPlayerReady = false;
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 50;

// YouTube IFrame API Callback (Global)
window.onYouTubeIframeAPIReady = function () {
    // Check if we are running on file:// protocol
    const isLocalFile = window.location.protocol === 'file:';
    if (isLocalFile) {
        console.warn("YouTube API might have issues with 'file://' protocol. Consider using a local server (Live Server, etc.)");
    }

    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'RNNf7vd880c', // System English Vocabulary 1-100
        playerVars: {
            'autoplay': 0,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'rel': 0,
            'modestbranding': 1,
            'enablejsapi': 1,
            // For local files, providing no origin or '*' is sometimes more reliable than 'null'
            'origin': isLocalFile ? null : window.location.origin
        },
        events: {
            'onReady': onPlayerReady,
            'onError': onPlayerError,
            'onStateChange': onPlayerStateChange
        }
    });

    // Fallback: If onReady doesn't fire after 5 seconds but the video works, force ready
    // (Sometimes audio works even if cross-origin UI communication fails)
    setTimeout(() => {
        if (!isPlayerReady) {
            console.log("Forcing ready state as fallback...");
            onPlayerReady();
        }
    }, 5000);
};

function onPlayerError(event) {
    console.error("YouTube Player Error:", event.data);
    document.getElementById('api-status').textContent = "YouTube 読み込みエラー (再読み込みしてください)";
    document.getElementById('api-status').style.color = "#ef4444";
}

function onPlayerReady(event) {
    isPlayerReady = true;
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
            // Stop after 3 seconds roughly to avoid playing too much
            setTimeout(() => {
                player.pauseVideo();
            }, 3000);
        }
    }

    handleAnswer(idx) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);

        if (idx === currentQuiz.correct) {
            score += 20;
            buttons[idx].classList.add('correct');
            this.playEffect('correct');
            document.getElementById('feedback-text').innerHTML = `<strong>✨ Correct! ✨</strong><br><br>${currentQuiz.explanation}`;
        } else {
            buttons[idx].classList.add('wrong');
            buttons[currentQuiz.correct].classList.add('correct');
            this.playEffect('wrong');
            document.getElementById('feedback-text').innerHTML = `<strong>⚠️ Mistake...</strong><br><br>${currentQuiz.explanation}`;
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
