const itineraries = [
  { date:"9/4", weekday:"五", title:"抵達成都・住成都東", city:"成都", lodging:"成都東站附近", tone:"arrival", note:"14:40 抵達 CTU。今晚住成都東站附近，隔天前往 08:12 動車最穩；不再橫跨市區逛春熙路，辦好入住、吃飯並早睡。", items:[
    ["14:40","抵達成都雙流機場 CTU","領行李後前往飯店；先休息、補水，不急著開始跑景點。","成都雙流機場"],
    ["約 17:00–18:00","成都東站附近飯店 Check-in","選成都東站西廣場／成渝立交一帶、叫車約 5–10 分鐘到車站的住宿；先確認隔天叫車上車點。","成都東站住宿區"],
    ["19:00","飯店附近晚餐・整理行李","不再前往春熙路；把台胞證、動車票、接駁訂單、保暖衣物與隔天早餐放好，早點休息。","成都東站住宿區"]
  ]},
  { date:"9/5", weekday:"六", title:"成都 → 黃龍 → 九寨溝", city:"黃龍", lodging:"Yuji 嶼季海韻酒店", tone:"hard", note:"先遊黃龍再入住九寨溝，第三天就不用趕景區。C6362、11:40 小車拼車與兩晚住宿均已確認；約 20:45 抵達飯店。", items:[
    ["06:30","飯店出發前往成都東站","搭 08:12 的 C6362；07:10 前抵達車站，證件與訂單放在手機容易找到的位置。","成都東站"],
    ["08:12–10:01","C6362 成都東 → 黃龍九寨","班次已於 8/29 再次核對；以 12306 最終訂單為準。抵達後先吃東西、上洗手間並到集合點等車。","黃龍九寨站"],
    ["11:40","已確認：車站 → 黃龍 → 九寨溝","三人小車拼車已預訂，包含黃龍門票與上行索道；商品預計 20:45 結束。","黃龍九寨站"],
    ["約 12:30–17:00","黃龍風景區","使用上行索道省力，重點看五彩池；高海拔慢走，任何人不舒服就縮短行程。自備午餐、飲水與保暖衣物。","黃龍風景區"],
    ["約 20:45","抵達 Yuji 嶼季海韻酒店・入住","三人房為三張單人床，含三份早餐。飯店位於彭豐村，入住後直接休息，準備隔天完整遊園。","Yuji 嶼季海韻酒店"]
  ]},
  { date:"9/6", weekday:"日", title:"九寨溝完整一天", city:"九寨溝", lodging:"Yuji 嶼季海韻酒店", tone:"star", note:"第一班觀光車送哪條支線就先玩哪條；兩條支線都回諾日朗換乘，最後沿樹正溝出園。只抓五個必看點，不追求站站下車。", items:[
    ["07:30","早餐後步行出發","帶三人的購票證件原件、水和零食，約 07:45 抵達景區入口。","Yuji 嶼季海韻酒店"],
    ["08:00","入園後先搭觀光車","依現場分流：被送往日則溝或長海方向，就先完成那一條；不用堅持固定順序。","九寨溝景區入口"],
    ["08:30–11:30","完成第一條上支線","日則溝抓五花海、珍珠灘瀑布；則查洼溝抓長海、五彩池。完成後搭車回諾日朗中心站。","五花海"],
    ["11:30–12:30","諾日朗午餐・換線","在中心站吃飯、上洗手間，再轉往尚未遊覽的另一條支線；諾日朗是今天最重要的換乘點。","五花海"],
    ["12:30–15:30","完成另一條上支線","照同一原則只看兩個代表景點，再搭觀光車回諾日朗，不多走無必要的長棧道。","五花海"],
    ["15:30–17:15","諾日朗瀑布 → 出園","看完諾日朗瀑布，樹正溝只加犀牛海或樹正群海一處；爸媽累了就從諾日朗直接搭往溝口／出口的觀光車。","九寨溝景區入口"]
  ]},
  { date:"9/7", weekday:"一", title:"九寨溝 → 成都", city:"提早回程", lodging:"成都", tone:"move", note:"今天不排景點。送站拼車已選 13:08 的 C5794，實際飯店接人時間以師傅通知為準，15:14 抵達成都東。", items:[
    ["依接人通知","早餐、退房並在飯店等車","確認證件、動車票與接駁憑證；早餐 07:00 開始，若師傅提早抵達就前一晚詢問能否準備簡便早餐。","Yuji 嶼季海韻酒店"],
    ["以通知為準","已確認拼車：飯店 → 黃龍九寨站","訂單為三人、7–9 座商務拼車，已指定送 13:08 高鐵；從 Yuji 飯店免費接人，車程約 2–3 小時。","黃龍九寨站"],
    ["建議 11:30 前","抵達黃龍九寨站・吃東西","抵站後先清點行李、吃東西和上洗手間；12:35 前完成安檢。若司機預估晚於 11:30 抵站，立即聯絡供應商。","黃龍九寨站"],
    ["13:08–15:14","C5794 黃龍九寨 → 成都東","三人二等座車票已購買；帶購票時使用的台胞證原件，抵達後直接叫車回飯店。","成都東站"],
    ["16:00 後","成都飯店・附近晚餐","提早回到成都，辦入住後休息與吃晚餐；今晚不預約固定時間活動。","成都住宿區"]
  ]},
  { date:"9/8", weekday:"二", title:"青城山＋都江堰夜遊", city:"青城山・都江堰", lodging:"成都", tone:"hard", note:"優先預訂產品 24789045 的套票 B：兩景區人工精講、川劇短演出、灌縣古城與藍眼淚夜景。清晨由成都三環內飯店接人，約 22:00–22:30 回成都；門票包含，景區小交通另付。", items:[
    ["前一晚 20:00 後","確認接車通知","供應商會確認飯店地址與實際接人時間；若 22:00 前仍沒收到通知，主動從 Trip.com 訂單聯絡客服。","成都住宿區"],
    ["約 06:20–07:00","成都三環內飯店接人","不用退房、不帶大件行李；三人帶訂票使用的有效證件原件、水、零食與防滑鞋。","成都住宿區"],
    ["上午・約 3–3.5 小時","青城山前山","套票 B 為專業導遊人工講解；走建福宮、月城湖、上清宮與老君閣方向。索道、觀光車與耳機依現場公示另付，建議爸媽全部使用。","青城山前山"],
    ["中午","自行午餐・川劇短演出","套票 B 名稱沒有標示含餐，先按自費午餐準備；行程贈送約 20 分鐘川劇、變臉、武術或雜技演出。","青城山前山"],
    ["下午・約 3 小時","都江堰景區人工精講","由導遊帶看玉壘閣、二王廟、安瀾索橋、魚嘴、飛沙堰與寶瓶口；觀景扶梯、觀光車及耳機另付。","都江堰景區"],
    ["入夜・約 2 小時","南橋藍眼淚・灌縣古城","自由觀看南橋燈光、逛灌縣古城並視時間打卡仰天窩；記住集合位置與時間，不離隊太遠。","南橋"],
    ["約 22:00–22:30","返回成都飯店","實際時間受交通與當日團務影響；抵達後直接休息，隔天不排早起行程。","成都住宿區"]
  ]},
  { date:"9/9", weekday:"三", title:"文殊院・春熙路慢遊", city:"成都", lodging:"成都", tone:"flex", note:"昨晚夜遊較晚回成都，今天延後出門，只走飯店附近的北／東側市中心。文殊院與春熙路商圈都沒有固定入場壓力，任何一段都能縮短。", items:[
    ["上午","睡到自然醒・晚早餐","不設鬧鐘；先補水、吃飯並確認三人的腿腳狀況，精神恢復後再出門。","成都住宿區"],
    ["12:00–13:30","文殊院・文殊坊","看川西佛寺與傳統街區，放慢步調停留約 1–1.5 小時；寺院開放仍以當日現場公告為準。","文殊院"],
    ["13:30–15:00","午餐・回飯店短休","在文殊院周邊吃午餐；若昨晚太累就直接回飯店，下午商圈可以刪除。","成都住宿區"],
    ["15:30–19:00","春熙路・太古里・IFS","三處相連，慢慢逛街、拍屋頂熊貓並吃晚餐；商場內有冷氣、座位與洗手間，累了隨時叫車回飯店。","成都IFS"],
    ["20:00 前","回飯店休息","不另外安排夜遊，準備隔天的杜甫草堂與武侯祠門票、證件和雨具。","成都住宿區"]
  ]},
  { date:"9/10", weekday:"四", title:"成都文化西線・可選完整川劇", city:"成都", lodging:"成都", tone:"city", note:"依地理位置從杜甫草堂往人民公園、寬窄巷子與武侯祠移動，最後在錦里吃飯。9/8 已看川劇短演出；仍想看約 70 分鐘完整版才加錦江劇場。", items:[
    ["08:30","飯店出發前往杜甫草堂","帶三人的購票證件原件；官方 9 月常規 09:00 開館，目標開門後入館。","杜甫草堂"],
    ["09:00–11:00","杜甫草堂","走大廨、詩史堂、柴門、工部祠、茅屋與紅牆花徑主線；不用把整個園區走滿。","杜甫草堂"],
    ["11:20–12:40","人民公園・鶴鳴茶社","喝茶、坐下休息並在附近吃簡單午餐；不為熱門座位排長隊。","人民公園・寬窄巷子"],
    ["13:00–14:00","寬窄巷子","從人民公園短程前往，抓 1 小時看街區即可；商業店家不必每間停留。","人民公園・寬窄巷子"],
    ["14:30–16:30","武侯祠","官方目前 09:00–18:00 開放、17:00 停止入館；下午看漢昭烈廟、武侯祠與三義廟。","武侯祠・錦里"],
    ["16:30–18:30","錦里・提早吃晚餐","武侯祠旁直接步行進錦里；若已訂劇場，18:30 準時叫車離開。","武侯祠・錦里"],
    ["19:20・若有預訂","錦江劇場《川劇秀・傳奇變臉》","這是可選的完整劇場版，不是必買；提前約 40 分鐘抵達取票，預計 20:00–21:10 演出，場次以票面通知為準。","錦江劇場"]
  ]},
  { date:"9/11", weekday:"五", title:"成都收尾・前往重慶", city:"成都 → 重慶", lodging:"重慶", tone:"move", note:"上午只在成都飯店附近吃飯、整理與退房；陪爸媽到票面指定的成都機場後，你再前往成都東站搭高鐵到重慶。NX387 的 TFU／CTU 與航廈尚未確認，今天不排景點。", items:[
    ["08:30–09:30","早餐・最後補給","在飯店附近吃早餐，買水與車上需要的小點心；不前往排隊名店。","成都住宿區"],
    ["09:30–11:00","整理行李・核對兩段交通","先確認爸媽 NX387 的出發機場是 TFU 還是 CTU、報到時間與航廈；再確認你當天成都東到重慶的高鐵訂單。","成都住宿區"],
    ["依航班報到時間","退房・陪爸媽前往票面機場","全員帶齊證件與行李，依電子票機場代碼前往；未確認前不要自行假設是雙流或天府。",""],
    ["爸媽進安檢後","前往成都東站","你與爸媽在安檢口分開，再預留至少 60–90 分鐘前往成都東站、進站安檢與候車。","成都東站"],
    ["下午至傍晚","成都東 → 重慶北・辦入住","車票需在確認爸媽機場與報到時間後購買；優先少轉乘、抵達重慶不晚於 21:00 的班次。","重慶北站"]
  ]}
];

const dayGuides = [
  {effort:"輕鬆・早睡",summary:"CTU → 成都東站附近飯店 → 附近晚餐 → 整理隔天用品。第一晚不跑市中心。",facts:[
    ["car-taxi-front","機場車不用先訂接駁","9/4 領完行李後直接叫滴滴或排官方計程車；三人帶行李選六座或較大車型，下午可能遇到晚高峰。"],
    ["bed-double","第一晚可住不同飯店","9/4 只住一晚，重點是距成都東站叫車約 5–10 分鐘、24 小時櫃台、電梯與安靜無菸房，不必和 9/7 後同一家。"],
    ["sandwich","早餐先準備","9/5 約 06:30 離開飯店，通常趕不上正式早餐；前晚準備早餐盒、麵包、水與零食。"],
    ["backpack","今晚先分裝","台胞證、動車票、接駁訂單、保暖衣物與常用藥放隨身包；隔天不用重新翻大行李。"]
  ],spot:["為什麼第一晚住成都東","9/5 的 C6362 在 08:12 發車，07:10 前要到成都東站。住車站附近能避開清晨從春熙路跨區移動，比第一晚多逛一個商圈更實際。"]},
  {effort:"高強度・已留緩衝",summary:"成都飯店 → C6362 → 11:40 共乘車 → 黃龍 → Yuji 嶼季海韻酒店。先完成黃龍，9/7 就能輕鬆回成都。",facts:[
    ["train-front","已確認班次","9/5 首選 C6362：成都東 08:12 出發、黃龍九寨 10:01 抵達；07:10 前到站。"],
    ["bus-front","固定接駁","選 9/5、黃龍九寨站出發、11:40 的「車站 → 黃龍 → 九寨溝」方案；預計 20:45 抵達九寨溝。"],
    ["tram-front","黃龍省力走法","優先購買門票＋上行索道方案，重點看五彩池；高原慢走，不舒服就縮短。"],
    ["sandwich","吃飯安排","早餐吃飽並自備午餐、飲水與零食。20:45 左右才到九寨溝，不能等到沿途再找正餐。"],
    ["badge-alert","核對方向","下單日期必須是 9/5，方向必須是黃龍九寨站 → 黃龍 → 九寨溝；不要沿用先前 9/7 的畫面。"]
  ],spot:["黃龍看什麼","黃龍以鈣華彩池、雪山、峽谷與森林聞名，五彩池最具代表性。使用上行索道減少爬升；舒服完成比走完整圈更重要。"]},
  {effort:"中高・可隨時縮短",summary:"07:30 飯店出發 → 08:00 入園搭車 → 第一條支線 → 諾日朗換線 → 第二條支線 → 17:15 前往出口。",facts:[
    ["ticket-check","先備妥證件","門票與觀光車已購買；三人都帶訂票使用的有效證件原件。"],
    ["bus-front","第一班去哪就先玩哪","工作人員依人流分配日則溝或長海方向，不要為了固定順序下錯車。"],
    ["route","唯一要記的換乘點","兩條上支線都回「諾日朗中心站」；在這裡吃午餐、上洗手間並換到另一條線。"],
    ["sparkles","五個必看","五花海、珍珠灘瀑布、長海、五彩池、諾日朗瀑布；其他景點依體力加。"],
    ["footprints","爸媽累了怎麼辦","少走棧道、多搭觀光車；直接問工作人員「回溝口／出口在哪搭車？」即可提早出園。"]
  ],spot:["現場只要問三句","「這班去哪條溝？」「去諾日朗在哪搭？」「回溝口／出口在哪搭？」不確定就先問穿制服的工作人員，不跟著人群猜方向。"]},
  {effort:"早起・輕鬆移動",summary:"依師傅通知時間從 Yuji 嶼季海韻酒店上車 → 黃龍九寨站 → C5794 → 成都飯店。今天沒有景點，15:14 就回到成都東。",facts:[
    ["bus-front","接駁已確認","9/7 三人 7–9 座商務拼車已確認，訂單已指定送 13:08 的黃龍九寨高鐵。"],
    ["clock-3","接人時間","訂單沒有承諾固定 07:20；車程約 2–3 小時，實際飯店接人時間以師傅通知為準。"],
    ["train-front","已購回程","C5794：黃龍九寨 13:08 出發、成都東 15:14 抵達；三人皆為二等座。"],
    ["luggage","行李安排","行李隨共乘車；下車先清點證件與件數，再進站。"],
    ["utensils","下午安排","約 16:00 回飯店，先休息再吃晚餐；不另外硬塞景點。"]
  ],spot:["今天為什麼留白","黃龍已在 9/5 完成，九寨溝也在 9/6 玩完整天。9/7 提早回成都，同時把公路延誤緩衝留足。"]},
  {effort:"高強度・約 15 小時",summary:"成都飯店接人 → 青城山前山 → 川劇短演出 → 都江堰精講 → 藍眼淚／古城夜景 → 返回成都飯店。",facts:[
    ["badge-check","下單只選套票 B","商品名稱為「品質遊｜都江堰景區＋青城山…」，產品 ID 24789045；選「B團精講藍眼淚｜贈川劇＋遊古城」，不要誤選無夜景 A／C 或司機兼導遊的 D。"],
    ["phone-call","接車時間要等通知","頁面寫三環內飯店接送；出發前一晚 20:00 後確認，實際可能約 06:20–07:00 接人。保持手機可接中國來電。"],
    ["ticket-check","主要包含內容","青城山、都江堰門票，兩景區專業導遊人工講解，約 20 分鐘川劇演出，以及南橋藍眼淚、灌縣古城夜遊。"],
    ["wallet-cards","另外準備現金／行動支付","青城山索道約 ¥60、觀光車約 ¥20–35、耳機約 ¥20；都江堰扶梯約 ¥40、觀光車約 ¥20、耳機約 ¥20，最終以現場公示為準。"],
    ["sandwich","套票 B 先按不含餐準備","商品標題沒有寫含午餐；早餐吃飽並帶零食、水，午餐停留時自行購買，不把團餐當成已包含。"],
    ["id-card","長者證件帶原件","若媽媽經景區核驗符合免票資格，商品頁寫可退 ¥100／人；現場詢問導遊如何辦理，不先當成必定退款。"]
  ],spot:["為什麼選套票 B","它比小團多了兩景區專業導遊人工講解，又比頭等艙方案多川劇短演出與灌縣古城夜遊；雖然團較大，但內容最完整、價格也較低。"]},
  {effort:"中低・晚起慢遊",summary:"睡飽 → 文殊院／文殊坊 → 午餐與短休 → 春熙路／太古里／IFS → 早回飯店。",facts:[
    ["bed-double","上午先恢復","9/8 可能超過 15 小時、步數很高；9/9 不設固定起床時間，12:00 左右再開始景點。"],
    ["route","今天只走市中心北／東側","文殊院到春熙路商圈移動短；不跨城去杜甫草堂或武侯祠，把文化西線留給 9/10。"],
    ["landmark","文殊院不趕時間","寺院與文殊坊抓約 1–1.5 小時；若當日開放時間調整，以入口公告為準。"],
    ["armchair","商圈最容易休息","太古里與 IFS 都有冷氣、座位、餐廳與洗手間；爸媽累了可先坐著，或直接叫車回飯店。"],
    ["calendar-check","晚上整理後兩天","準備 9/10 杜甫草堂與武侯祠證件、確認劇場是否加購；再核對 9/11 爸媽的成都出發機場與你的成渝高鐵。"]
  ],spot:["文殊院＋春熙路為什麼同一天","兩處都在成都核心區，從飯店出發移動簡單；上午睡飽後仍能完成，而且沒有必須趕上的城際交通。"]},
  {effort:"中高・劇場可刪",summary:"杜甫草堂 → 人民公園／寬窄巷子 → 武侯祠／錦里 → 可選錦江劇場完整川劇。",facts:[
    ["route","文化西線順著走","先由西側杜甫草堂開始，再向東到人民公園與寬窄巷子，下午向南到武侯祠／錦里；只在最後前往錦江劇場時跨到市中心東側。"],
    ["ticket-check","兩館長者可換免費票","杜甫草堂與武侯祠全票各 ¥50；60 歲以上港澳台長者持台胞證原件可換免費票，另外兩位成人再購全票。"],
    ["clock-3","控制每段時間","杜甫草堂 2 小時、人民公園 1 小時多、寬窄巷子 1 小時、武侯祠 2 小時；不要為了拍照拖延後面的入館時間。"],
    ["clock-3","完整劇場版是加碼","9/8 已看川劇短演出；只有仍想看約 70 分鐘完整版本才買票。買票後才需 18:30 前吃完晚餐、19:20 抵達取票。"],
    ["utensils","吃飯安排","人民公園附近簡單午餐，晚餐提早在錦里解決；不要排需要久候的餐廳。"],
    ["luggage","看完直接回飯店","演出結束後直接叫車回飯店，完成全員行李、爸媽航廈與你的成渝高鐵確認。"]
  ],spot:["成都文化西線看什麼","杜甫草堂看唐詩與園林，人民公園體驗蓋碗茶，寬窄巷子看老街，武侯祠理解蜀漢歷史；四段主題不同，錦里主要留給晚餐。"]},
  {effort:"移動日・先確認機場",summary:"成都早餐 → 整理與退房 → 陪爸媽到票面機場 → 你前往成都東站 → 高鐵到重慶。上午不新增景點。",facts:[
    ["badge-alert","先確認 TFU／CTU","NX387 的成都出發機場與航廈仍待電子票確認；天府與雙流方向完全不同，這是 9/11 最先要確定的資訊。"],
    ["car-taxi-front","成都到機場不用買接駁票","確認機場後，前一晚可在滴滴預約六座車；白天也能當場叫車，不必另外預付旅遊平台的機場接送。"],
    ["train-front","成渝高鐵現在確認","9/11 車票已在售；先依爸媽報到時間反推班次，優先成都東上車、抵達重慶北且不晚於 21:00。"],
    ["luggage","行李分開清點","爸媽的護照／台胞證、登機資料與托運物品放一起；你的台胞證、高鐵訂單與前往重慶的行李另外確認。"],
    ["route","安檢口後再分開","先陪爸媽完成報到並送到安檢口；之後你才前往成都東站。機場尚未確認前，不鎖死高鐵班次。"]
  ],spot:["成都到重慶交接","這天四川行程在成都收尾，晚間抵達重慶後直接辦入住。重慶景點從 9/12 開始，9/11 不需要再塞景點。"]}
];

const dayVisuals = [
  null,
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
    caption:"青城山＋都江堰夜遊",
    highlights:["青城山前山","川劇短演出","都江堰精講","藍眼淚夜景"],
    credit:"BenBen／Wikimedia Commons · CC BY 1.0",
    source:"https://commons.wikimedia.org/wiki/File:Dujiangyan.jpg"
  },
  {
    src:"assets/attractions/ifs.jpg",
    alt:"成都 IFS 屋頂的大熊貓裝置藝術",
    caption:"文殊院＋春熙路慢遊",
    highlights:["睡到自然醒","文殊院／文殊坊","太古里","IFS 熊貓"],
    credit:"David Xuang／Wikimedia Commons · CC BY-SA 4.0",
    source:"https://commons.wikimedia.org/wiki/File:The_panda_at_IFS_Chengdu.jpg"
  },
  {
    src:"assets/attractions/wuhou.jpg",
    alt:"成都武侯祠內的傳統建築與庭院",
    caption:"成都武侯祠",
    highlights:["杜甫草堂","人民公園／寬窄","武侯祠／錦里","可選完整川劇"],
    credit:"Gisling／Wikimedia Commons · CC BY 2.5",
    source:"https://commons.wikimedia.org/wiki/File:Chengdu_Wuhou_ci.jpg"
  },
  null
];

const dayFallbacks=[
  "航班延誤或抵達後太累，就直接到成都東站附近飯店休息並叫外送；今晚沒有景點，也不需要為了逛街再進市中心。",
  "若 C6362 大幅誤點、確定趕不上 11:40 共乘車，立刻聯絡供應商；無法改班就取消黃龍，改搭直達車前往九寨溝。",
  "遇雨就提高觀光車比例，只選五花海、諾日朗與樹正群海等代表區域，不追求走完整條棧道。",
  "9/6 晚上確認師傅訊息與飯店接人時間；若仍未收到通知，主動聯絡供應商。若預估無法在 11:30 前抵站，立即要求調整，安全銜接 C5794 是唯一優先。",
  "若遇大雨、道路預警或任何人腿腳不適，立即告知導遊並提高索道、觀光車與扶梯使用比例；夜景自由活動可縮短，但集合時間不能錯過。",
  "若 9/8 太晚回飯店，就睡到中午；先刪文殊院，只保留下午春熙路／IFS 吃飯與補給，甚至整天休息也可以。",
  "若落後超過 1 小時，先刪寬窄巷子或縮短人民公園；武侯祠要在 17:00 前入館，演出票買好後則以 19:20 抵達錦江劇場為底線。",
  "若爸媽機場或報到時間尚未確認，就先不要鎖死高鐵班次；9/11 不加景點，以送機與安全抵達重慶為唯一優先。"
];

const mapPlaces = [
  {name:"成都雙流機場",area:"成都・雙流",desc:"9/4 抵達使用的機場；9/11 爸媽的出發機場仍須依 NX387 電子票確認，不可直接沿用。",lat:30.5785,lng:103.9471,type:"transport",days:[0],stay:"9/4 抵達 CTU",icon:"plane"},
  {name:"成都東站住宿區",area:"成都東站西廣場／成渝立交",desc:"9/4 只住一晚；選叫車約 5–10 分鐘到成都東站、24 小時櫃台與安靜無菸房，方便 9/5 清晨搭車。",lat:30.6312,lng:104.1336,type:"stay",days:[0,1],stay:"9/4 入住・9/5 退房・共 1 晚",icon:"bed-double"},
  {name:"成都住宿區",area:"市二醫院站／太升南路站／春熙路北側",desc:"9/7 回成都後連住到 9/11；在三環內且避開春熙路最吵主街，適合 9/8 套票接送，也方便文殊院、IFS、錦江劇場及 9/11 退房轉乘。",lat:30.6632,lng:104.0782,type:"stay",days:[3,4,5,6,7],stay:"9/7 入住・9/11 退房・共 4 晚",icon:"bed-double"},
  {name:"成都IFS",area:"春熙路商圈",desc:"春熙路、太古里與 IFS 相鄰；9/9 下午依體力散步、吃飯與拍屋頂熊貓。",lat:30.6543,lng:104.0815,type:"sight",days:[5],stay:"9/9 下午彈性停留",icon:"shopping-bag"},
  {name:"成都東站",area:"成華區",desc:"9/5 搭 C6362 前往黃龍九寨；9/11 陪爸媽進安檢後，再由此搭高鐵前往重慶。",lat:30.6289,lng:104.1403,type:"transport",days:[1,3,7],stay:"至少提早 45–60 分鐘",icon:"train-front"},
  {name:"重慶北站",area:"重慶・渝北區",desc:"9/11 四川段行程終點；抵達後前往解放碑住宿區，景點從隔天開始。",lat:29.6083,lng:106.5508,type:"transport",days:[7],stay:"優先 21:00 前抵達",icon:"train-front"},
  {name:"黃龍九寨站",area:"松潘・川主寺",desc:"9/5 轉 11:40 接駁先遊黃龍；9/7 搭已購買的 C5794 於 13:08 回成都。",lat:32.6530,lng:103.6089,type:"transport",days:[1,3],stay:"接駁轉乘點",icon:"train-front"},
  {name:"Yuji 嶼季海韻酒店",area:"溝口彭豐村／天堂口",desc:"9/5、9/6 連住兩晚；三張單人床、三份早餐，步行約 10–15 分鐘到九寨溝景區入口。",lat:33.2676,lng:103.9188,type:"stay",days:[1,2,3],stay:"9/5 入住・9/7 退房・兩晚共 ¥475",icon:"bed-double"},
  {name:"九寨溝景區入口",area:"九寨溝縣",desc:"9/6 建議 07:45 抵達，依已選的 08:00–10:00 時段準備入園。",lat:33.2601,lng:103.9187,type:"sight",days:[2],stay:"完整一天",icon:"ticket-check"},
  {name:"五花海",area:"九寨溝・日則溝",desc:"九寨溝代表性海子之一；實際遊覽順序依景區觀光車調度。",lat:33.1599,lng:103.8794,type:"sight",days:[2],stay:"依觀光車安排",icon:"waves"},
  {name:"黃龍風景區",area:"松潘縣",desc:"9/5 約 12:30 抵達、17:00 集合前往九寨溝；上行索道省力，重點看五彩池。",lat:32.7434,lng:103.8335,type:"sight",days:[1],stay:"約 4.5 小時・量力而為",icon:"mountain-snow"},
  {name:"都江堰景區",area:"都江堰市",desc:"9/8 套票 B 下午由專業導遊人工精講，重點看玉壘閣、二王廟、魚嘴、飛沙堰與寶瓶口。",lat:31.0045,lng:103.6050,type:"sight",days:[4],stay:"約 3 小時・門票包含",icon:"landmark"},
  {name:"南橋",area:"灌縣古城",desc:"9/8 套票 B 夜間自由活動區；觀看藍眼淚燈光、逛灌縣古城並視時間前往仰天窩。",lat:30.9949,lng:103.6162,type:"sight",days:[4],stay:"夜間約 2 小時",icon:"bridge"},
  {name:"青城山前山",area:"都江堰市",desc:"9/8 套票 B 上午由專業導遊人工講解，利用索道與觀光車節省體力；景區小交通另付。",lat:30.9000,lng:103.5703,type:"sight",days:[4],stay:"約 3–3.5 小時・門票包含",icon:"trees"},
  {name:"文殊院",area:"青羊區",desc:"9/9 睡飽後第一站；看川西佛寺與文殊坊，抓約 1–1.5 小時，不趕固定入場。",lat:30.6804,lng:104.0747,type:"sight",days:[5],stay:"12:00–13:30",icon:"landmark"},
  {name:"杜甫草堂",area:"青羊區・青華路 37 號",desc:"9/10 文化西線第一站；走茅屋、詩史堂、工部祠與紅牆花徑主線，官方 9 月常規 09:00 開館。",lat:30.6607,lng:104.0282,type:"sight",days:[6],stay:"09:00–11:00",icon:"book-open"},
  {name:"人民公園・寬窄巷子",area:"青羊區",desc:"9/10 在人民公園喝茶休息，再短程前往寬窄巷子；兩段合計約 2.5 小時。",lat:30.6636,lng:104.0537,type:"sight",days:[6],stay:"11:20–14:00",icon:"coffee"},
  {name:"武侯祠・錦里",area:"武侯區",desc:"9/10 下午先參觀武侯祠，再步行到隔壁錦里提早吃晚餐；17:00 前必須入館。",lat:30.6453,lng:104.0487,type:"sight",days:[6],stay:"14:30–18:30",icon:"landmark"},
  {name:"錦江劇場",area:"錦江區・華興正街 54 號",desc:"9/10 晚上看《川劇秀・傳奇變臉》；19:20 前抵達取票，演出約 20:00–21:10。",lat:30.659637,lng:104.080386,type:"sight",days:[6],stay:"19:20–21:10",icon:"theater"}
];

const readStoredValue=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const writeStoredValue=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{return false;}};
const readStoredJSON=(key,fallback)=>{try{const value=JSON.parse(readStoredValue(key,"null"));return value??fallback;}catch{return fallback;}};
const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const dayTypeLabels={arrival:"抵達日",move:"移動日",star:"山林景點日",hard:"高強度日",flex:"晚起慢遊日",city:"成都市區重點日",flight:"返程日"};
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
  timeline.innerHTML=d.items.map((item,i)=>`<article class="timeline-item" style="animation-delay:${i*60}ms"><time>${item[0]}</time><h3>${item[1]}</h3><p>${item[2]}</p>${mapPlaces.some(p=>p.name===item[3])?`<a href="#map" data-focus-place="${item[3]}">在旅行地圖查看 ${icon("map-pin")}</a>`:""}</article>`).join("");
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
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=42").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(readStoredValue("sichuan-parent-mode","false")==="true");qs("#savedCount").textContent=saved.size;renderAllDays();renderDays();renderDrawer();updateReadiness();updateCountdown();refreshIcons();renderMapData(false);
