// Vocabulary Data from "Sakura English 305"
const vocabData = [
    { word: "abroad", time: 24, choices: ["海外へ", "国内で", "船上で", "広場へ", "屋内で"], correct: 0, explanation: "abroad: 海外へ、外国で。'Go abroad'で「海外に行く」という意味です。" },
    { word: "afraid", time: 34, choices: ["嬉しい", "驚いた", "恐れて", "怒った", "悲しい"], correct: 2, explanation: "afraid: 恐れて、心配して。'Be afraid of ~'で「〜を恐れる」となります。" },
    { word: "agree", time: 41, choices: ["反対する", "同意する", "議論する", "提案する", "無視する"], correct: 1, explanation: "agree: 同意する、賛成する。'Agree with ~'で「〜に賛成する」です。" },
    { word: "amazing", time: 47, choices: ["普通の", "退屈な", "驚くべき", "不快な", "静かな"], correct: 2, explanation: "amazing: 驚くべき、すばらしい。感動を与えるような驚きを表します。" },
    { word: "ancient", time: 56, choices: ["現代の", "未来の", "古代の", "中世の", "最新の"], correct: 2, explanation: "ancient: 古代の、古くからの。歴史的な古さを指します。" },
    { word: "angry", time: 63, choices: ["空腹な", "喉が渇いた", "怒った", "眠い", "疲れた"], correct: 2, explanation: "angry: 怒った。'Get angry'で「怒る」です。" },
    { word: "apartment", time: 69, choices: ["一戸建て", "アパート", "オフィス", "工場", "図書館"], correct: 1, explanation: "apartment: アパート、マンション。集合住宅を指します。" },
    { word: "arrive", time: 75, choices: ["出発する", "到着する", "離陸する", "戻る", "待つ"], correct: 1, explanation: "arrive: 到着する。'Arrive at/in ~'で場所に使います。" },
    { word: "away", time: 84, choices: ["近くに", "離れて", "一緒に", "すぐに", "後ろに"], correct: 1, explanation: "away: 離れて、あちらへ。'Stay away'で「近づかない」です。" },
    { word: "bank", time: 99, choices: ["学校", "公園", "銀行", "病院", "交番"], correct: 2, explanation: "bank: 銀行。また「堤防・土手」という意味もあります。" },
    { word: "beach", time: 110, choices: ["山頂", "森", "浜辺", "砂漠", "草原"], correct: 2, explanation: "beach: 浜辺、ビーチ。海辺の砂地を指します。" },
    { word: "beautiful", time: 117, choices: ["醜い", "怖い", "美しい", "難しい", "怪しい"], correct: 2, explanation: "beautiful: 美しい。外見だけでなく、景色や心にも使います。" },
    { word: "believe", time: 123, choices: ["疑う", "拒否する", "信じる", "忘れる", "期待する"], correct: 2, explanation: "believe: 信じる。'Believe in ~'で「〜の存在/能力を信じる」です。" },
    { word: "borrow", time: 130, choices: ["貸す", "買う", "借りる", "盗む", "捨てる"], correct: 2, explanation: "borrow: 借りる。返却を前提に無料で借りる場合に使います。" },
    { word: "business", time: 143, choices: ["趣味", "勉強", "仕事", "休暇", "冒険"], correct: 2, explanation: "business: 仕事、ビジネス、商売。" },
    { word: "busy", time: 150, choices: ["暇な", "静かな", "忙しい", "自由な", "早い"], correct: 2, explanation: "busy: 忙しい。'Be busy with ~'で「〜で忙しい」です。" },
    { word: "cafeteria", time: 157, choices: ["教室", "図書館", "食堂", "体育館", "職員室"], correct: 2, explanation: "cafeteria: 食堂、カフェテリア。セルフサービス形式の食堂です。" },
    { word: "calendar", time: 162, choices: ["時計", "手帳", "カレンダー", "辞書", "教科書"], correct: 2, explanation: "calendar: カレンダー、暦。" },
    { word: "careful", time: 174, choices: ["不注意な", "無謀な", "注意深い", "大胆な", "冷酷な"], correct: 2, explanation: "careful: 注意深い、気をつける。'Be careful'で「気をつけて」となります。" },
    { word: "carry", time: 180, choices: ["置く", "投げる", "運ぶ", "壊す", "作る"], correct: 2, explanation: "carry: 運ぶ、持ち歩く。手に持って移動する動作です。" },
    { word: "catch", time: 186, choices: ["投げる", "離す", "捕まえる", "蹴る", "隠す"], correct: 2, explanation: "catch: 捕まえる。また「（風邪などを）ひく」という意味もあります。" },
    { word: "celebrate", time: 192, choices: ["嘆く", "戦う", "祝う", "祈る", "踊る"], correct: 2, explanation: "celebrate: 祝う、（式典を）挙行する。" },
    { word: "certainly", time: 199, choices: ["たぶん", "おそらく", "確かに", "めったに〜ない", "絶対に〜ない"], correct: 2, explanation: "certainly: 確かに、（承諾の返事で）いいですよ。確信を表します。" },
    { word: "change", time: 205, choices: ["変える", "維持する", "壊す", "守る", "作る"], correct: 0, explanation: "change: 変える、変わる。名詞では「お釣り・変化」という意味です。" },
    { word: "cheap", time: 211, choices: ["高い", "重い", "安い", "軽い", "脆い"], correct: 2, explanation: "cheap: 安い、安っぽい。対義語は expensive です。" },
    { word: "clean", time: 224, choices: ["汚れた", "古い", "清潔な", "新しい", "静かな"], correct: 2, explanation: "clean: 清潔な、きれいな。動詞では「掃除する」です。" },
    { word: "clerk", time: 231, choices: ["先生", "医者", "店員", "警察", "弁護士"], correct: 2, explanation: "clerk: 店員、事務員。窓口で働く人を指します。" },
    { word: "comfortable", time: 243, choices: ["厳しい", "不便な", "快適な", "不安な", "退屈な"], correct: 2, explanation: "comfortable: 快適な、心地よい。精神的または肉体的な安らぎです。" },
    { word: "correct", time: 256, choices: ["間違った", "難しい", "正しい", "面白い", "複雑な"], correct: 2, explanation: "correct: 正しい、正確な。動詞では「訂正する」です。" },
    { word: "crowded", time: 282, choices: ["空いている", "静かな", "混雑した", "広い", "狭い"], correct: 2, explanation: "crowded: 混雑した、人混みの。'Be crowded with ~'で使います。" },
    { word: "decide", time: 308, choices: ["迷う", "拒む", "決める", "疑う", "忘れる"], correct: 2, explanation: "decide: 決める、決心する。'Decide to do ~'で「〜することにする」です。" },
    { word: "delicious", time: 320, choices: ["不味い", "熱い", "美味しい", "冷たい", "塩辛い"], correct: 2, explanation: "delicious: 美味しい。非常に味が良いことを表します。" },
    { word: "disappear", time: 346, choices: ["現れる", "留まる", "消える", "増える", "動く"], correct: 2, explanation: "disappear: 消える、見えなくなる。" },
    { word: "during", time: 391, choices: ["〜まで", "〜の後で", "〜の間", "〜の前で", "〜から"], correct: 2, explanation: "during: 〜の間（期間）。ある特定の期間の継続を表します。" },
    { word: "effort", time: 411, choices: ["結果", "才能", "努力", "運", "失敗"], correct: 2, explanation: "effort: 努力。'Make an effort'で「努力する」です。" },
    { word: "enough", time: 424, choices: ["少ない", "多すぎる", "十分な", "足りない", "少しの"], correct: 2, explanation: "enough: 十分な、十分に。形・副どちらでも使えます。" },
    { word: "excellent", time: 458, choices: ["普通の", "まずまずの", "優秀な", "下手な", "最悪の"], correct: 2, explanation: "excellent: 優秀な、すばらしい。極めて質が高いことを表します。" },
    { word: "expensive", time: 471, choices: ["重い", "大きい", "高価な", "派手な", "珍しい"], correct: 2, explanation: "expensive: 高価な、値段が高い。" },
    { word: "explain", time: 478, choices: ["質問する", "理解する", "説明する", "批判する", "同意する"], correct: 2, explanation: "explain: 説明する。'Explain ~ to someone'の形で使います。" },
    { word: "famous", time: 503, choices: ["無名の", "平凡な", "有名な", "怪しい", "危険な"], correct: 2, explanation: "famous: 有名な。'Be famous for ~'で「〜で有名だ」です。" },
    { word: "favorite", time: 523, choices: ["嫌いな", "興味のない", "お気に入りの", "有名な", "珍しい"], correct: 2, explanation: "favorite: お気に入りの、最も好きな。" },
    { word: "forget", time: 569, choices: ["覚えている", "思い出す", "忘れる", "学ぶ", "教える"], correct: 2, explanation: "forget: 忘れる。'Forget to do'（忘れ）と 'Forget doing'（したことを忘れ）に注意。" },
    { word: "friendly", time: 588, choices: ["厳しい", "冷淡な", "友好的な", "攻撃的な", "臆病な"], correct: 2, explanation: "friendly: 友好的な、親しみやすい。" },
    { word: "future", time: 601, choices: ["過去", "現在", "未来", "幻想", "現実"], correct: 2, explanation: "future: 未来、将来。'In the future'で「将来は」です。" },
    { word: "history", time: 705, choices: ["地理", "歴史", "科学", "数学", "文学"], correct: 1, explanation: "history: 歴史。" },
    { word: "important", time: 757, choices: ["些細な", "無価値な", "重要な", "便利な", "複雑な"], correct: 2, explanation: "important: 重要な、大切だ。'It is important to ~'でよく使われます。" },
    { word: "impossible", time: 764, choices: ["可能な", "確実な", "不可能な", "簡単な", "ありそうな"], correct: 2, explanation: "impossible: 不可能な。対義語は possible です。" },
    { word: "introduce", time: 777, choices: ["招待する", "紹介する", "案内する", "訪問する", "連絡する"], correct: 1, explanation: "introduce: 紹介する、導入する。'Introduce myself'で「自己紹介する」です。" },
    { word: "invite", time: 790, choices: ["断る", "訪問する", "招待する", "見送る", "待つ"], correct: 2, explanation: "invite: 招待する。'Invite someone to dinner'のように使います。" },
    { word: "journey", time: 810, choices: ["散歩", "通勤", "旅", "出張", "脱出"], correct: 2, explanation: "journey: 長い旅。長い期間や距離を伴う旅を指します。" },
    { word: "language", time: 862, choices: ["文字", "数字", "言語", "図形", "音声"], correct: 2, explanation: "language: 言語、言葉。" },
    { word: "lucky", time: 1011, choices: ["不幸な", "悲しい", "幸運な", "普通の", "珍しい"], correct: 2, explanation: "lucky: 幸運な、ついている。" },
    { word: "mistake", time: 1115, choices: ["成功", "正解", "間違い", "秘密", "方法"], correct: 2, explanation: "mistake: 間違い、ミス。'Make a mistake'で「間違える」です。" },
    { word: "necessary", time: 1213, choices: ["不必要な", "余分な", "必要な", "簡単な", "複雑な"], correct: 2, explanation: "necessary: 必要な。'It is necessary for someone to ~'の形で使われます。" },
    { word: "nervous", time: 1226, choices: ["リラックスした", "眠い", "緊張して", "怒った", "楽しい"], correct: 2, explanation: "nervous: 緊張して、不安で、神経質な。" },
    { word: "offer", time: 1323, choices: ["受け取る", "断る", "提供する", "壊す", "隠す"], correct: 2, explanation: "offer: 提供する、申し出る。'Offer a job'などで使われます。" },
    { word: "patient", time: 1440, choices: ["短気な", "若々しい", "忍耐強い", "元気な", "裕福な"], correct: 2, explanation: "patient: 忍耐強い。名詞では「患者」という意味になります。" },
    { word: "polite", time: 1557, choices: ["失礼な", "粗末な", "丁寧な", "厳しい", "真面目な"], correct: 2, explanation: "polite: 丁寧な、礼儀正しい。" },
    { word: "proud", time: 1629, choices: ["恥ずかしい", "誇りに思う", "悲しい", "謙虚な", "嫉妬する"], correct: 1, explanation: "proud: 誇りに思う。'Be proud of ~'で「〜を誇りに思う」です。" },
    { word: "reason", time: 1889, choices: ["結果", "原因", "理由", "方法", "目標"], correct: 2, explanation: "reason: 理由。'For some reason'で「どういうわけか」という意味です。" },
    { word: "serious", time: 1934, choices: ["冗談の", "真面目な", "面白い", "奇妙な", "危険な"], correct: 1, explanation: "serious: 真面目な、深刻な。" },
    { word: "success", time: 2272, choices: ["失敗", "努力", "成功", "挑戦", "勝利"], correct: 2, explanation: "success: 成功。動詞形は succeed です。" },
    { word: "suggest", time: 2292, choices: ["命令する", "提案する", "否定する", "理解する", "説明する"], correct: 1, explanation: "suggest: 提案する、示唆する。" },
    { word: "terrible", time: 2389, choices: ["すばらしい", "普通の", "ひどい", "珍しい", "静かな"], correct: 2, explanation: "terrible: ひどい、恐ろしい。質が非常に悪いことを指します。" },
    { word: "useful", time: 2636, choices: ["無駄な", "不便な", "役に立つ", "難しい", "壊れた"], correct: 2, explanation: "useful: 役に立つ、便利な。" },
    { word: "various", time: 2656, choices: ["同じ", "特定の", "様々な", "少数の", "巨大な"], correct: 2, explanation: "various: 様々な、多様な。'Various kinds of ~'で「様々な種類の〜」です。" },
    { word: "factory", time: 491, choices: ["学校", "市場", "工場", "農場", "警察署"], correct: 2, explanation: "factory: 工場。" },
    { word: "famous", time: 503, choices: ["無名の", "有名な", "奇妙な", "危険な", "退屈な"], correct: 1, explanation: "famous: 有名な。'Be famous for'で「〜で有名だ」となります。" },
    { word: "finally", time: 530, choices: ["最初は", "ついに", "めったに", "おそらく", "時々"], correct: 1, explanation: "finally: ついに、ようやく。長い時間のあとの結末を表します。" },
    { word: "floor", time: 556, choices: ["天井", "壁", "床", "窓", "階段"], correct: 2, explanation: "floor: 床、階。" },
    { word: "free", time: 575, choices: ["忙しい", "自由な/無料の", "高価な", "不便な", "厳しい"], correct: 1, explanation: "free: 自由な、無料の。'Free of charge'で「無料」という意味です。" },
    { word: "fresh", time: 582, choices: ["古い", "腐った", "新鮮な", "熱い", "冷たい"], correct: 2, explanation: "fresh: 新鮮な、新しい、採れたての。" },
    { word: "garden", time: 614, choices: ["公園", "庭", "山", "海", "空"], correct: 1, explanation: "garden: 庭、庭園。" },
    { word: "grow", time: 646, choices: ["減る", "止まる", "育つ/育てる", "動く", "死ぬ"], correct: 2, explanation: "grow: 育つ、成長する、〜になる。" },
    { word: "half", time: 659, choices: ["全部", "一部", "半分", "倍", "少し"], correct: 2, explanation: "half: 半分、半分の。" },
    { word: "heavy", time: 685, choices: ["軽い", "薄い", "重い", "高い", "低い"], correct: 2, explanation: "heavy: 重い。'Heavy rain'などで「激しい」という意味でも使われます。" },
    { word: "hope", time: 718, choices: ["恐れる", "疑う", "望む", "忘れる", "無視する"], correct: 2, explanation: "hope: 望む、希望する。'I hope that ~'でよく使われます。" },
    { word: "hungry", time: 737, choices: ["喉が渇いた", "眠い", "空腹な", "怒った", "疲れた"], correct: 2, explanation: "hungry: お腹が空いた。対義語は full（お腹いっぱい）です。" },
    { word: "important", time: 757, choices: ["些細な", "無価値な", "重要な", "便利な", "複雑な"], correct: 2, explanation: "important: 重要な、大切だ。'It is important to ~'でよく使われます。" },
    { word: "invite", time: 790, choices: ["断る", "訪問する", "招待する", "見送る", "待つ"], correct: 2, explanation: "invite: 招待する。'Invite someone to dinner'のように使います。" },
    { word: "just", time: 822, choices: ["たぶん", "絶対に", "ちょうど", "しばらく", "いつも"], correct: 2, explanation: "just: ちょうど、たった今。また「公正な」という意味もあります。" },
    { word: "kind", time: 842, choices: ["厳しい", "残酷な", "親切な", "賢い", "臆病な"], correct: 2, explanation: "kind: 親切な。名詞では「種類」という意味になります。" },
    { word: "large", time: 868, choices: ["小さい", "狭い", "大きい", "長い", "短い"], correct: 2, explanation: "large: 大きい、広い（面積や規模が広い様子）。" },
    { word: "learn", time: 901, choices: ["教える", "学ぶ", "手伝う", "壊す", "作る"], correct: 1, explanation: "learn: 学ぶ、身につける。努力して習得することを指します。" },
    { word: "leave", time: 907, choices: ["到着する", "留まる", "去る/離れる", "戻る", "入る"], correct: 2, explanation: "leave: 去る、離れる、出発する、〜を置き忘れる。" },
    { word: "lucky", time: 1011, choices: ["不幸な", "悲しい", "幸運な", "普通の", "珍しい"], correct: 2, explanation: "lucky: 幸運な、ついている。" },
    { word: "magazine", time: 1024, choices: ["新聞", "辞書", "雑誌", "教科書", "小説"], correct: 2, explanation: "magazine: 雑誌。" },
    { word: "maybe", time: 1070, choices: ["絶対に", "おそらく", "めったに", "ついに", "いつも"], correct: 1, explanation: "maybe: おそらく、たぶん。確信度が半分程度の場合に使います。" },
    { word: "message", time: 1096, choices: ["手紙", "伝言", "秘密", "方法", "目標"], correct: 1, explanation: "message: 伝言、メッセージ。" },
    { word: "mistake", time: 1115, choices: ["成功", "正解", "間違い", "秘密", "方法"], correct: 2, explanation: "mistake: 間違い、ミス。'Make a mistake'で「間違える」です。" },
    { word: "money", time: 1128, choices: ["時間", "場所", "お金", "名前", "仕事"], correct: 2, explanation: "money: お金。'Make money'で「お金を稼ぐ」です。" },
    { word: "mountain", time: 1154, choices: ["川", "海", "山", "森", "空"], correct: 2, explanation: "mountain: 山。" },
    { word: "museum", time: 1180, choices: ["学校", "図書館", "博物館/美術館", "公園", "病院"], correct: 2, explanation: "museum: 博物館、美術館。" },
    { word: "natural", time: 1200, choices: ["人工的な", "不思議な", "自然の", "危険な", "便利な"], correct: 2, explanation: "natural: 自然の、当然の。" },
    { word: "necessary", time: 1213, choices: ["不必要な", "余分な", "必要な", "簡単な", "複雑な"], correct: 2, explanation: "necessary: 必要な。'It is necessary for someone to ~'の形で使われます。" },
    { word: "nervous", time: 1226, choices: ["リラックスした", "眠い", "緊張して", "怒った", "楽しい"], correct: 2, explanation: "nervous: 緊張して、不安で、神経質な。" },
    { word: "nothing", time: 1291, choices: ["すべて", "何か", "何も〜ない", "少しの", "多くの"], correct: 2, explanation: "nothing: 何も〜ない。'Nothing is impossible'（不可能はない）。" },
    { word: "ocean", time: 1317, choices: ["湖", "川", "大洋/海", "砂漠", "草原"], correct: 2, explanation: "ocean: 大洋、海。" },
    { word: "offer", time: 1323, choices: ["受け取る", "断る", "提供する", "壊す", "隠す"], correct: 2, explanation: "offer: 提供する、申し出る。'Offer a job'などで使われます。" },
    { word: "patient", time: 1440, choices: ["短気な", "若々しい", "忍耐強い", "元気な", "裕福な"], correct: 2, explanation: "patient: 忍耐強い。名詞では「患者」という意味になります。" },
    { word: "peace", time: 1453, choices: ["戦争", "混乱", "平和", "自由", "権利"], correct: 2, explanation: "peace: 平和、安らぎ。" },
    { word: "polite", time: 1557, choices: ["失礼な", "粗末な", "丁寧な", "厳しい", "真面目な"], correct: 2, explanation: "polite: 丁寧な、礼儀正しい。" },
    { word: "proud", time: 1629, choices: ["恥ずかしい", "誇りに思う", "悲しい", "謙虚な", "嫉妬する"], correct: 1, explanation: "proud: 誇りに思う。'Be proud of ~'で「〜を誇りに思う」です。" },
    { word: "public", time: 1635, choices: ["私立の", "秘密の", "公衆の/公立の", "特別な", "一般的な"], correct: 2, explanation: "public: 公衆の、公共の、公立の。'In public'で「人前で」です。" },
    { word: "reason", time: 1889, choices: ["結果", "原因", "理由", "方法", "目標"], correct: 2, explanation: "reason: 理由。'For some reason'で「どういうわけか」という意味です。" },
    { word: "serious", time: 1934, choices: ["冗談の", "真面目な", "面白い", "奇妙な", "危険な"], correct: 1, explanation: "serious: 真面目な、深刻な。" },
    { word: "simple", time: 2019, choices: ["複雑な", "派手な", "単純な/簡単な", "古い", "新しい"], correct: 2, explanation: "simple: 単純な、簡単な、簡素な。" },
    { word: "standard", time: 2032, choices: ["特殊な", "一時の", "標準の", "極端な", "無価値な"], correct: 2, explanation: "standard: 標準の、普通の、基準の。" },
    { word: "success", time: 2272, choices: ["失敗", "努力", "成功", "挑戦", "勝利"], correct: 2, explanation: "success: 成功。動詞形は succeed です。" },
    { word: "suggest", time: 2292, choices: ["命令する", "提案する", "否定する", "理解する", "説明する"], correct: 1, explanation: "suggest: 提案する、示唆する。" },
    { word: "terrible", time: 2389, choices: ["すばらしい", "普通の", "ひどい", "珍しい", "静かな"], correct: 2, explanation: "terrible: ひどい、恐ろしい。質が非常に悪いことを指します。" },
    { word: "useful", time: 2636, choices: ["無駄な", "不便な", "役に立つ", "難しい", "壊れた"], correct: 2, explanation: "useful: 役に立つ、便利な。" },
    { word: "various", time: 2656, choices: ["同じ", "特定の", "様々な", "少数の", "巨大な"], correct: 2, explanation: "various: 様々な、多様な。" },
    { word: "weather", time: 2773, choices: ["季節", "気候", "天気", "風", "雲"], correct: 2, explanation: "weather: 天気。短期的な気象状態を指します。" },
    { word: "wonderful", time: 2948, choices: ["普通の", "ひどい", "すばらしい", "奇妙な", "退屈な"], correct: 2, explanation: "wonderful: すばらしい。驚きや感動を伴う良さを表します。" },
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
        videoId: 'v22ygH1j0rw', // Sakura English 305
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
