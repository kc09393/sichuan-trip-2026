const itineraries = [
  { date:"9/4", weekday:"五", title:"抵達成都", city:"成都", lodging:"成都", tone:"arrival", note:"14:40 抵達 CTU。第一天只熟悉飯店周邊，晚餐與逛街依當天體力彈性取捨。", items:[
    ["14:40","抵達成都雙流機場 CTU","領行李後前往飯店；先休息、補水，不急著開始跑景點。","成都雙流機場"],
    ["17:30","飯店 Check-in","建議住春熙路北側／市二醫院地鐵站一帶；9/5 清晨直接叫車去成都東站。","成都住宿區"],
    ["19:00","春熙路・太古里・IFS","三處相鄰，依體力慢慢走；累了就在附近吃飯回飯店。","成都IFS"]
  ]},
  { date:"9/5", weekday:"六", title:"成都 → 黃龍 → 九寨溝", city:"黃龍", lodging:"九寨溝", tone:"hard", note:"先遊黃龍再入住九寨溝，第三天就不用趕景區。C6362 與 11:40 小車拼車均已確認；約 20:45 抵達九寨溝。", items:[
    ["06:30","飯店出發前往成都東站","搭 08:12 的 C6362；07:10 前抵達車站，證件與訂單放在手機容易找到的位置。","成都東站"],
    ["08:12–10:01","C6362 成都東 → 黃龍九寨","班次已於 8/29 再次核對；以 12306 最終訂單為準。抵達後先吃東西、上洗手間並到集合點等車。","黃龍九寨站"],
    ["11:40","已確認：車站 → 黃龍 → 九寨溝","三人小車拼車已預訂，包含黃龍門票與上行索道；商品預計 20:45 結束。","黃龍九寨站"],
    ["約 12:30–17:00","黃龍風景區","使用上行索道省力，重點看五彩池；高海拔慢走，任何人不舒服就縮短行程。自備午餐、飲水與保暖衣物。","黃龍風景區"],
    ["約 20:45","抵達九寨溝・入住","住溝口彭豐村／天堂口。晚餐以簡單、快速為主，入住後直接休息，準備隔天完整遊園。","九寨溝住宿區"]
  ]},
  { date:"9/6", weekday:"日", title:"九寨溝完整一天", city:"九寨溝", lodging:"九寨溝", tone:"star", note:"本次旅行第一個重點日。成人選 08:00–10:00 的非中國大陸遊客票；一位 60 歲以上長者改訂官方優惠票，一整天只給九寨溝。", items:[
    ["07:45","抵達九寨溝遊客中心","帶各自購票使用的有效證件原件、早餐吃飽、穿分層衣物；準備 08:00 入園。","九寨溝景區入口"],
    ["08:00","全天遊覽九寨溝","搭觀光車分段遊覽日則溝、則查洼溝與樹正溝；不追求每個點都走到。","五花海"],
    ["18:00 前","離開景區回飯店","景區 18:00 閉園。晚餐後整理行李，隔天不用再跑景點，可以睡飽再退房。","九寨溝景區入口"]
  ]},
  { date:"9/7", weekday:"一", title:"九寨溝 → 成都", city:"提早回程", lodging:"成都", tone:"move", note:"今天不排景點。送站拼車已選 13:08 的 C5794，實際飯店接人時間以師傅通知為準，15:14 抵達成都東。", items:[
    ["06:30 前","起床、早餐、退房","確認證件、動車票與接駁憑證；前一晚查看訊息，準備依師傅通知時間在飯店等車。","九寨溝住宿區"],
    ["以通知為準","已確認拼車：九寨溝 → 黃龍九寨站","訂單為三人、7–9 座商務拼車，已指定送 13:08 高鐵；飯店免費接人，車程約 2–3 小時。","黃龍九寨站"],
    ["建議 11:30 前","抵達黃龍九寨站・吃東西","抵站後先清點行李、吃東西和上洗手間；12:35 前完成安檢。若司機預估晚於 11:30 抵站，立即聯絡供應商。","黃龍九寨站"],
    ["13:08–15:14","C5794 黃龍九寨 → 成都東","三人二等座車票已購買；帶購票時使用的台胞證原件，抵達後直接叫車回飯店。","成都東站"],
    ["16:00 後","成都飯店・附近晚餐","提早回到成都，辦入住後休息與吃晚餐；今晚不預約固定時間活動。","成都住宿區"]
  ]},
  { date:"9/8", weekday:"二", title:"都江堰・住一晚", city:"都江堰", lodging:"都江堰", tone:"flex", note:"早上搭 S5105 直達離堆公園，整天給都江堰水利景區與古城；今晚住都江堰，不趕回成都。", items:[
    ["06:50","成都飯店出發","帶一晚小行李，優先叫車直達犀浦站；若搭地鐵，市二醫院站搭 4 號線到中醫大省醫院站，再轉 2 號線到犀浦。","成都住宿區"],
    ["07:35 前","抵達犀浦站","預留找入口與驗證件時間；地鐵轉城際列車可同站換乘。","犀浦站"],
    ["08:11–08:39","S5105 犀浦 → 離堆公園","建議先在 12306 購票；抵達後先到住宿寄放小行李。","離堆公園站"],
    ["09:30–15:30","都江堰水利景區","掌握魚嘴、飛沙堰與寶瓶口三個核心；需要就搭觀光車。","都江堰景區"],
    ["16:30","都江堰住宿 Check-in","先放行李、休息，再決定晚上走多少。","都江堰住宿區"],
    ["18:00 後","灌縣古城・南橋","步行吃晚餐，南橋傍晚或入夜再去；累了就直接回住宿。","南橋"]
  ]},
  { date:"9/9", weekday:"三", title:"青城山前山・回成都", city:"青城山", lodging:"成都", tone:"star", note:"只走前山主線，行李寄放遊客中心，傍晚搭 S5054 回犀浦；回成都後只辦入住與吃晚餐。", items:[
    ["07:30","都江堰退房・前往青城山","搭計程車前往青城山遊客中心，抵達後先寄放行李。","都江堰住宿區"],
    ["08:30–16:30","青城山前山","走建福宮、月城湖與上清宮主線；使用觀光車、渡船與索道省力，不走後山。","青城山前山"],
    ["17:25 前","取行李・抵達青城山站","預留接駁、取行李與進站時間；不要拖到最後才下山。","青城山站"],
    ["18:06–18:36","S5054 青城山 → 犀浦","回程可當天中午再買；備選 S5052 17:37 或 S5056 18:39。","犀浦站"],
    ["18:40 後","轉地鐵回成都飯店","犀浦搭 2 號線進城；先入住，再在飯店附近吃晚餐，不帶行李跑餐廳。","成都住宿區"]
  ]},
  { date:"9/10", weekday:"四", title:"成都經典一日・川劇變臉", city:"成都", lodging:"成都", tone:"city", note:"高密度市區日。白天走成都代表景點，晚上到正規劇場看川劇變臉；已取消九眼橋，不另外增加夜遊。", items:[
    ["08:30","文殊院","先看川西佛寺與傳統街區；早上人較少，停留約 1 小時後直接前往人民公園。","文殊院"],
    ["10:30","人民公園・寬窄巷子","先喝茶，再前往相鄰的寬窄巷子散步與吃午餐；最晚 14:00 離開。","人民公園・寬窄巷子"],
    ["15:30","武侯祠・錦里","先看蜀漢歷史，再步行到隔壁錦里；18:30 前吃完晚餐，準時叫車離開。","武侯祠・錦里"],
    ["19:20","錦江劇場《川劇秀・傳奇變臉》","提前約 40 分鐘抵達取票入場；預計 20:00–21:10 演出，變臉、吐火、木偶與川劇身段一次看。場次以票面通知為準。","錦江劇場"]
  ]},
  { date:"9/11", weekday:"五", title:"返程・分開", city:"成都", lodging:"—", tone:"flight", note:"搭機者 15:50 CTU → 澳門 → 高雄。上午不排遠程景點，12:00 從飯店出發，預留跨境航班報到時間。", items:[
    ["上午","早餐與整理行李","只在飯店周邊活動，確認護照、轉機文件、行李與登機資訊。","成都住宿區"],
    ["12:00","前往成都雙流機場","目標 12:50 前抵達，保留至少 3 小時辦理跨境航班報到；前一晚再確認航廈與交通。","成都雙流機場"],
    ["15:50","搭機者：CTU → 澳門 → 高雄","轉機過程留意登機門、行李是否直掛與下一段航班狀態。","成都雙流機場"]
  ]}
];

const dayGuides = [
  {effort:"輕鬆",summary:"機場 → 飯店 → 春熙路商圈。抵達日的原則是先安頓，再決定要逛多少。",facts:[
    ["car-taxi-front","交通方式","CTU 到市區帶行李時優先叫車；車程會受晚高峰影響，第一晚不要預約有固定入場時間的活動。"],
    ["utensils","吃飯安排","飯店放好行李後再吃。春熙路、太古里、IFS 餐廳密集，不必為名店排長隊。"],
    ["armchair","休息地點","太古里與 IFS 內都有室內座位、洗手間與冷氣；累了就直接回飯店。"],
    ["backpack","今天要帶","護照／台胞證、手機、行李牌；下車前一起清點件數。"]
  ],spot:["春熙路・太古里・IFS","這是成都最集中的現代商圈。春熙路適合逛街、太古里是開放式街區、IFS 最醒目的是屋頂熊貓；三處相連，不需要分別叫車。"]},
  {effort:"高強度・已留緩衝",summary:"飯店 → C6362 → 11:40 共乘車 → 黃龍 → 九寨溝飯店。先完成黃龍，9/7 就能輕鬆回成都。",facts:[
    ["train-front","已確認班次","9/5 首選 C6362：成都東 08:12 出發、黃龍九寨 10:01 抵達；07:10 前到站。"],
    ["bus-front","固定接駁","選 9/5、黃龍九寨站出發、11:40 的「車站 → 黃龍 → 九寨溝」方案；預計 20:45 抵達九寨溝。"],
    ["tram-front","黃龍省力走法","優先購買門票＋上行索道方案，重點看五彩池；高原慢走，不舒服就縮短。"],
    ["sandwich","吃飯安排","早餐吃飽並自備午餐、飲水與零食。20:45 左右才到九寨溝，不能等到沿途再找正餐。"],
    ["badge-alert","核對方向","下單日期必須是 9/5，方向必須是黃龍九寨站 → 黃龍 → 九寨溝；不要沿用先前 9/7 的畫面。"]
  ],spot:["黃龍看什麼","黃龍以鈣華彩池、雪山、峽谷與森林聞名，五彩池最具代表性。使用上行索道減少爬升；舒服完成比走完整圈更重要。"]},
  {effort:"中高",summary:"07:00 到遊客中心 → 07:30 入園 → 分區遊覽 → 18:00 前出園。不要自行規劃死板順序。",facts:[
    ["ticket-check","票券與入園","兩位 19–59 歲成人買非中國大陸遊客票；一位 60 歲以上長者在官方平台預約免門票＋¥90 觀光車，最終以有效證件資格驗證為準。"],
    ["bus-front","怎麼遊覽","進園後先搭觀光車，當天由景區依人流調度去左線或右線；下車後再沿棧道看景。"],
    ["footprints","少走一點的方法","每一區挑代表景點，不必站站下車。疲累時多搭一站觀光車、少走棧道。"],
    ["utensils","午餐與補給","園內用餐選擇有限，帶水、巧克力或餅乾；午餐避開最尖峰時間。"],
    ["cloud-rain","衣物與安全","早晚涼、日照強，採洋蔥式穿法。雨具、防曬都帶；全程不離開棧道。"]
  ],spot:["九寨溝看什麼","重點不是跑完所有海子，而是看翠海、瀑布與森林層次。五花海色彩最豐富，諾日朗瀑布氣勢大，樹正群海適合從觀光車與棧道交替欣賞。"]},
  {effort:"早起・輕鬆移動",summary:"依師傅通知時間從飯店上車 → 黃龍九寨站 → C5794 → 成都飯店。今天沒有景點，15:14 就回到成都東。",facts:[
    ["bus-front","接駁已確認","9/7 三人 7–9 座商務拼車已確認，訂單已指定送 13:08 的黃龍九寨高鐵。"],
    ["clock-3","接人時間","訂單沒有承諾固定 07:20；車程約 2–3 小時，實際飯店接人時間以師傅通知為準。"],
    ["train-front","已購回程","C5794：黃龍九寨 13:08 出發、成都東 15:14 抵達；三人皆為二等座。"],
    ["luggage","行李安排","行李隨共乘車；下車先清點證件與件數，再進站。"],
    ["utensils","下午安排","約 16:00 回飯店，先休息再吃晚餐；不另外硬塞景點。"]
  ],spot:["今天為什麼留白","黃龍已在 9/5 完成，九寨溝也在 9/6 玩完整天。9/7 提早回成都，同時把公路延誤緩衝留足。"]},
  {effort:"中等可縮短",summary:"成都飯店 → 犀浦 → S5105 → 離堆公園 → 都江堰水利景區 → 古城／南橋 → 住都江堰。",facts:[
    ["train-front","固定班次","S5105：犀浦 08:11 出發、離堆公園 08:39 抵達。建議先買，07:35 前到犀浦站。"],
    ["route","怎麼到犀浦","帶行李優先叫車；搭地鐵則由市二醫院站搭 4 號線，在中醫大省醫院站轉 2 號線到犀浦。"],
    ["route","水利工程順序","官方建議遊覽約 3 小時。掌握魚嘴、飛沙堰、寶瓶口三個核心即可；港澳台旅客使用有效通行證購票，走人工通道入園。"],
    ["footprints","體力管理","景區橋樑與步道較多，不走安瀾索橋也不影響理解水利工程；多用觀光車並隨時坐下休息。"],
    ["moon-star","晚上安排","先入住再逛灌縣古城與南橋。夜景區不必久站，累了就回住宿休息。"]
  ],spot:["都江堰看什麼","兩千多年前建成、至今仍在運作的水利工程。魚嘴負責分水、飛沙堰協助排沙洩洪、寶瓶口控制進水；理解這三處，就看懂都江堰。"]},
  {effort:"中高・可省力",summary:"都江堰 → 青城山前山 → S5054 → 犀浦 → 成都飯店。只走前山，能省力就省力。",facts:[
    ["trees","前山不是後山","前山以道教宮觀與文化景觀為主，這次不排後山。9 月官網目前標示 08:00–17:30 開放，仍以出發前公告為準。"],
    ["tram-front","省力走法","觀光車、月城湖渡船與索道皆另計費；能用就用，不追求登頂。"],
    ["footprints","體力底線","仍有階梯與坡道。膝蓋不舒服就折返，不需要走完整條路線。"],
    ["luggage","行李寄放","青城山遊客中心設有寄存點；退房後直接帶行李前往，取回行李再去青城山站。"],
    ["train-front","回程班次","首選 S5054：18:06 青城山出發、18:36 抵達犀浦。可當天中午買；備選 S5052／S5056。"]
  ],spot:["青城山前山看什麼","青城山以幽深山林與道教宮觀聞名。建福宮、月城湖、上清宮是主線重點；老君閣位置最高，但不必把登頂當作唯一目標。"]},
  {effort:"中高・高密度",summary:"文殊院 → 人民公園／寬窄巷子 → 武侯祠／錦里 → 錦江劇場川劇變臉。晚上以坐著看戲收尾。",facts:[
    ["route","四段一路走","文殊院先逛；人民公園和寬窄巷子排一段，武侯祠和錦里排一段，最後叫車到錦江劇場。"],
    ["clock-3","演出不能遲到","18:30 前在錦里吃完晚餐，19:20 抵達劇場取票；一般 20:00 開演、約 21:10 結束，仍以票面通知為準。"],
    ["utensils","吃飯安排","午餐放在寬窄巷子附近，晚餐提早在錦里解決；不要排需要久候的餐廳。"],
    ["luggage","看完直接回飯店","演出結束後直接叫車回飯店，完成行李、航廈與轉機文件確認。"]
  ],spot:["錦江劇場川劇變臉","錦江劇場是成都市中心的專業劇場。《川劇秀・傳奇變臉》把川劇唱做、變臉、吐火、滾燈、木偶與舞台效果整合成約 70 分鐘演出，坐著看也適合全家。"]},
  {effort:"輕鬆但時間重要",summary:"飯店附近 → 退房 → 12:00 前往 CTU → 15:50 飛澳門轉高雄。",facts:[
    ["badge-check","文件放同一包","護照／台胞證、登機資料與澳門轉機文件放在隨身包，不要托運。"],
    ["plane","機場時間","跨境航班建議至少提前 3 小時抵達；前一晚確認 CTU 航廈與即時交通。"],
    ["luggage","行李確認","確認是否直掛高雄、每段托運限額與行動電源規則；掛行李後拍行李條。"],
    ["route","轉機節點","到 CTU 後先確認行李是否直掛高雄；抵達澳門再查看下一段登機門與時間。"]
  ],spot:["澳門轉機","下機後跟著 Transfer／轉機標示走，不要直接前往入境。先看下一段登機門與時間；若行李不是直掛，依航空公司指示提領並重新辦理。"]}
];

const dayVisuals = [
  {
    src:"assets/attractions/ifs.jpg",
    alt:"成都 IFS 屋頂的大熊貓裝置藝術",
    caption:"IFS 屋頂熊貓",
    highlights:["春熙路","太古里","IFS 熊貓"],
    credit:"David Xuang／Wikimedia Commons · CC BY-SA 4.0",
    source:"https://commons.wikimedia.org/wiki/File:The_panda_at_IFS_Chengdu.jpg"
  },
  {
    src:"assets/attractions/huanglong.jpg",
    alt:"黃龍景區的鈣華彩池、森林與古寺",
    caption:"黃龍鈣華彩池",
    highlights:["五彩池","鈣華彩池","雪山森林"],
    credit:"Wikimedia Commons · CC BY-SA 3.0",
    source:"https://commons.wikimedia.org/wiki/File:Huanglonggou_Pools.jpg"
  },
  {
    src:"assets/attractions/jiuzhai.jpg",
    alt:"九寨溝五花海的藍綠湖水與森林棧道",
    caption:"五花海",
    highlights:["五花海","諾日朗瀑布","樹正群海"],
    credit:"Shahar Wider／Wikimedia Commons · CC BY 3.0",
    source:"https://commons.wikimedia.org/wiki/File:5_Flowers_Lake_(127556467).jpeg"
  },
  null,
  {
    src:"assets/attractions/dujiangyan.jpg",
    alt:"從高處俯瞰都江堰水利工程與岷江",
    caption:"都江堰水利工程",
    highlights:["魚嘴","飛沙堰","寶瓶口"],
    credit:"BenBen／Wikimedia Commons · CC BY 1.0",
    source:"https://commons.wikimedia.org/wiki/File:Dujiangyan.jpg"
  },
  {
    src:"assets/attractions/qingcheng.jpg",
    alt:"青城山前山雲霧森林中的道教宮觀",
    caption:"青城山前山",
    highlights:["建福宮","月城湖","上清宮","省力索道"],
    credit:"Xiquinho Silva／Wikimedia Commons · CC BY 2.0",
    source:"https://commons.wikimedia.org/wiki/File:Mount_Qingcheng_(54531970274).jpg"
  },
  {
    src:"assets/attractions/wuhou.jpg",
    alt:"成都武侯祠內的傳統建築與庭院",
    caption:"成都武侯祠",
    highlights:["文殊院","人民公園／寬窄","武侯祠／錦里","川劇變臉"],
    credit:"Gisling／Wikimedia Commons · CC BY 2.5",
    source:"https://commons.wikimedia.org/wiki/File:Chengdu_Wuhou_ci.jpg"
  },
  null
];

const dayFallbacks=[
  "航班延誤或抵達後太累，就只辦入住與吃晚餐；春熙路留到 9/10 再決定。",
  "若 C6362 大幅誤點、確定趕不上 11:40 共乘車，立刻聯絡供應商；無法改班就取消黃龍，改搭直達車前往九寨溝。",
  "遇雨就提高觀光車比例，只選五花海、諾日朗與樹正群海等代表區域，不追求走完整條棧道。",
  "9/6 晚上確認師傅訊息與飯店接人時間；若仍未收到通知，主動聯絡供應商。若預估無法在 11:30 前抵站，立即要求調整，安全銜接 C5794 是唯一優先。",
  "下雨或前幾天太累，就縮短水利景區，只看魚嘴與寶瓶口；古城和南橋直接刪除，提早入住休息。",
  "若遇大雨、道路預警或雙腿不舒服，就取消青城山，改搭較早班次回成都；晚餐留在飯店附近。",
  "若落後超過 1 小時，先刪文殊院或縮短寬窄巷子；演出票買好後，以 19:20 抵達錦江劇場為固定底線。",
  "航班日不安排遠程備案；若時間有餘，只在飯店附近吃飯、整理行李與確認報到櫃檯。"
];

const mapPlaces = [
  {name:"成都雙流機場",area:"成都・雙流",desc:"9/4 抵達與 9/11 返程使用的機場；務必再次確認航廈。",lat:30.5785,lng:103.9471,type:"transport",days:[0,7],stay:"CTU 機場",icon:"plane"},
  {name:"成都住宿區",area:"春熙路北側／市二醫院站",desc:"成都共住 4 晚，三段訂房盡量選同一家；靠近 IFS、文殊院與錦江劇場，9/5 清晨叫車去成都東。",lat:30.6592,lng:104.0830,type:"stay",days:[0,3,4,5,6,7],stay:"成都共 4 晚",icon:"bed-double"},
  {name:"成都IFS",area:"春熙路商圈",desc:"春熙路、太古里與 IFS 相鄰，抵達第一晚依體力散步。",lat:30.6543,lng:104.0815,type:"sight",days:[0],stay:"9/4 晚間",icon:"shopping-bag"},
  {name:"成都東站",area:"成華區",desc:"9/5 搭 C6362 前往黃龍九寨；08:12 發車，建議 07:10 前抵達。",lat:30.6289,lng:104.1403,type:"transport",days:[1,3],stay:"至少提早 45–60 分鐘",icon:"train-front"},
  {name:"犀浦站",area:"成都・郫都區",desc:"9/8 轉乘 S5105 前往離堆公園；9/9 搭 S5054 返回後轉地鐵 2 號線進城。",lat:30.7562,lng:103.9727,type:"transport",days:[4,5],stay:"地鐵／城際列車同站換乘",icon:"train-front"},
  {name:"離堆公園站",area:"都江堰・灌縣古城",desc:"9/8 搭 S5105 於 08:39 抵達，最接近都江堰景區、古城與住宿區。",lat:30.9952,lng:103.6215,type:"transport",days:[4],stay:"08:39 抵達",icon:"train-front"},
  {name:"黃龍九寨站",area:"松潘・川主寺",desc:"9/5 轉 11:40 接駁先遊黃龍；9/7 搭已購買的 C5794 於 13:08 回成都。",lat:32.6530,lng:103.6089,type:"transport",days:[1,3],stay:"接駁轉乘點",icon:"train-front"},
  {name:"九寨溝住宿區",area:"溝口彭豐村／天堂口",desc:"9/5、9/6 連住兩晚；優先選步行約 5–15 分鐘到景區入口，或明確提供接送的住宿。",lat:33.2676,lng:103.9188,type:"stay",days:[1,2,3],stay:"九寨溝共 2 晚",icon:"bed-double"},
  {name:"九寨溝景區入口",area:"九寨溝縣",desc:"9/6 建議 07:45 抵達，依已選的 08:00–10:00 時段準備入園。",lat:33.2601,lng:103.9187,type:"sight",days:[2],stay:"完整一天",icon:"ticket-check"},
  {name:"五花海",area:"九寨溝・日則溝",desc:"九寨溝代表性海子之一；實際遊覽順序依景區觀光車調度。",lat:33.1599,lng:103.8794,type:"sight",days:[2],stay:"依觀光車安排",icon:"waves"},
  {name:"黃龍風景區",area:"松潘縣",desc:"9/5 約 12:30 抵達、17:00 集合前往九寨溝；上行索道省力，重點看五彩池。",lat:32.7434,lng:103.8335,type:"sight",days:[1],stay:"約 4.5 小時・量力而為",icon:"mountain-snow"},
  {name:"都江堰景區",area:"都江堰市",desc:"9/8 下午完整理解魚嘴、飛沙堰與寶瓶口三大水利核心。",lat:31.0045,lng:103.6050,type:"sight",days:[4],stay:"官方建議約 3 小時",icon:"landmark"},
  {name:"南橋",area:"灌縣古城",desc:"都江堰景區外的岷江廊橋；9/8 傍晚與灌縣古城一起散步。",lat:30.9949,lng:103.6162,type:"sight",days:[4],stay:"傍晚彈性停留",icon:"bridge"},
  {name:"都江堰住宿區",area:"灌縣古城／南橋／離堆公園站",desc:"9/8 住一晚；步行可到晚餐與南橋，隔天直接叫車去青城山，不必先回成都。",lat:31.0007,lng:103.6190,type:"stay",days:[4,5],stay:"都江堰共 1 晚",icon:"bed-double"},
  {name:"青城山前山",area:"都江堰市",desc:"9/9 只走道教文化主線，利用渡船、索道與觀光車節省體力。",lat:30.9000,lng:103.5703,type:"sight",days:[5],stay:"建議半日至下午",icon:"trees"},
  {name:"青城山站",area:"都江堰市",desc:"9/9 首選 S5054 於 18:06 出發，18:36 抵達犀浦；17:25 前完成取行李並抵達車站。",lat:30.8990,lng:103.6160,type:"transport",days:[5],stay:"17:25 前抵達",icon:"train-front"},
  {name:"文殊院",area:"青羊區",desc:"9/10 第一站；看川西佛寺建築與傳統街區，早上停留約 1 小時。",lat:30.6804,lng:104.0747,type:"sight",days:[6],stay:"08:30–09:30",icon:"landmark"},
  {name:"人民公園・寬窄巷子",area:"青羊區",desc:"兩處距離近，先喝茶再逛老街與吃午餐，合併成同一段最省移動。",lat:30.6636,lng:104.0537,type:"sight",days:[6],stay:"10:30–14:00",icon:"coffee"},
  {name:"武侯祠・錦里",area:"武侯區",desc:"兩處相鄰；先參觀武侯祠，再步行到錦里吃晚餐。",lat:30.6453,lng:104.0487,type:"sight",days:[6],stay:"15:30–19:00",icon:"landmark"},
  {name:"錦江劇場",area:"錦江區・華興正街 54 號",desc:"9/10 晚上看《川劇秀・傳奇變臉》；19:20 前抵達取票，演出約 20:00–21:10。",lat:30.659637,lng:104.080386,type:"sight",days:[6],stay:"19:20–21:10",icon:"theater"}
];

const readStoredValue=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const writeStoredValue=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{return false;}};
const readStoredJSON=(key,fallback)=>{try{const value=JSON.parse(readStoredValue(key,"null"));return value??fallback;}catch{return fallback;}};
const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const dayTypeLabels={arrival:"抵達日",move:"移動日",star:"山林景點日",hard:"高強度日",flex:"兩天一夜・第一天",city:"成都市區重點日",flight:"返程日"};
const savedData=readStoredJSON("sichuan-saved",[]);
const saved=new Set(Array.isArray(savedData)?savedData:[]);
let activeDay=0,mapFilter="all",mapDay="0",mapQuery="",travelMap,markerLayer,routeLayer;
let deferredInstallPrompt=null;
let mapMarkers=new Map();
const qs=s=>document.querySelector(s),qsa=s=>[...document.querySelectorAll(s)];
const dayTabs=qs("#dayTabs"),timeline=qs("#timeline"),toast=qs("#toast");
const icon=name=>`<i data-lucide="${name}"></i>`;
const refreshIcons=()=>{if(window.lucide)window.lucide.createIcons();};

function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1800);}
function renderDays(){
  dayTabs.innerHTML=itineraries.map((d,i)=>`<button class="day-tab ${i===activeDay?"active":""}" role="tab" aria-selected="${i===activeDay}" data-day="${i}"><span>DAY ${i+1} · ${d.date}</span><strong>${d.title}</strong></button>`).join("");
  qs("#mobileDaySelect").innerHTML=itineraries.map((d,i)=>`<option value="${i}" ${i===activeDay?"selected":""}>D${i+1}｜${d.date}｜${d.title}</option>`).join("");
  qs("#mapDaySelect").innerHTML=`<option value="all">全部 8 天</option>${itineraries.map((d,i)=>`<option value="${i}">D${i+1}｜${d.date}｜${d.title}</option>`).join("")}`;
  qs("#mapDaySelect").value=mapDay;
  qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));
  qsa(".overview-day").forEach(card=>card.classList.toggle("active",Number(card.dataset.overviewDay)===activeDay));
  renderTimeline();
}
function renderAllDays(){
  const grid=qs("#allDaysGrid");
  if(!grid)return;
  grid.innerHTML=itineraries.map((d,i)=>`<button type="button" class="overview-day ${i===activeDay?"active":""}" data-overview-day="${i}"><span>D${i+1} · ${d.date} 星期${d.weekday}</span><strong>${d.title}</strong><small>${icon("bed-double")} 今晚住 ${d.lodging}</small></button>`).join("");
  refreshIcons();
}
function selectDay(index,scroll=false){activeDay=Number(index);renderDays();setMapDay(activeDay);if(scroll)qs("#route").scrollIntoView({behavior:"smooth",block:"start"});}
function renderTimeline(){
  const d=itineraries[activeDay];
  const sightCount=routePlacesForDay(activeDay).filter(p=>p.type==="sight").length;
  qs("#dayOverview").className=`day-overview ${d.tone}`;
  qs("#dayOverview").innerHTML=`<div><span>${d.date} 星期${d.weekday}</span><h3>${d.title}</h3><div class="day-tags"><b>${dayTypeLabels[d.tone]}</b><b>${sightCount} 個主要景點</b></div></div><p>${d.note}</p><div class="lodging-badge">${icon("bed-double")}<span>今晚住宿</span><strong>${d.lodging}</strong></div>`;
  timeline.innerHTML=d.items.map((item,i)=>`<article class="timeline-item" style="animation-delay:${i*60}ms"><time>${item[0]}</time><h3>${item[1]}</h3><p>${item[2]}</p><a href="#map" data-focus-place="${item[3]}">在旅行地圖查看 ${icon("map-pin")}</a></article>`).join("");
  renderParentGuide();
  refreshIcons();
}
function renderParentGuide(){
  const day=itineraries[activeDay],guide=dayGuides[activeDay];
  const visual=dayVisuals[activeDay];
  const visualMarkup=visual?`<figure class="spot-visual"><img src="${visual.src}" alt="${visual.alt}" loading="lazy" decoding="async"><div class="spot-highlights">${visual.highlights.map(item=>`<b>${item}</b>`).join("")}</div><figcaption><span>${visual.caption}</span><a href="${visual.source}" target="_blank" rel="noreferrer">${visual.credit} ${icon("external-link")}</a></figcaption></figure>`:"";
  const large=qs("#parentGuide")?.classList.contains("large-guide");
  qs("#parentGuide").className=`parent-guide-card${large?" large-guide":""}`;
  qs("#parentGuide").innerHTML=`
    <div class="guide-summary"><div><span>DAY ${activeDay+1} · ${day.date} 星期${day.weekday}</span><h3>${day.title}</h3></div><div class="effort-pill"><small>今日體力</small><strong>${guide.effort}</strong></div></div>
    <div class="guide-body guide-info-only">
      <aside class="guide-sidebar"><h3 class="guide-subheading">出發前看這裡</h3><div class="guide-facts">${guide.facts.map(f=>`<div class="guide-fact">${icon(f[0])}<div><strong>${f[1]}</strong><span>${f[2]}</span></div></div>`).join("")}</div></aside>
      <div class="guide-spot-column">${visualMarkup}<div class="spot-explainer"><span>看什麼</span><h4>${guide.spot[0]}</h4><p>${guide.spot[1]}</p></div><div class="plan-b"><span>${icon("route-off")} 累了就這樣</span><p>${dayFallbacks[activeDay]}</p></div></div>
    </div>`;
  refreshIcons();
}
function toggleSaved(name){saved.has(name)?(saved.delete(name),showToast(`已移除「${name}」`)):(saved.add(name),showToast(`已收藏「${name}」`));writeStoredValue("sichuan-saved",JSON.stringify([...saved]));qs("#savedCount").textContent=saved.size;renderMapData(false);renderDrawer();}
function routePlacesForDay(day){const result=[];itineraries[day].items.forEach(item=>{const p=mapPlaces.find(x=>x.name===item[3]);if(p&&!result.includes(p))result.push(p);});return result;}
function routeIndexForPlace(p){if(mapDay==="all")return -1;return routePlacesForDay(Number(mapDay)).findIndex(x=>x.name===p.name);}
function markerIcon(p){const order=routeIndexForPlace(p),daily=mapDay!=="all",markerText=daily?(order>=0?String(order+1):"備"):categoryGlyphs[p.type];return L.divIcon({className:`cq-marker ${p.type} ${daily?"daily":"overview"} ${order<0&&daily?"alternate":""} ${saved.has(p.name)?"is-saved":""}`,html:`<div class="cq-marker-pin"><span>${markerText}</span></div><strong class="cq-marker-name">${p.name}</strong>`,iconSize:[38,38],iconAnchor:[19,36],popupAnchor:[0,-37]});}
function popupMarkup(p){const a=saved.has(p.name);return `<div class="map-popup"><span>${categoryLabels[p.type]} · ${p.area}</span><h3>${p.name}</h3><p>${p.desc}<br>${p.stay}</p><div><button type="button" class="popup-save ${a?"active":""}" data-popup-save="${p.name}">${icon("heart")} ${a?"已收藏":"收藏"}</button><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(p.name+" 四川")}" target="_blank" rel="noreferrer">導航 ${icon("external-link")}</a></div></div>`;}
function visiblePlaces(){const q=mapQuery.trim().toLocaleLowerCase("zh-Hant");return mapPlaces.filter(p=>(mapFilter==="all"||p.type===mapFilter)&&(mapDay==="all"||p.days.includes(Number(mapDay)))&&(!q||`${p.name} ${p.area} ${p.desc}`.toLocaleLowerCase("zh-Hant").includes(q)));}
function renderMapContext(){
  const box=qs("#mapContext");
  if(mapDay==="all"){
    box.innerHTML=`<div class="map-context-title"><span>${icon("map")} 8 天全覽</span><strong>成都與川西主要地點</strong><small>先選日期查看當天順序，或依顏色辨認景點、交通與住宿。</small></div><div class="map-context-hint">${icon("mouse-pointer-click")} 點地圖標記或右側清單查看說明</div>`;
  }else{
    const dayNumber=Number(mapDay),d=itineraries[dayNumber],route=routePlacesForDay(dayNumber),sightCount=route.filter(p=>p.type==="sight").length;
    box.innerHTML=`<div class="map-context-title"><span>D${dayNumber+1} · ${d.date} 星期${d.weekday} · ${dayTypeLabels[d.tone]}</span><strong>${d.title}</strong><small>${route.length} 個主要停靠點 · ${sightCount} 個主要景點 · 今晚住 ${d.lodging}</small></div><div class="map-route-chain">${route.map((p,i)=>`<button type="button" data-map-context-place="${p.name}"><b>${i+1}</b><span>${p.name}</span></button>${i<route.length-1?icon("chevron-right"):""}`).join("")}</div>`;
  }
  refreshIcons();
}
function initMap(){
  if(travelMap)return;
  if(!window.L){qs("#travelMap").innerHTML='<div class="map-empty"><strong>地圖載入失敗</strong><span>請確認網路後重新整理。</span></div>';return;}
  travelMap=L.map("travelMap",{zoomControl:false,scrollWheelZoom:true,tap:false}).setView([31.2,104.2],7);
  const tiles=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',crossOrigin:true});
  tiles.addTo(travelMap);
  L.control.zoom({position:"bottomright"}).addTo(travelMap);markerLayer=L.layerGroup().addTo(travelMap);routeLayer=L.layerGroup().addTo(travelMap);
  qsa("#travelMap .leaflet-control-attribution a").forEach(a=>{a.target="_blank";a.rel="noreferrer";});
  travelMap.on("popupopen",()=>{refreshIcons();const b=qs("[data-popup-save]");if(b)b.addEventListener("click",()=>toggleSaved(b.dataset.popupSave),{once:true});});
  const resizeMap=()=>{if(qs("#mapDetails")?.open)travelMap?.invalidateSize({pan:false});};
  if("ResizeObserver" in window)new ResizeObserver(resizeMap).observe(qs("#travelMap"));
  window.addEventListener("orientationchange",()=>setTimeout(refreshMapLayout,250));
  window.addEventListener("pageshow",()=>setTimeout(refreshMapLayout,120));
  renderMapData(false);refreshMapLayout();
}
function refreshMapLayout(){
  if(!qs("#mapDetails")?.open)return;
  if(!travelMap){initMap();return;}
  requestAnimationFrame(()=>travelMap?.invalidateSize({pan:false}));
  setTimeout(()=>{travelMap?.invalidateSize({pan:false});fitVisibleMap();},180);
  setTimeout(()=>travelMap?.invalidateSize({pan:false}),420);
}
function renderMapData(fit=false){
  const visible=visiblePlaces();renderMapContext();renderMapList(visible);if(!travelMap||!markerLayer)return;
  markerLayer.clearLayers();routeLayer.clearLayers();mapMarkers=new Map();
  visible.forEach(p=>{const m=L.marker([p.lat,p.lng],{icon:markerIcon(p),title:p.name,riseOnHover:true}).bindPopup(popupMarkup(p));m.on("click",()=>setActiveList(p.name));m.addTo(markerLayer);mapMarkers.set(p.name,m);});
  if(mapDay!=="all"){
    const points=routePlacesForDay(Number(mapDay)).map(p=>[p.lat,p.lng]);
    if(points.length>1){L.polyline(points,{color:"#ffffff",weight:8,opacity:.8}).addTo(routeLayer);L.polyline(points,{color:"#e76f3d",weight:4,opacity:1,dashArray:"10 8"}).addTo(routeLayer);}
  }
  refreshIcons();
  if(fit&&qs("#mapDetails")?.open)fitVisibleMap();
}
function renderMapList(list){
  const ordered=mapDay==="all"?list:[...list].sort((a,b)=>{const ai=routeIndexForPlace(a),bi=routeIndexForPlace(b);return (ai<0?99:ai)-(bi<0?99:bi);});
  qs("#mapResultCount").textContent=mapDay==="all"?`${ordered.length} 個地點`:`D${Number(mapDay)+1} · ${ordered.length} 個地點`;
  qs("#mapEmpty").hidden=!!ordered.length;qs("#mapPlaceList").hidden=!ordered.length;
  qs("#mapPlaceList").innerHTML=ordered.map(p=>{const order=routeIndexForPlace(p),badge=mapDay==="all"?categoryGlyphs[p.type]:(order>=0?String(order+1):"備");return `<button type="button" class="map-list-item ${order<0&&mapDay!=="all"?"alternate":""}" data-map-place="${p.name}"><span class="map-list-icon ${p.type}">${badge}</span><span class="map-list-copy"><span class="map-list-meta">${categoryLabels[p.type]} · ${p.area}</span><strong>${p.name}</strong><small>${p.desc}</small><em>${icon("clock-3")} ${p.stay}</em></span><span class="map-list-day">${mapDay==="all"?p.days.map(d=>`D${d+1}`).join("/"):(order>=0?`第 ${order+1} 站`:"備選")}</span></button>`;}).join("");refreshIcons();
}
function setActiveList(name){qsa(".map-list-item").forEach(x=>x.classList.toggle("active",x.dataset.mapPlace===name));const a=qsa(".map-list-item").find(x=>x.dataset.mapPlace===name);if(a)a.scrollIntoView({block:"nearest",behavior:"smooth"});}
function fitVisibleMap(){if(!travelMap)return;const p=visiblePlaces();if(!p.length)return;p.length===1?travelMap.setView([p[0].lat,p[0].lng],14):travelMap.fitBounds(p.map(x=>[x.lat,x.lng]),{padding:[35,35],maxZoom:13});}
function focusPlace(name){const p=mapPlaces.find(x=>x.name===name);if(!p)return;mapFilter="all";mapDay=String(activeDay);mapQuery="";qs("#mapSearch").value="";qs("#mapDaySelect").value=mapDay;qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));if(!travelMap)initMap();renderMapData(false);setTimeout(()=>{if(travelMap){travelMap.invalidateSize();travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(name)?.openPopup();setActiveList(name);}},420);}
function setMapDay(day){mapDay=String(day);if(mapDay!=="all"){mapQuery="";mapFilter="all";qs("#mapSearch").value="";qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));}qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));qs("#mapDaySelect").value=mapDay;renderMapData(true);}
function updateCountdown(){const days=Math.ceil((new Date("2026-09-04T00:00:00+08:00")-new Date())/86400000);qs("#countdown").textContent=days>0?`倒數 ${days} 天`:days===0?"今天出發":"旅程已開始";}
function renderDrawer(){const list=[...saved].map(n=>mapPlaces.find(p=>p.name===n)).filter(Boolean);qs("#drawerEmpty").hidden=!!list.length;qs("#drawerSaved").hidden=!list.length;qs("#drawerSaved").innerHTML=list.map(p=>`<div class="drawer-place"><div><strong>${p.name}</strong><span>${p.area} · ${p.stay}</span></div><button type="button" data-drawer-remove="${p.name}" aria-label="移除${p.name}">${icon("x")}</button></div>`).join("");refreshIcons();}
function openDrawer(){renderDrawer();qs("#drawerBackdrop").hidden=false;requestAnimationFrame(()=>qs("#drawerBackdrop").classList.add("show"));qs("#tripDrawer").classList.add("open");qs("#tripDrawer").setAttribute("aria-hidden","false");document.body.classList.add("drawer-open");}
function closeDrawer(){qs("#drawerBackdrop").classList.remove("show");qs("#tripDrawer").classList.remove("open");qs("#tripDrawer").setAttribute("aria-hidden","true");document.body.classList.remove("drawer-open");setTimeout(()=>qs("#drawerBackdrop").hidden=true,260);}

dayTabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)selectDay(b.dataset.day);});
qs("#allDaysGrid")?.addEventListener("click",e=>{const b=e.target.closest("[data-overview-day]");if(b)selectDay(b.dataset.overviewDay,true);});
qs("#mobileDaySelect").addEventListener("change",e=>selectDay(e.target.value));
qs("#mapDaySelect").addEventListener("change",e=>setMapDay(e.target.value));
document.addEventListener("click",e=>{const a=e.target.closest("[data-focus-place]");if(a){qs("#mapDetails").open=true;focusPlace(a.dataset.focusPlace);}});
qs("#mapContext").addEventListener("click",e=>{const b=e.target.closest("[data-map-context-place]");if(!b||!travelMap)return;const p=mapPlaces.find(x=>x.name===b.dataset.mapContextPlace);if(!p)return;travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(p.name)?.openPopup();setActiveList(p.name);});
qs("#mapPlaceList").addEventListener("click",e=>{const b=e.target.closest("[data-map-place]");if(!b||!travelMap)return;const p=mapPlaces.find(x=>x.name===b.dataset.mapPlace);travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(p.name)?.openPopup();setActiveList(p.name);});
qsa("[data-map-filter]").forEach(b=>b.addEventListener("click",()=>{mapFilter=b.dataset.mapFilter;qsa("[data-map-filter]").forEach(x=>x.classList.toggle("active",x===b));renderMapData(true);}));
qsa("[data-map-day]").forEach(b=>b.addEventListener("click",()=>setMapDay(b.dataset.mapDay)));
qs("#mapSearch").addEventListener("input",e=>{
  mapQuery=e.target.value;
  if(mapQuery.trim()){
    mapFilter="all";mapDay="all";
    qs("#mapDaySelect").value="all";
    qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));
    qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay==="all"));
  }
  renderMapData(true);
});
qs("#clearMapSearch").addEventListener("click",()=>{qs("#mapSearch").value="";mapQuery="";setMapDay(activeDay);qs("#mapSearch").focus();});qs("#fitMap").addEventListener("click",fitVisibleMap);
qs(".saved-button").addEventListener("click",openDrawer);qs("#closeDrawer").addEventListener("click",closeDrawer);qs("#drawerBackdrop").addEventListener("click",closeDrawer);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrawer();});
qs("#drawerSaved").addEventListener("click",e=>{const b=e.target.closest("[data-drawer-remove]");if(b)toggleSaved(b.dataset.drawerRemove);});
qs("#clearSaved").addEventListener("click",()=>{if(!saved.size)return showToast("收藏目前是空的");saved.clear();writeStoredValue("sichuan-saved","[]");qs("#savedCount").textContent="0";renderMapData(false);renderDrawer();showToast("已清空收藏");});
qs("#copyPlan").addEventListener("click",async()=>{const list=saved.size?[...saved].map(n=>`・${n}`).join("\n"):"・尚未收藏地點";const text=`四川八日行程｜成都・九寨溝｜2026/09/04–09/11\n\n收藏地點\n${list}`;try{await navigator.clipboard.writeText(text);showToast("旅行摘要已複製");}catch{showToast("瀏覽器未允許複製");}});
qs("#copyDayGuide").addEventListener("click",async()=>{
  const day=itineraries[activeDay],guide=dayGuides[activeDay];
  const steps=day.items.map((item,i)=>`${i+1}. ${item[0]}｜${item[1]}\n${item[2]}`).join("\n\n");
  const facts=guide.facts.map(f=>`・${f[1]}：${f[2]}`).join("\n");
  const text=`DAY ${activeDay+1}｜${day.date} 星期${day.weekday}｜${day.title}\n今晚住宿：${day.lodging}\n體力：${guide.effort}\n\n${guide.summary}\n\n${steps}\n\n當日提醒\n${facts}\n\n${guide.spot[0]}\n${guide.spot[1]}`;
  try{await navigator.clipboard.writeText(text);showToast("今天的摘要已複製");}catch{showToast("瀏覽器未允許複製");}
});
qs("#toggleLargeGuide").addEventListener("click",()=>{qs("#parentGuide").classList.toggle("large-guide");showToast(qs("#parentGuide").classList.contains("large-guide")?"介紹文字已放大":"介紹文字已恢復");});
function setParentMode(on){document.body.classList.toggle("parent-mode",on);qs("#parentMode").classList.toggle("active",on);qs("#parentMode").setAttribute("aria-pressed",String(on));writeStoredValue("sichuan-parent-mode",String(on));}
qs("#parentMode").addEventListener("click",()=>{const on=!document.body.classList.contains("parent-mode");setParentMode(on);showToast(on?"已開啟大字閱讀":"已關閉大字閱讀");});
function updateReadiness(){const checks=qsa("[data-check]"),done=checks.filter(i=>i.checked).length,total=checks.length,pct=total?Math.round(done/total*100):0;const percent=qs("#readinessPercent"),text=qs("#readinessText"),ring=qs("#readinessRing");if(percent)percent.textContent=`${pct}%`;if(text)text.textContent=`${done}／${total} 已完成`;if(ring)ring.style.setProperty("--progress",`${pct*3.6}deg`);}
const savedCheckState=readStoredJSON("sichuan-checklist",{}),checkState=savedCheckState&&typeof savedCheckState==="object"&&!Array.isArray(savedCheckState)?savedCheckState:{};qsa("[data-check]").forEach(i=>{i.checked=!!checkState[i.dataset.check];i.addEventListener("change",()=>{checkState[i.dataset.check]=i.checked;writeStoredValue("sichuan-checklist",JSON.stringify(checkState));updateReadiness();});});

qs("#shareTrip")?.addEventListener("click",async()=>{const url=`${location.origin}${location.pathname}`;const data={title:"四川八日行程｜成都・九寨溝",text:"2026/09/04—09/11 四川八日完整行程",url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(url);showToast("公開網址已複製");}}catch(error){if(error?.name!=="AbortError")showToast("暫時無法分享，請複製網址列");}});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
qs("#installTrip")?.addEventListener("click",async()=>{if(matchMedia("(display-mode: standalone)").matches)return showToast("已經加入手機桌面");if(deferredInstallPrompt){await deferredInstallPrompt.prompt();deferredInstallPrompt=null;return;}showToast("iPhone：按分享，再選「加入主畫面」");});
qsa('a[href="#map"]').forEach(a=>a.addEventListener("click",()=>{qs("#mapDetails").open=true;refreshMapLayout();}));
qs("#mapDetails")?.addEventListener("toggle",e=>{if(e.currentTarget.open)refreshMapLayout();});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=36").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(readStoredValue("sichuan-parent-mode","false")==="true");qs("#savedCount").textContent=saved.size;renderAllDays();renderDays();renderDrawer();updateReadiness();updateCountdown();refreshIcons();renderMapData(false);
