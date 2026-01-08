// Vocabulary Data categorized by range
const vocabData = {
    '601-700': [
        { word: "proceed", choices: ["進む", "止まる", "戻る", "隠れる", "叫ぶ"], correct: 0, explanation: "proceed は「（特定の方向に）進む、続行する」という意味です。" },
        { word: "ensure", choices: ["確実にする", "無視する", "疑う", "遅らせる", "壊す"], correct: 0, explanation: "ensure A で「Aを確実にする、保証する」という意味になります。" },
        { word: "interpret", choices: ["無視する", "解釈する", "描く", "隠す", "忘れる"], correct: 1, explanation: "interpret は「〜を解釈する、通訳する」という意味です。" },
        { word: "cease", choices: ["続ける", "やめる", "始める", "変える", "壊す"], correct: 1, explanation: "cease to do/doing で「〜するのをやめる、中止する」という意味です。" },
        { word: "ban", choices: ["禁止する", "許す", "誘う", "褒める", "守る"], correct: 0, explanation: "ban は「（公式に）〜を禁止する」という意味。名詞では「禁止（令）」となります。" },
        { word: "obey", choices: ["従う", "逆らう", "逃げる", "壊す", "捨てる"], correct: 0, explanation: "obey A で「A（人・命令・規則など）に従う」という意味です。" },
        { word: "eliminate", choices: ["増やす", "除去する", "集める", "隠す", "忘れる"], correct: 1, explanation: "eliminate A で「Aを排除する、除去する」という意味になります。" },
        { word: "resist", choices: ["抵抗する", "降参する", "従う", "忘れる", "信じる"], correct: 0, explanation: "resist A で「Aに抵抗する、耐える」という意味です。" },
        { word: "accompany", choices: ["同伴する", "去る", "離れる", "拒否する", "忘れる"], correct: 0, explanation: "accompany A で「A（人）に同行する、A（物）に付随する」という意味です。" },
        { word: "commit", choices: ["犯す", "守る", "許す", "感謝する", "忘れる"], correct: 0, explanation: "commit a crime で「罪を犯す」。また commit oneself to A で「Aに専念する」という意味もあります。" },
        { word: "pursue", choices: ["追求する", "諦める", "止まる", "隠れる", "忘れる"], correct: 0, explanation: "pursue は「〜を追求する、追跡する」という意味です。" },
        { word: "demonstrate", choices: ["証明する", "隠す", "疑う", "忘れる", "壊す"], correct: 0, explanation: "demonstrate は「〜を論証する、実演する、デモをする」などの意味があります。" },
        { word: "bet", choices: ["賭ける", "捨てる", "集める", "隠す", "忘れる"], correct: 0, explanation: "I bet that ... で「きっと〜だと思う」という確信を表す際によく使われます。" },
        { word: "ruin", choices: ["台無しにする", "建てる", "守る", "作る", "飾る"], correct: 0, explanation: "ruin は「〜を破滅させる、台無しにする」という意味です。" },
        { word: "threaten", choices: ["脅す", "助ける", "励ます", "守る", "許す"], correct: 0, explanation: "threaten to do で「〜すると脅す」。前回も登場しましたが重要な動詞です。" },
        { word: "attach", choices: ["取り付ける", "外す", "捨てる", "壊す", "隠す"], correct: 0, explanation: "attach A to B で「AをBに貼り付ける、添付する」という意味です。" },
        { word: "reverse", choices: ["逆転させる", "続ける", "維持する", "壊す", "忘れる"], correct: 0, explanation: "reverse は「〜を反対にする、逆転させる」という意味です。" },
        { word: "restrict", choices: ["広げる", "制限する", "壊す", "無視する", "忘れる"], correct: 1, explanation: "restrict A to B で「AをBに制限する」という意味になります。" },
        { word: "compose", choices: ["構成する", "壊す", "分ける", "去る", "忘れる"], correct: 0, explanation: "be composed of A で「Aから構成されている」という受け身の形が重要です。" },
        { word: "lean", choices: ["寄りかかる", "立つ", "座る", "走る", "飛ぶ"], correct: 0, explanation: "lean against A で「Aに寄りかかる」という意味になります。" },
        { word: "substitute", choices: ["代わりに用いる", "そのまま使う", "壊す", "捨てる", "忘れる"], correct: 0, explanation: "substitute A for B で「Bの代わりにAを用いる」という意味になります。" },
        { word: "trace", choices: ["たどる", "見失う", "消す", "壊す", "忘れる"], correct: 0, explanation: "trace は「（足跡や起源などを）たどる、突き止める」という意味です。" },
        { word: "interrupt", choices: ["中断させる", "続ける", "助ける", "守る", "忘れる"], correct: 0, explanation: "interrupt は「〜を妨げる、中断させる」という意味です。" },
        { word: "confront", choices: ["立ち向かう", "逃げる", "避ける", "忘れる", "疑う"], correct: 0, explanation: "be confronted with A で「A（困難など）に直面している」という意味になります。" },
        { word: "illustrate", choices: ["説明する", "隠す", "消す", "壊す", "忘れる"], correct: 0, explanation: "illustrate は「（図解や例で）〜を説明する」という意味です。" },
        { word: "arrest", choices: ["逮捕する", "逃がす", "助ける", "褒める", "誘う"], correct: 0, explanation: "arrest A for B で「Bの容疑でAを逮捕する」という意味になります。" },
        { word: "stimulate", choices: ["刺激する", "抑える", "止める", "隠す", "忘れる"], correct: 0, explanation: "stimulate は「〜を刺激する、活気づける」という意味です。" },
        { word: "assure", choices: ["保証する", "疑う", "怖がらせる", "無視する", "忘れる"], correct: 0, explanation: "assure A that ... で「Aに〜だと確約する」という意味になります。" },
        { word: "consult", choices: ["相談する", "命じる", "教える", "壊す", "忘れる"], correct: 0, explanation: "consult A で「Aに相談する、（辞書などを）引く」という意味です。" },
        { word: "depress", choices: ["意気消沈させる", "喜ばせる", "励ます", "守る", "忘れる"], correct: 0, explanation: "depress は「〜を憂鬱にさせる、景気を停滞させる」という意味があります。" },
        { word: "crash", choices: ["衝突する", "浮かぶ", "隠れる", "止まる", "飛ぶ"], correct: 0, explanation: "crash は「（激音を立てて）衝突する、墜落する」という意味です。" },
        { word: "inspire", choices: ["奮い立たせる", "がっかりさせる", "止める", "隠す", "忘れる"], correct: 0, explanation: "inspire A to do で「Aを〜する気にさせる」という意味になります。" },
        { word: "specialize", choices: ["専門にする", "広く学ぶ", "教える", "忘れる", "壊す"], correct: 0, explanation: "specialize in A で「Aを専門にする、専攻する」という意味です。" },
        { word: "cultivate", choices: ["栽培する", "荒らす", "壊す", "捨てる", "忘れる"], correct: 0, explanation: "cultivate は「〜を耕作する、栽培する、（才能などを）育てる」という意味です。" },
        { word: "fulfill", choices: ["果たす", "諦める", "忘れる", "壊す", "捨てる"], correct: 0, explanation: "fulfill は「（約束や義務などを）果たす、（夢などを）実現させる」という意味です。" },
        { word: "transmit", choices: ["送る", "受け取る", "隠す", "壊す", "忘れる"], correct: 0, explanation: "transmit は「〜を送信する、伝える、（病気などを）伝染させる」という意味です。" },
        { word: "found", choices: ["設立する", "壊す", "去る", "忘れる", "隠す"], correct: 0, explanation: "found は「〜を設立する、基礎を置く」という意味です。find の過去形と同形なので注意。" },
        { word: "clap", choices: ["手をたたく", "足踏みする", "叫ぶ", "走る", "飛ぶ"], correct: 0, explanation: "clap one's hands で「手をたたく」という意味になります。" },
        { word: "burst", choices: ["破裂する", "縮む", "固まる", "隠れる", "止まる"], correct: 0, explanation: "burst into tears で「わっと泣き出す」という表現も有名です。" },
        { word: "bow", choices: ["おじぎする", "反抗する", "叫ぶ", "走る", "飛ぶ"], correct: 0, explanation: "bow は「おじぎをする、屈服する」という意味です。" },
        { word: "dismiss", choices: ["解雇する", "雇う", "育てる", "褒める", "誘う"], correct: 0, explanation: "dismiss は「〜を解雇する、（考えなどを）退ける」という意味です。" },
        { word: "breed", choices: ["繁殖させる", "殺す", "逃がす", "壊す", "忘れる"], correct: 0, explanation: "breed は「（動物を）飼育する、繁殖させる」という意味です。" },
        { word: "prohibit", choices: ["禁止する", "許す", "促す", "褒める", "守る"], correct: 0, explanation: "prohibit A from doing で「Aが〜するのを禁止する」という語法になります。" },
        { word: "oblige", choices: ["義務付ける", "自由にさせる", "許す", "忘れる", "壊す"], correct: 0, explanation: "be obliged to do で「〜せざるを得ない」という意味になります。" },
        { word: "qualify", choices: ["適任である", "失格する", "迷う", "壊す", "忘れる"], correct: 0, explanation: "qualify for A で「Aの資格がある、適任である」という意味になります。" },
        { word: "invest", choices: ["投資する", "浪費する", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "invest A in B で「AをBに投資する」という意味になります。" },
        { word: "grasp", choices: ["理解する", "誤解する", "忘れる", "捨てる", "隠す"], correct: 0, explanation: "grasp は「〜をしっかりと握る、〜を理解する」という意味です。" },
        { word: "collapse", choices: ["崩壊する", "耐える", "建つ", "広がる", "飛ぶ"], correct: 0, explanation: "collapse は「（建物などが）崩壊する、（人が）倒れる」という意味です。" },
        { word: "overlook", choices: ["見落とす", "見つける", "注視する", "隠す", "壊す"], correct: 0, explanation: "overlook は「〜を見落とす、（欠点などを）大目に見る、〜を見下ろす」という意味があります。" },
        { word: "accuse", choices: ["非難する", "褒める", "許す", "感謝する", "誘う"], correct: 0, explanation: "accuse A of B で「B（罪など）でAを非難する、告訴する」という意味になります。" },
        { word: "frustrate", choices: ["挫折させる", "助ける", "励ます", "守る", "忘れる"], correct: 0, explanation: "frustrate は「〜を挫折させる、いらだたせる」という意味です。" },
        { word: "deprive", choices: ["から奪う", "与える", "貸す", "守る", "忘れる"], correct: 0, explanation: "deprive A of B で「AからBを奪う」という語法が非常に重要です。" },
        { word: "astonish", choices: ["驚かせる", "安心させる", "怒らせる", "無視する", "忘れる"], correct: 0, explanation: "astonish は「〜を（ひどく）驚かせる」という意味です。" },
        { word: "register", choices: ["登録する", "消す", "忘れる", "壊す", "捨てる"], correct: 0, explanation: "register は「〜を登録する、（熱などが）〜を示す」という意味です。" }
    ],
    '701-800': [
        { word: "purchase", choices: ["購入する", "捨てる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "purchase A で「Aを購入する」という意味です。buyより少し硬い語です。" },
        { word: "restore", choices: ["修復する", "壊す", "汚す", "隠す", "忘れる"], correct: 0, explanation: "restore は「〜を元の状態に戻す、修復する」という意味です。" },
        { word: "command", choices: ["命じる", "頼む", "誘う", "褒める", "許す"], correct: 0, explanation: "command A to do で「Aに〜するように命じる」という意味になります。" },
        { word: "overtake", choices: ["追い越す", "遅れる", "止まる", "逃げる", "待つ"], correct: 0, explanation: "overtake は「〜を追い越す、〜に（不意に）追いつく」という意味です。" },
        { word: "alter", choices: ["変える", "維持する", "壊す", "捨てる", "隠す"], correct: 0, explanation: "alter は「〜を（部分的に）変える、作り直す」という意味です。" },
        { word: "exert", choices: ["行使する", "抑える", "止める", "隠す", "忘れる"], correct: 0, explanation: "exert pressure on A で「Aに圧力をかける」という表現がよく使われます。" },
        { word: "modify", choices: ["修正する", "壊す", "汚す", "隠す", "忘れる"], correct: 0, explanation: "modify は「〜を（改善のために）修正する、緩和する」という意味です。" },
        { word: "suspend", choices: ["中断する", "続ける", "始める", "終える", "変える"], correct: 0, explanation: "suspend は「〜を一時中断する、〜を吊るす」という意味があります。" },
        { word: "speculate", choices: ["推測する", "決定する", "忘れる", "隠す", "疑う"], correct: 0, explanation: "speculate about/on A で「Aについてあれこれ推測する、投機する」という意味です。" },
        { word: "render", choices: ["…にする", "直す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "render A B で「AをB（の状態）にする」という意味になります。" },
        { word: "derive", choices: ["引き出す", "捨てる", "隠す", "忘れる", "壊す"], correct: 0, explanation: "derive A from B で「BからAを引き出す、由来する」という意味になります。" },
        { word: "overcome", choices: ["克服する", "負ける", "逃げる", "待つ", "忘れる"], correct: 0, explanation: "overcome A で「A（困難など）を克服する、打ち勝つ」という意味です。" },
        { word: "yield", choices: ["産出する", "消費する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "yield は「〜を産出する、（利益などを）生む、屈服する」という意味があります。" },
        { word: "locate", choices: ["見つける", "失う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "locate A で「Aの場所を見つける、突き止める」という意味になります。" },
        { word: "undertake", choices: ["引き受ける", "断る", "逃げる", "忘れる", "壊す"], correct: 0, explanation: "undertake A で「A（仕事など）を引き受ける、着手する」という意味です。" },
        { word: "accommodate", choices: ["収容する", "追い出す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "accommodate A で「A（人）を宿泊させる、収容する、適応させる」という意味です。" },
        { word: "coordinate", choices: ["調整する", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "coordinate は「〜を調整する、調和させる」という意味です。" },
        { word: "originate", choices: ["起こる", "終わる", "隠れる", "止まる", "飛ぶ"], correct: 0, explanation: "originate in A で「Aから始まる、由来する」という意味になります。" },
        { word: "convert", choices: ["変える", "維持する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "convert A into B で「AをBに変容させる、転換する」という意味になります。" },
        { word: "dictate", choices: ["決定する", "従う", "忘れる", "疑う", "壊す"], correct: 0, explanation: "dictate は「〜を命じる、決定する、書き取らせる」という意味があります。" },
        { word: "transport", choices: ["輸送する", "捨てる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "transport A from B to C で「AをBからCへ輸送する」という意味になります。" },
        { word: "anticipate", choices: ["予想する", "忘れる", "疑う", "隠す", "無視する"], correct: 0, explanation: "anticipate A で「Aを予想する、楽しみに待つ」という意味です。" },
        { word: "dismiss", choices: ["退ける", "受け入れる", "雇う", "育てる", "褒める"], correct: 0, explanation: "dismiss は「〜を（考え・提案などを）退ける、解散させる、解雇する」という意味です。" },
        { word: "speculate", choices: ["推測する", "信じる", "忘れる", "隠す", "壊す"], correct: 0, explanation: "先ほども出ましたが、動詞の語法として重要です。" },
        { word: "assign", choices: ["割り当てる", "奪う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "assign A to B で「AをBに割り当てる、配属する」という意味になります。" },
        { word: "violate", choices: ["違反する", "従う", "守る", "褒める", "隠す"], correct: 0, explanation: "violate the law で「法律に違反する」という意味になります。" },
        { word: "implement", choices: ["実行する", "計画するだけ", "止める", "壊す", "隠す"], correct: 0, explanation: "implement A で「A（計画・政策など）を実行に移す」という意味です。" },
        { word: "interact", choices: ["交流する", "無視する", "戦う", "隠れる", "去る"], correct: 0, explanation: "interact with A で「Aと相互に作用する、交流する」という意味になります。" },
        { word: "assemble", choices: ["組み立てる", "分解する", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "assemble は「〜を組み立てる、（人が）集まる」という意味があります。" },
        { word: "overestimate", choices: ["過大評価する", "過小評価する", "無視する", "疑う", "忘れる"], correct: 0, explanation: "overestimate A は「Aを高く見積もりすぎる」という意味。対義語は underestimate。" },
        { word: "guarantee", choices: ["保証する", "疑う", "拒否する", "隠す", "忘れる"], correct: 0, explanation: "guarantee A で「Aを保証する、請け負う」という意味になります。" },
        { word: "manufacture", choices: ["製造する", "壊す", "捨てる", "修理する", "隠す"], correct: 0, explanation: "manufacture A で「A（製品）を大規模に製造する」という意味です。" },
        { word: "overwhelm", choices: ["圧倒する", "助ける", "励ます", "無視する", "忘れる"], correct: 0, explanation: "be overwhelmed with/by A で「Aに圧倒される、打ちのめされる」という形が多いです。" },
        { word: "distribute", choices: ["分配する", "集める", "奪う", "隠す", "忘れる"], correct: 0, explanation: "distribute A to B で「AをBに配る、分配する」という意味になります。" },
        { word: "anticipate", choices: ["予期する", "忘れる", "疑う", "止める", "去る"], correct: 0, explanation: "anticipate A で「Aを予想する、楽しみに待つ」という意味です。" },
        { word: "undergo", choices: ["経験する", "避ける", "止める", "隠す", "忘れる"], correct: 0, explanation: "undergo change で「変化を経験する、受ける」という意味になります。" },
        { word: "accomplish", choices: ["成し遂げる", "失敗する", "諦める", "壊す", "忘れる"], correct: 0, explanation: "accomplish A で「A（目的など）を達成する、完遂する」という意味です。" },
        { word: "overlook", choices: ["見落とす", "見つける", "注視する", "隠す", "壊す"], correct: 0, explanation: "overlook は「〜を見落とす、（欠点などを）大目に見る、〜を見下ろす」という意味があります。" },
        { word: "initiate", choices: ["始める", "終える", "止める", "隠す", "忘れる"], correct: 0, explanation: "initiate A で「Aを新たに始める、創始する」という意味です。" },
        { word: "overstate", choices: ["大げさに言う", "過小評価する", "控えめに言う", "隠す", "忘れる"], correct: 0, explanation: "overstate A で「Aを誇張して言う、大げさに述べる」という意味です。" },
        { word: "collaborate", choices: ["協力する", "対立する", "無視する", "隠れる", "去る"], correct: 0, explanation: "collaborate with A で「Aと協力して働く、共同研究する」という意味です。" },
        { word: "navigate", choices: ["操縦する", "迷う", "止まる", "待つ", "走る"], correct: 0, explanation: "navigate A で「A（船や進路）を操縦する、航行する」という意味になります。" },
        { word: "prescribe", choices: ["処方する", "飲む", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "prescribe medicine で「薬を処方する」。また「〜を規定する」という意味もあります。" },
        { word: "reinforce", choices: ["補強する", "弱める", "壊す", "汚す", "隠す"], correct: 0, explanation: "reinforce A で「Aを強化する、補強する」という意味になります。" },
        { word: "specialize", choices: ["専門にする", "広く学ぶ", "教える", "忘れる", "壊す"], correct: 0, explanation: "specialize in A で「Aを専門にする、専攻する」という意味です。" },
        { word: "violate", choices: ["違反する", "守る", "称える", "隠す", "忘れる"], correct: 0, explanation: "violate the law で「法律に違反する」という意味になります。" },
        { word: "confront", choices: ["直面する", "避ける", "逃げる", "隠れる", "忘れる"], correct: 0, explanation: "be confronted with A で「A（困難など）に直面している」という意味になります。" },
        { word: "overtake", choices: ["追い越す", "遅れる", "止まる", "待つ", "去る"], correct: 0, explanation: "overtake は「〜を追い越す、〜に（不意に）追いつく」という意味です。" },
        { word: "implement", choices: ["実行する", "計画する", "止める", "隠す", "壊す"], correct: 0, explanation: "implement A で「A（計画・政策など）を実行に移す」という意味です。" },
        { word: "exert", choices: ["行使する", "抑える", "止める", "隠す", "忘れる"], correct: 0, explanation: "exert pressure on A で「Aに圧力をかける」という表現がよく使われます。" }
    ],
    '801-900': [
        { word: "adjust", choices: ["適合させる", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "adjust to A で「Aに順応する、適合させる」という意味になります。" },
        { word: "compensate", choices: ["補償する", "奪う", "攻める", "隠す", "忘れる"], correct: 0, explanation: "compensate for A で「A（欠点・損害など）を埋め合わせる、補填する」という意味です。" },
        { word: "exhibit", choices: ["展示する", "隠す", "壊す", "汚す", "忘れる"], correct: 0, explanation: "exhibit A で「Aを展示する、示す」という意味です。" },
        { word: "propose", choices: ["提案する", "拒む", "隠す", "忘れる", "疑う"], correct: 0, explanation: "propose doing や propose that ... で「〜することを提案する、結婚を申し込む」という意味です。" },
        { word: "submit", choices: ["提出する", "持ち帰る", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "submit A to B で「AをBに提出する」または submit to A で「A（力など）に服従する」という意味です。" },
        { word: "negotiate", choices: ["交渉する", "喧嘩する", "無視する", "隠れる", "去る"], correct: 0, explanation: "negotiate with A で「Aと交渉する」という意味になります。" },
        { word: "perceive", choices: ["知覚する", "見逃す", "忘れる", "隠す", "疑う"], correct: 0, explanation: "perceive A as B で「AをBだと気づく、認識する」という意味になります。" },
        { word: "reinforce", choices: ["強化する", "弱める", "壊す", "隠す", "忘れる"], correct: 0, explanation: "reinforce A で「Aを強化する、補強する」という意味になります。" },
        { word: "stimulate", choices: ["刺激する", "抑える", "止める", "隠す", "忘れる"], correct: 0, explanation: "stimulate は「〜を刺激する、活気づける」という意味です。" },
        { word: "tolerate", choices: ["許容する", "拒む", "怒る", "隠す", "忘れる"], correct: 0, explanation: "tolerate A で「A（無礼・苦痛など）を許容する、耐える」という意味です。" },
        { word: "underestimate", choices: ["過小評価する", "過大評価する", "認める", "疑う", "忘れる"], correct: 0, explanation: "underestimate A で「A（能力など）を過小評価する」という意味です。" },
        { word: "verify", choices: ["確かめる", "疑う", "嘘をつく", "隠す", "忘れる"], correct: 0, explanation: "verify A で「A（事実など）が正しいことを確かめる、立証する」という意味です。" },
        { word: "withdraw", choices: ["撤回する", "進める", "出す", "隠す", "忘れる"], correct: 0, explanation: "withdraw A from B で「BからAを引き出す、撤退させる、撤回する」という意味になります。" },
        { word: "coordinate", choices: ["調整する", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "coordinate は「〜を調整する、調和させる」という意味です。" },
        { word: "demonstrate", choices: ["論証する", "隠す", "疑う", "忘れる", "壊す"], correct: 0, explanation: "demonstrate は「〜を論証する、実演する、デモをする」などの意味があります。" },
        { word: "evaluate", choices: ["評価する", "無視する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "evaluate A で「A（価値など）を査定する、評価する」という意味になります。" },
        { word: "facilitate", choices: ["促進する", "妨げる", "止める", "隠す", "忘れる"], correct: 0, explanation: "facilitate A で「A（進行・作業など）を容易にする、促進する」という意味です。" },
        { word: "isolate", choices: ["孤立させる", "混ぜる", "助ける", "隠す", "忘れる"], correct: 0, explanation: "isolate A from B で「AをBから隔離する、孤立させる」という意味になります。" },
        { word: "justify", choices: ["正当化する", "非難する", "疑う", "隠す", "忘れる"], correct: 0, explanation: "justify doing で「〜することを正当化する」という意味になります。" },
        { word: "modify", choices: ["修正する", "壊す", "維持する", "隠す", "忘れる"], correct: 0, explanation: "modify は「〜を（改善のために）修正する、緩和する」という意味です。" },
        { word: "notify", choices: ["通知する", "隠す", "忘れる", "疑う", "壊す"], correct: 0, explanation: "notify A of B で「AにBを通知する」という意味になります。" },
        { word: "orient", choices: ["適応させる", "迷わせる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "be oriented towards A で「Aに関心がある、A向けである」という形がよく使われます。" },
        { word: "postpone", choices: ["延期する", "早める", "止める", "隠す", "忘れる"], correct: 0, explanation: "postpone doing で「〜することを延期する」という意味になります。put off と同義。" },
        { word: "reconcile", choices: ["和解させる", "戦わせる", "無視する", "隠す", "忘れる"], correct: 0, explanation: "reconcile A with B で「AをBと調和させる、和解させる」という意味になります。" },
        { word: "summarize", choices: ["要約する", "詳しく話す", "隠す", "忘れる", "壊す"], correct: 0, explanation: "summarize A で「Aを要約する、手短に述べる」という意味です。" },
        { word: "update", choices: ["更新する", "放置する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "update A で「Aを最新の状態にする」という意味です。" },
        { word: "verify", choices: ["立証する", "疑う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "verify A で「A（事実など）が正しいことを確かめる、立証する」という意味です。" },
        { word: "advocate", choices: ["主張する", "反対する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "advocate A で「A（主義など）を主張する、支持する」という意味です。" },
        { word: "clarify", choices: ["明らかにする", "濁す", "隠す", "忘れる", "壊す"], correct: 0, explanation: "clarify A で「A（意味など）をはっきりさせる、浄化する」という意味です。" },
        { word: "diversify", choices: ["多様化する", "統一する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "diversify A で「Aを多様化する、多角経営する」という意味になります。" },
        { word: "emphasize", choices: ["強調する", "軽視する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "emphasizing that ... で「〜ということを強調する」という意味になります。" },
        { word: "generate", choices: ["生み出す", "消費する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "generate power で「電力を発生させる」など、生み出すという意味です。" },
        { word: "illustrate", choices: ["説明する", "隠す", "消す", "壊す", "忘れる"], correct: 0, explanation: "illustrate は「（図解や例で）〜を説明する」という意味です。" },
        { word: "manipulate", choices: ["操作する", "放置する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "manipulate A で「Aを巧みに操る、改ざんする」という意味があります。" },
        { word: "overestimate", choices: ["過大評価する", "過小評価する", "認める", "疑う", "忘れる"], correct: 0, explanation: "overestimate A は「Aを高く見積もりすぎる」という意味。対義語は underestimate。" },
        { word: "prescan", choices: ["スキャンする", "無視する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "事前にざっと目を通す、スキャンするという意味です。" },
        { word: "qualify", choices: ["資格を与える", "失格させる", "迷う", "壊す", "忘れる"], correct: 0, explanation: "qualify for A で「Aの資格がある、適任である」という意味になります。" },
        { word: "rectify", choices: ["直す", "壊す", "汚す", "隠す", "忘れる"], correct: 0, explanation: "rectify A で「A（間違いなど）を是正する、直す」という意味です。" },
        { word: "specialize", choices: ["専門にする", "広く学ぶ", "教える", "忘れる", "壊す"], correct: 0, explanation: "specialize in A で「Aを専門にする、専攻する」という意味です。" },
        { word: "transform", choices: ["一変させる", "維持する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "transform A into B で「AをBに（外形や性質を）変える」という意味になります。" },
        { word: "visualize", choices: ["視覚化する", "隠す", "忘れる", "疑う", "壊す"], correct: 0, explanation: "visualize A で「Aを心に思い描く、映像化する」という意味です。" },
        { word: "withstand", choices: ["耐える", "屈する", "逃げる", "壊す", "忘れる"], correct: 0, explanation: "withstand A で「A（圧力・攻撃など）に耐える、持ちこたえる」という意味です。" },
        { word: "compensate", choices: ["補償する", "奪う", "攻める", "隠す", "忘れる"], correct: 0, explanation: "compensate for A で「A（欠点・損害など）を埋め合わせる、補填する」という意味です。" },
        { word: "formulate", choices: ["考案する", "壊す", "隠す", "忘れる", "疑う"], correct: 0, explanation: "formulate a plan で「計画を立てる、策定する」という意味になります。" },
        { word: "implement", choices: ["実行する", "計画する", "止める", "隠す", "壊す"], correct: 0, explanation: "implement A で「A（計画・政策など）を実行に移す」という意味です。" },
        { word: "notify", choices: ["通知する", "隠す", "忘れる", "疑う", "壊す"], correct: 0, explanation: "notify A of B で「AにBを通知する」という意味になります。" },
        { word: "optimize", choices: ["最適化する", "悪化させる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "optimize A で「Aを最大限に活用する、最適化する」という意味です。" },
        { word: "quantify", choices: ["定量化する", "無視する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "quantify A で「Aを数量で表す、測定する」という意味になります。" },
        { word: "reconstruct", choices: ["再建する", "壊す", "汚す", "隠す", "忘れる"], correct: 0, explanation: "reconstruct A で「Aを再構築する、再現する」という意味です。" },
        { word: "standardize", choices: ["標準化する", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "standardize A で「Aを標準化する、規格を合わせる」という意味になります。" }
    ],
    '901-1000': [
        { word: "abandon", choices: ["捨てる", "拾う", "守る", "隠す", "忘れる"], correct: 0, explanation: "abandon A で「A（家族・計画など）を見捨てる、諦める」という意味になります。" },
        { word: "acknowledge", choices: ["認める", "否定する", "無視する", "隠す", "忘れる"], correct: 0, explanation: "acknowledge that ... で「〜であると認める」という意味です。" },
        { word: "acquire", choices: ["習得する", "失う", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "acquire A で「A（学問・技術など）を身につける、獲得する」という意味です。" },
        { word: "adapt", choices: ["適応させる", "乱す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "adapt to A で「Aに順応する」という意味になります。" },
        { word: "advocate", choices: ["提唱する", "反対する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "advocate environmental protection で「環境保護を主張する」のように使われます。" },
        { word: "attribute", choices: ["せいにする", "褒める", "許す", "感謝する", "忘れる"], correct: 0, explanation: "attribute A to B で「AをBのせいにする（のおかげだとする）」という意味です。" },
        { word: "calculate", choices: ["計算する", "迷う", "忘れる", "壊す", "隠す"], correct: 0, explanation: "calculate the cost で「費用を算出する」という意味です。" },
        { word: "challenge", choices: ["異議を唱える", "従う", "認める", "称える", "隠す"], correct: 0, explanation: "challenge a decision で「決定に異議を唱える」という意味になります。" },
        { word: "compile", choices: ["編集する", "壊す", "汚す", "隠す", "忘れる"], correct: 0, explanation: "compile a dictionary で「辞書を編纂する」という意味になります。" },
        { word: "contemplate", choices: ["熟考する", "無視する", "即決する", "隠す", "忘れる"], correct: 0, explanation: "contemplate doing で「〜しようかとじっくり考える」という意味になります。" },
        { word: "distinguish", choices: ["区別する", "混ぜる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "distinguish A from B で「AとBを区別する」という意味になります。" },
        { word: "eliminate", choices: ["排除する", "加える", "育てる", "隠す", "忘れる"], correct: 0, explanation: "eliminate A で「Aを完全に取り除く、死滅させる」という意味です。" },
        { word: "embrace", choices: ["受け入れる", "拒む", "捨てる", "壊す", "隠す"], correct: 0, explanation: "embrace a new idea で「新しい考えを（喜んで）受け入れる、抱きしめる」という意味です。" },
        { word: "encounter", choices: ["遭遇する", "避ける", "逃げる", "待つ", "忘れる"], correct: 0, explanation: "encounter a problem で「問題に直面する（偶然出会う）」という意味です。" },
        { word: "enhance", choices: ["強化する", "弱める", "壊す", "汚す", "隠す"], correct: 0, explanation: "enhance the quality で「質を高める、増進させる」という意味です。" },
        { word: "exhibit", choices: ["展示する", "隠す", "見せない", "壊す", "忘れる"], correct: 0, explanation: "exhibit A で「Aを展示する、示す」という意味です。" },
        { word: "facilitate", choices: ["促進する", "妨げる", "止める", "隠す", "忘れる"], correct: 0, explanation: "facilitate A で「A（進行・作業など）を容易にする、促進する」という意味です。" },
        { word: "fluctuate", choices: ["変動する", "安定する", "止まる", "隠れる", "飛ぶ"], correct: 0, explanation: "prices fluctuate で「価格が絶えず変動する」という意味になります。" },
        { word: "generate", choices: ["発生させる", "消費する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "generate power で「電力を発生させる」など、生み出すという意味です。" },
        { word: "identify", choices: ["特定する", "見失う", "忘れる", "隠す", "疑う"], correct: 0, explanation: "identify the cause で「原因を特定する」という意味になります。" },
        { word: "implement", choices: ["実施する", "計画する", "止める", "壊す", "隠す"], correct: 0, explanation: "implement A で「A（計画・政策など）を実行に移す」という意味です。" },
        { word: "incorporate", choices: ["組み込む", "外す", "分ける", "隠す", "忘れる"], correct: 0, explanation: "incorporate A into B で「AをBに組み入れる、包含する」という意味です。" },
        { word: "indicate", choices: ["指し示す", "隠す", "嘘をつく", "忘れる", "疑う"], correct: 0, explanation: "studies indicate that ... で「研究が〜であることを示している」という意味です。" },
        { word: "intervene", choices: ["介入する", "静観する", "逃げる", "隠れる", "去る"], correct: 0, explanation: "intervene in a dispute で「紛争に介入する」という意味になります。" },
        { word: "justify", choices: ["正当化する", "非難する", "疑う", "隠す", "忘れる"], correct: 0, explanation: "justify doing で「〜することを正当化する」という意味になります。" },
        { word: "launch", choices: ["開始する", "終える", "止める", "隠す", "忘れる"], correct: 0, explanation: "launch a campaign で「キャンペーンを開始する、ロケットを発射する」という意味です。" },
        { word: "maximize", choices: ["最大にする", "最小にする", "無視する", "隠す", "忘れる"], correct: 0, explanation: "maximize profits で「利益を最大化する」という意味になります。" },
        { word: "mitigate", choices: ["和らげる", "強める", "壊す", "隠す", "忘れる"], correct: 0, explanation: "mitigate the risk で「リスクを軽減する、和らげる」という意味です。" },
        { word: "monitor", choices: ["監視する", "放置する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "monitor the patient で「患者の状態を（絶えず）チェックする」という意味です。" },
        { word: "negotiate", choices: ["交渉する", "喧嘩する", "無視する", "隠れる", "去る"], correct: 0, explanation: "negotiate with A で「Aと交渉する」という意味になります。" },
        { word: "obtain", choices: ["得る", "失う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "obtain permission で「許可を得る」という意味です。" },
        { word: "perceive", choices: ["理解する", "誤解する", "忘れる", "隠す", "疑う"], correct: 0, explanation: "perceive A as B で「AをBだと気づく、認識する」という意味になります。" },
        { word: "preserve", choices: ["保存する", "壊す", "汚す", "捨てる", "忘れる"], correct: 0, explanation: "preserve the environment で「環境を保護・維持する」という意味です。" },
        { word: "prioritize", choices: ["優先する", "後回しにする", "無視する", "隠す", "忘れる"], correct: 0, explanation: "prioritize safety で「安全を最優先する」という意味になります。" },
        { word: "prohibit", choices: ["禁止する", "許す", "促す", "褒める", "守る"], correct: 0, explanation: "prohibit A from doing で「Aが〜するのを禁止する」という語法になります。" },
        { word: "pursue", choices: ["追求する", "諦める", "止まる", "隠す", "忘れる"], correct: 0, explanation: "pursue は「〜を追求する、追跡する」という意味です。" },
        { word: "reconcile", choices: ["調和させる", "対立させる", "無視する", "隠す", "忘れる"], correct: 0, explanation: "reconcile A with B で「AをBと調和させる、和解させる」という意味になります。" },
        { word: "regulate", choices: ["規制する", "放任する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "regulate traffic で「交通を規制する（整える）」という意味です。" },
        { word: "release", choices: ["放出する", "捕らえる", "隠す", "壊す", "忘れる"], correct: 0, explanation: "release information で「情報を公開する、放出する」という意味です。" },
        { word: "resolve", choices: ["解決する", "放置する", "迷う", "壊す", "忘れる"], correct: 0, explanation: "resolve a conflict で「紛争を解決する、決心する」という意味です。" },
        { word: "simulate", choices: ["シミュレートする", "実演する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "simulate a real situation で「現実の状態を模倣する」という意味です。" },
        { word: "speculate", choices: ["推測する", "決定する", "忘れる", "隠す", "疑う"], correct: 0, explanation: "先ほども出ましたが、動詞の語法として重要です。" },
        { word: "subsidize", choices: ["補助金を与える", "奪う", "攻める", "隠す", "忘れる"], correct: 0, explanation: "subsidize agriculture で「農業に補助金を出す」という意味になります。" },
        { word: "sustain", choices: ["維持する", "壊す", "止める", "隠す", "忘れる"], correct: 0, explanation: "sustainable development で「持続可能な開発」という意味の sustain です。" },
        { word: "terminate", choices: ["終結させる", "始める", "続ける", "隠す", "忘れる"], correct: 0, explanation: "terminate a contract で「契約を解除・終了させる」という意味です。" },
        { word: "validate", choices: ["有効にする", "無効化する", "疑う", "隠す", "忘れる"], correct: 0, explanation: "validate a ticket で「チケットを有効にする（確認する）」という意味です。" },
        { word: "verify", choices: ["確かめる", "疑う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "verify A で「A（事実など）が正しいことを確かめる、立証する」という意味です。" },
        { word: "withstand", choices: ["耐える", "屈する", "逃げる", "壊す", "忘れる"], correct: 0, explanation: "withstand A で「A（圧力・攻撃など）に耐える、持ちこたえる」という意味です。" },
        { word: "yield", choices: ["生産する", "消費する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "yield は「〜を産出する、（利益などを）生む、屈服する」という意味があります。" },
        { word: "accumulate", choices: ["蓄積する", "散らす", "奪う", "隠す", "忘れる"], correct: 0, explanation: "accumulate wealth で「富を蓄積する」という意味になります。" }
    ],
    '1001-1100': [
        { word: "abbreviate", choices: ["短縮する", "伸ばす", "隠す", "壊す", "忘れる"], correct: 0, explanation: "abbreviate A to B で「AをBに短縮する」という意味になります。" },
        { word: "accelerate", choices: ["加速させる", "減速させる", "止める", "隠す", "忘れる"], correct: 0, explanation: "accelerate growth で「成⻑を加速させる」という意味になります。" },
        { word: "accumulate", choices: ["蓄積する", "散らす", "奪う", "隠す", "忘れる"], correct: 0, explanation: "accumulate wealth で「富を蓄積する」という意味になります。" },
        { word: "adhere", choices: ["固執する", "離れる", "拒む", "隠す", "忘れる"], correct: 0, explanation: "adhere to the rules で「規則を遵守する（固執する）」という意味です。" },
        { word: "advocate", choices: ["提唱する", "反対する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "advocate environmental protection で「環境保護を主張する」のように使われます。" },
        { word: "affiliate", choices: ["提携させる", "分離する", "攻める", "隠す", "忘れる"], correct: 0, explanation: "be affiliated with A で「A（組織など）と提携している」という意味です。" },
        { word: "allocate", choices: ["配分する", "奪う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "allocate resources で「資源を割り当てる」という意味になります。" },
        { word: "anticipate", choices: ["予想する", "忘れる", "疑う", "止める", "去る"], correct: 0, explanation: "anticipate A で「Aを予想する、楽しみに待つ」という意味です。" },
        { word: "articulate", choices: ["はっきり述べる", "濁す", "黙る", "隠す", "忘れる"], correct: 0, explanation: "articulate one's thoughts で「考えを言葉ではっきり表す」という意味です。" },
        { word: "ascertain", choices: ["確かめる", "疑う", "隠す", "忘れる", "壊す"], correct: 0, explanation: "ascertain the facts で「事実を確かめる」という意味です。" },
        { word: "collaborate", choices: ["協力する", "対立する", "無視する", "隠れる", "去る"], correct: 0, explanation: "collaborate with A で「Aと協力して働く、共同研究する」という意味です。" },
        { word: "commemorate", choices: ["記念する", "忘れる", "汚す", "隠す", "壊す"], correct: 0, explanation: "commemorate the event で「出来事を祝う、記念する」という意味です。" },
        { word: "compliment", choices: ["褒める", "貶す", "無視する", "隠す", "忘れる"], correct: 0, explanation: "compliment A on B で「A（人）をB（こと）で褒める」という意味です。" },
        { word: "concur", choices: ["同意する", "反対する", "迷う", "隠れる", "去る"], correct: 0, explanation: "concur with A で「A（意見など）に同意する」という意味の硬い語です。" },
        { word: "consolidate", choices: ["固める", "弱める", "わける", "隠す", "忘れる"], correct: 0, explanation: "consolidate power で「権力を固める、統合する」という意味になります。" },
        { word: "contemplate", choices: ["熟考する", "無視する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "contemplate doing で「〜しようかとじっくり考える」という意味になります。" },
        { word: "corroborate", choices: ["裏付ける", "否定する", "疑う", "隠す", "忘れる"], correct: 0, explanation: "corroborate a story で「話を（証拠などで）裏付ける」という意味です。" },
        { word: "depict", choices: ["描写する", "隠す", "消す", "壊す", "忘れる"], correct: 0, explanation: "depict a scene で「場面を描写する」という意味になります。" },
        { word: "deteriorate", choices: ["悪化する", "改善する", "維持する", "止まる", "飛ぶ"], correct: 0, explanation: "health deteriorates で「健康状態が悪化する」という意味です。" },
        { word: "deviate", choices: ["逸れる", "従う", "止まる", "隠れる", "去る"], correct: 0, explanation: "deviate from the norm で「規範から逸脱する」という意味になります。" },
        { word: "diagnose", choices: ["診断する", "治す", "放置する", "隠す", "忘れる"], correct: 0, explanation: "diagnose a disease で「病気を診断する」という意味になります。" },
        { word: "discriminate", choices: ["差別する", "公平に扱う", "助ける", "隠す", "忘れる"], correct: 0, explanation: "discriminate against A で「Aを不当に差別する（区別する）」という意味です。" },
        { word: "disseminate", choices: ["普及させる", "隠す", "集める", "壊す", "忘れる"], correct: 0, explanation: "disseminate information で「情報を広める、普及させる」という意味です。" },
        { word: "diversify", choices: ["多様化する", "統一する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "diversify A で「Aを多様化する、多角経営する」という意味になります。" },
        { word: "elaborate", choices: ["詳しく述べる", "簡略化する", "黙る", "隠す", "忘れる"], correct: 0, explanation: "elaborate on the plan で「計画について詳細に述べる」という意味になります。" },
        { word: "eliminate", choices: ["排除する", "加える", "隠す", "忘れる", "壊す"], correct: 0, explanation: "eliminate A で「Aを完全に取り除く、死滅させる」という意味です。" },
        { word: "emancipate", choices: ["解放する", "縛る", "攻める", "隠す", "忘れる"], correct: 0, explanation: "emancipate slaves で「奴隷を解放する」という意味になります。" },
        { word: "emphasize", choices: ["強調する", "軽視する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "emphasizing that ... で「〜ということを強調する」という意味になります。" },
        { word: "empower", choices: ["権限を与える", "奪う", "抑える", "隠す", "忘れる"], correct: 0, explanation: "empower employees で「従業員に権限（力）を与える」という意味です。" },
        { word: "emulate", choices: ["見習う", "軽蔑する", "無視する", "隠す", "忘れる"], correct: 0, explanation: "emulate his success で「彼の成功を真似る、見習う」という意味です。" },
        { word: "enhance", choices: ["強化する", "弱める", "隠す", "忘れる", "壊す"], correct: 0, explanation: "enhance the quality で「質を高める、増進させる」という意味です。" },
        { word: "enunciate", choices: ["はっきり発音する", "濁す", "黙る", "隠す", "忘れる"], correct: 0, explanation: "enunciate words で「言葉を（一音一音）はっきり発音する」という意味です。" },
        { word: "evacuate", choices: ["避難する", "留まる", "攻める", "隠れる", "去る"], correct: 0, explanation: "evacuate the building で「建物から避難する、立ち退く」という意味です。" },
        { word: "exacerbate", choices: ["悪化させる", "改善する", "和らげる", "隠す", "忘れる"], correct: 0, explanation: "exacerbate the problem で「問題をさらに悪化させる」という意味です。" },
        { word: "exemplify", choices: ["例となる", "無視する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "exemplify the style で「そのスタイルを例証する、体現する」という意味です。" },
        { word: "expedite", choices: ["捗らせる", "遅らせる", "止める", "隠す", "忘れる"], correct: 0, explanation: "expedite the process で「手続きを迅速に進める」という意味になります。" },
        { word: "fabricate", choices: ["でっち上げる", "正しく話す", "壊す", "隠す", "忘れる"], correct: 0, explanation: "fabricate an excuse で「言い訳を捏造する、組み立てる」という意味です。" },
        { word: "facilitate", choices: ["促進する", "妨げる", "隠す", "忘れる", "壊す"], correct: 0, explanation: "facilitate A で「A（進行・作業など）を容易にする、促進する」という意味です。" },
        { word: "fluctuate", choices: ["変動する", "安定する", "隠れる", "止まる", "飛ぶ"], correct: 0, explanation: "prices fluctuate で「価格が絶えず変動する」という意味になります。" },
        { word: "formulate", choices: ["考案する", "壊す", "隠す", "忘れる", "疑う"], correct: 0, explanation: "formulate a plan で「計画を立てる、策定する」という意味になります。" },
        { word: "generate", choices: ["発生させる", "消費する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "generate power で「電力を発生させる」など、生み出すという意味です。" },
        { word: "highlight", choices: ["強調する", "隠す", "軽視する", "壊す", "忘れる"], correct: 0, explanation: "highlight the importance で「重要性を目立たせる（強調する）」という意味です。" },
        { word: "identify", choices: ["特定する", "見失う", "隠す", "忘れる", "疑う"], correct: 0, explanation: "identify the cause で「原因を特定する」という意味になります。" },
        { word: "illuminate", choices: ["照らす", "暗くする", "隠す", "壊す", "忘れる"], correct: 0, explanation: "illuminate the room で「部屋を照らす（解明する）」という意味になります。" },
        { word: "implement", choices: ["実施する", "計画する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "implement A で「A（計画・政策など）を実行に移す」という意味です。" },
        { word: "inaugurate", choices: ["就任させる", "解任する", "止める", "隠す", "忘れる"], correct: 0, explanation: "inaugurate the president で「大統領を就任させる、開始する」という意味です。" },
        { word: "incorporate", choices: ["組み込む", "外す", "隠す", "忘れる", "壊す"], correct: 0, explanation: "incorporate A into B で「AをBに組み入れる、包含する」という意味です。" },
        { word: "inhibit", choices: ["抑制する", "促す", "褒める", "隠す", "忘れる"], correct: 0, explanation: "inhibit growth で「成⻑を抑制する、妨げる」という意味になります。" },
        { word: "initiate", choices: ["始める", "終える", "隠す", "忘れる", "壊す"], correct: 0, explanation: "initiate A で「Aを新たに始める、創始する」という意味です。" },
        { word: "innovate", choices: ["刷新する", "維持する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "innovate the industry で「業界を革新する」という意味になります。" }
    ],
    '1101-1200': [
        { word: "instigate", choices: ["扇動する", "止める", "隠す", "忘れる", "褒める"], correct: 0, explanation: "instigate a riot で「暴動を扇動する、開始させる」という意味です。" },
        { word: "integrate", choices: ["統合する", "分ける", "壊す", "隠す", "忘れる"], correct: 0, explanation: "integrate AI into business で「AIを業務に統合する」という意味になります。" },
        { word: "intervene", choices: ["介入する", "静観する", "隠れる", "止まる", "去る"], correct: 0, explanation: "intervene in a dispute で「紛争に介入する」という意味になります。" },
        { word: "investigate", choices: ["調査する", "放置する", "隠す", "忘れる", "信じる"], correct: 0, explanation: "investigate the crime で「事件を捜査する、調査する」という意味です。" },
        { word: "justify", choices: ["正当化する", "非難する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "justify doing で「〜することを正当化する」という意味になります。" },
        { word: "liberated", choices: ["解放する", "縛る", "攻める", "隠す", "忘れる"], correct: 0, explanation: "liberate A from B で「BからAを（束縛などから）自由にする」という意味です。" },
        { word: "liquidate", choices: ["清算する", "借りる", "建てる", "隠す", "忘れる"], correct: 0, explanation: "liquidate assets で「資産を売却して（借金を）清算する」という意味になります。" },
        { word: "manifest", choices: ["表す", "隠す", "疑う", "壊す", "忘れる"], correct: 0, explanation: "manifest symptoms で「症状を（目に見える形で）表す、明らかにする」という意味です。" },
        { word: "manipulate", choices: ["操作する", "放置する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "manipulate A で「Aを巧みに操る、改ざんする」という意味があります。" },
        { word: "marginalize", choices: ["疎外する", "大切にする", "褒める", "隠す", "忘れる"], correct: 0, explanation: "marginalize minorities で「少数派を社会的に疎外する（端へ追いやる）」という意味です。" },
        { word: "mediate", choices: ["仲裁する", "争わせる", "隠れる", "止まる", "去る"], correct: 0, explanation: "mediate a dispute で「紛争を仲裁する」という意味になります。" },
        { word: "mitigate", choices: ["和らげる", "強める", "隠す", "忘れる", "壊す"], correct: 0, explanation: "mitigate the risk で「リスクを軽減する、和らげる」という意味です。" },
        { word: "modify", choices: ["修正する", "壊す", "隠す", "忘れる", "維持する"], correct: 0, explanation: "modify は「〜を（改善のために）修正する、緩和する」という意味です。" },
        { word: "monitor", choices: ["監視する", "放置する", "隠す", "忘れる", "壊す"], correct: 0, explanation: "monitor the patient で「患者の状態を（絶えず）チェックする」という意味です。" },
        { word: "motivate", choices: ["動機を与える", "やる気を削ぐ", "隠す", "忘れる", "褒める"], correct: 0, explanation: "motivate students で「学生にやる気を出させる」という意味になります。" },
        { word: "navigate", choices: ["操縦する", "迷う", "隠れる", "止まる", "待つ"], correct: 0, explanation: "navigate A で「A（船や進路）を操縦する、航行する」という意味になります。" },
        { word: "negate", choices: ["否定する", "認める", "隠す", "忘れる", "壊す"], correct: 0, explanation: "negate the effects で「効果を無効にする、打ち消す」という意味になります。" },
        { word: "negotiate", choices: ["交渉する", "喧嘩する", "隠れる", "止まる", "去る"], correct: 0, explanation: "negotiate with A で「Aと交渉する」という意味になります。" },
        { word: "notified", choices: ["通知する", "隠す", "忘れる", "疑う", "壊す"], correct: 0, explanation: "再出。notify ですが、過去形や分詞で使われることが多いです。" },
        { word: "nurture", choices: ["育てる", "殺す", "無視する", "隠す", "忘れる"], correct: 0, explanation: "nurture talent で「（後天的に）才能を育てる、育む」という意味になります。" },
        { word: "obliterate", choices: ["消滅させる", "建てる", "守る", "隠す", "忘れる"], correct: 0, explanation: "obliterate the trace で「跡形もなく消し去る」という意味の強い語です。" },
        { word: "obstruct", choices: ["妨害する", "助ける", "守る", "隠す", "忘れる"], correct: 0, explanation: "obstruct traffic で「交通を妨げる、遮断する」という意味になります。" },
        { word: "optimize", choices: ["最適化する", "悪化させる", "隠す", "忘れる", "壊す"], correct: 0, explanation: "optimize A で「Aを最大限に活用する、最適化する」という意味です。" },
        { word: "orchestrate", choices: ["画策する", "壊す", "隠す", "忘れる", "疑う"], correct: 0, explanation: "orchestrate a plan で「計画を（オーケストラのように）巧みに調整・立案する」という意味です。" },
        { word: "orient", choices: ["適応させる", "迷わせる", "隠す", "忘れる", "壊す"], correct: 0, explanation: "be oriented towards A で「Aに関心がある、A向けである」という形がよく使われます。" },
        { word: "overestimate", choices: ["過大評価する", "過小評価する", "隠す", "忘れる", "認める"], correct: 0, explanation: "overestimate A は「Aを高く見積もりすぎる」という意味。対義語は underestimate。" },
        { word: "perceive", choices: ["知覚する", "誤解する", "隠す", "忘れる", "疑う"], correct: 0, explanation: "perceive A as B で「AをBだと気づく、認識する」という意味になります。" },
        { word: "permeate", choices: ["浸透する", "弾く", "隠れる", "止まる", "去る"], correct: 0, explanation: "gas permeates the room で「ガスが部屋に充満する、浸透する」という意味になります。" },
        { word: "persist", choices: ["固執する", "諦める", "隠れる", "止まる", "去る"], correct: 0, explanation: "persist in A で「Aを頑固に続ける、持続する」という意味になります。" },
        { word: "pioneer", choices: ["開拓する", "真似する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "pioneer a new field で「新しい分野を切り拓く」という意味の名詞・動詞です。" },
        { word: "postpone", choices: ["延期する", "早める", "隠す", "忘れる", "止める"], correct: 0, explanation: "postpone doing で「〜することを延期する」という意味になります。put off と同義。" },
        { word: "preclude", choices: ["排除する", "含める", "隠す", "忘れる", "壊す"], correct: 0, explanation: "preclude the possibility で「可能性を（あらかじめ）排除する、妨げる」という意味です。" },
        { word: "predict", choices: ["予測する", "思い出す", "隠す", "忘れる", "疑う"], correct: 0, explanation: "再出。" },
        { word: "prescribe", choices: ["処方する", "規定する", "隠す", "忘れる", "捨てる"], correct: 0, explanation: "prescribe medicine で「薬を処方する」。また「〜を規定する」という意味もあります。" },
        { word: "preserve", choices: ["保存する", "壊す", "隠す", "忘れる", "汚す"], correct: 0, explanation: "preserve the environment で「環境を保護・維持する」という意味です。" },
        { word: "prevent", choices: ["妨げる", "促す", "隠す", "忘れる", "助ける"], correct: 0, explanation: "再出。" },
        { word: "prioritize", choices: ["優先する", "後回しにする", "隠す", "忘れる", "無視する"], correct: 0, explanation: "prioritize safety で「安全を最優先する」という意味になります。" },
        { word: "procrastinate", choices: ["先延ばしにする", "すぐやる", "隠れる", "止まる", "去る"], correct: 0, explanation: "重要な単語です。「明日やろう」とぐずぐず先延ばしにすることです。" },
        { word: "procure", choices: ["調達する", "捨てる", "壊す", "隠す", "忘れる"], correct: 0, explanation: "procure equipment で「（努力して）設備を調達する、手に入れる」という意味です。" },
        { word: "prohibit", choices: ["禁止する", "許す", "隠す", "忘れる", "守る"], correct: 0, explanation: "prohibit A from doing で「Aが〜するのを禁止する」という語法になります。" },
        { word: "proliferate", choices: ["激増する", "激減する", "止まる", "隠れる", "去る"], correct: 0, explanation: "cells proliferate で「細胞が急激に増殖する」という意味になります。" },
        { word: "promote", choices: ["促進する", "妨げる", "貶す", "隠す", "忘れる"], correct: 0, explanation: "promote a product で「製品を宣伝・販売促進する、昇進させる」という意味です。" },
        { word: "propagate", choices: ["普及させる", "隠す", "絶やす", "壊す", "忘れる"], correct: 0, explanation: "propagate ideas で「考えを広める、（動植物を）繁殖させる」という意味です。" },
        { word: "propose", choices: ["提案する", "拒む", "隠す", "忘れる", "疑う"], correct: 0, explanation: "propose doing や propose that ... で「〜することを提案する、結婚を申し込む」という意味です。" },
        { word: "prosper", choices: ["繁栄する", "衰退する", "止まる", "隠れる", "去る"], correct: 0, explanation: "the country prospers で「国が栄える（経済的に成功する）」という意味です。" },
        { word: "protect", choices: ["保護する", "攻撃する", "壊す", "隠す", "忘れる"], correct: 0, explanation: "再出。" },
        { word: "protest", choices: ["抗議する", "賛同する", "隠れる", "止まる", "去る"], correct: 0, explanation: "protest against the law で「法案に抗議する」という意味になります。" },
        { word: "provoke", choices: ["引き起こす", "鎮める", "隠す", "忘れる", "疑う"], correct: 0, explanation: "provoke a reaction で「（意図的に）反応を引き起こす、怒らせる」という意味です。" },
        { word: "purchase", choices: ["購入する", "売る", "捨てる", "隠す", "忘れる"], correct: 0, explanation: "purchase A で「Aを購入する」という意味です。buyより少し硬い語です。" },
        { word: "pursue", choices: ["追求する", "諦める", "隠す", "忘れる", "止まる"], correct: 0, explanation: "pursue は「〜を追求する、追跡する」という意味です。" }
    ],
};

// State variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
const TOTAL_QUESTIONS = 50;

class VocabQuizApp {
    constructor() {
        this.currentSet = [];
        this.init();
    }

    init() {
        var self = this;
        // Course selection
        const courseBtns = document.querySelectorAll('.course-btn');
        courseBtns.forEach(btn => {
            btn.onclick = function () {
                const range = this.getAttribute('data-range');
                self.startQuiz(range);
            };
        });

        document.getElementById('restart-btn').onclick = function () { self.switchScreen('start-screen'); };
        document.getElementById('next-btn').onclick = function () { self.nextQuestion(); };
        document.getElementById('speak-btn').onclick = function () { self.speakWord(); };
    }

    startQuiz(range) {
        if (!range) {
            this.switchScreen('start-screen');
            return;
        }

        const data = vocabData[range];
        if (!data || data.length === 0) {
            alert("このコースは現在準備中か、データがありません！");
            return;
        }

        // Shuffle and pick 50 (or less if data is smaller)
        const count = Math.min(data.length, TOTAL_QUESTIONS);
        const rawSet = data.slice().sort(function () { return 0.5 - Math.random(); }).slice(0, count);

        // Deep copy and shuffle choices for each question
        this.currentSet = rawSet.map(q => {
            const newChoices = q.choices.slice();
            const correctWord = q.choices[q.correct];

            // Shuffle choices
            for (let i = newChoices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [newChoices[i], newChoices[j]] = [newChoices[j], newChoices[i]];
            }

            // Find new correct index
            const newCorrect = newChoices.indexOf(correctWord);

            return {
                ...q,
                choices: newChoices,
                correct: newCorrect
            };
        });

        currentQuestionIndex = 0;
        score = 0;

        this.switchScreen('quiz-screen');
        this.loadQuestion();
    }

    loadQuestion() {
        currentQuiz = this.currentSet[currentQuestionIndex];

        // UI Update
        document.getElementById('question-text').textContent = currentQuiz.word;
        const total = this.currentSet.length;
        document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}/${total}`;
        document.getElementById('score-display').textContent = `Score: ${score}`;
        document.getElementById('progress-bar').style.width = `${(currentQuestionIndex / total) * 100}%`;

        // Generate Options
        var grid = document.getElementById('options-grid');
        grid.innerHTML = '';
        var self = this;
        currentQuiz.choices.forEach(function (choice, idx) {
            var btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = choice;
            btn.onclick = function () { self.handleAnswer(idx); };
            grid.appendChild(btn);
        });

        document.getElementById('feedback-area').classList.add('hidden');
        this.speakWord();
    }

    speakWord() {
        if (!currentQuiz) return;
        const msg = new SpeechSynthesisUtterance();
        msg.text = currentQuiz.word;
        msg.lang = 'en-US';
        msg.rate = 0.9; // Slightly slower for clarity
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        window.speechSynthesis.speak(msg);
    }

    handleAnswer(idx) {
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);

        const feedbackText = document.getElementById('feedback-text');
        const explanationText = document.getElementById('explanation-text');

        if (idx === currentQuiz.correct) {
            score += 20;
            buttons[idx].classList.add('correct');
            this.playEffect('correct');
            feedbackText.innerHTML = `<span style="color: #4ade80; font-weight: 900; font-size: 1.5rem;">✨ 正解！ ✨</span><br><br><strong>${currentQuiz.word}</strong>: ${currentQuiz.choices[currentQuiz.correct]}`;
        } else {
            buttons[idx].classList.add('wrong');
            buttons[currentQuiz.correct].classList.add('correct');
            this.playEffect('wrong');
            feedbackText.innerHTML = `<span style="color: #f87171; font-weight: 900; font-size: 1.5rem;">⚠️ 残念... ⚠️</span><br><br><strong>${currentQuiz.word}</strong> の正解は <strong>「${currentQuiz.choices[currentQuiz.correct]}」</strong> です。`;
        }

        explanationText.textContent = currentQuiz.explanation;
        document.getElementById('feedback-area').classList.remove('hidden');
    }

    nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < this.currentSet.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.switchScreen('result-screen');
        document.getElementById('final-score').textContent = score;
        const rank = document.getElementById('rank-label');
        const evalMsg = document.getElementById('eval-message');
        const ratio = score / (this.currentSet.length * 20);

        // Previous score management
        const prevScoreKey = 'vocab_quiz_prev_score';
        const prevScoreStr = localStorage.getItem(prevScoreKey);
        let comparisonText = "";

        if (prevScoreStr === null) {
            comparisonText = "初挑戦";
        } else {
            const prevScore = parseInt(prevScoreStr);
            const diff = score - prevScore;
            if (diff > 0) {
                comparisonText = `前回比: <span style="color: #4ade80; font-weight: bold;">+${diff}</span>`;
            } else if (diff < 0) {
                comparisonText = `前回比: <span style="color: #f87171; font-weight: bold;">${diff}</span>`;
            } else {
                comparisonText = "前回と同じスコア";
            }
        }
        evalMsg.innerHTML = comparisonText;
        localStorage.setItem(prevScoreKey, score);

        // Rank Display
        if (ratio >= 1.0) {
            rank.textContent = "🏆 英語の神 (The English Deity)";

        } else if (ratio >= 0.9) {
            rank.textContent = "👑 マスター・リンガリスト";
        } else if (ratio >= 0.8) {
            rank.textContent = "✨ エキスパート・リスナー";
        } else if (ratio >= 0.6) {
            rank.textContent = "🌟 ベテラン・リスナー";
        } else if (ratio >= 0.4) {
            rank.textContent = "🔰 ルーキー・リスナー";
        } else {
            rank.textContent = "🌱 伸びしろ抜群プレイヤー";
        }
    }

    switchScreen(id) {
        var screens = document.querySelectorAll('.screen');
        for (var i = 0; i < screens.length; i++) {
            screens[i].classList.remove('active');
        }
        document.getElementById(id).classList.add('active');
    }

    playEffect(type) {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;

        if (type === 'correct') {
            // "Ping-pong" double chime
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(880, now); // A5
            gain1.gain.setValueAtTime(0, now);
            gain1.gain.linearRampToValueAtTime(0.1, now + 0.05);
            gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.3);

            const osc2 = audioCtx.createOscillator();
            const gain2 = audioCtx.createGain();
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(1174.66, now + 0.15); // D6
            gain2.gain.setValueAtTime(0, now + 0.15);
            gain2.gain.linearRampToValueAtTime(0.1, now + 0.2);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
            osc2.connect(gain2);
            gain2.connect(audioCtx.destination);
            osc2.start(now + 0.15);
            osc2.stop(now + 0.45);
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
