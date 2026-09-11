const itineraries = [
  { date:"9/4", weekday:"五", title:"抵達成都・東郊記憶", city:"成都", lodging:"龍之夢瑞峯公寓酒店", tone:"arrival", done:true, record:"旅遊紀錄：抵達成都、入住成都東站旁飯店，晚上前往東郊記憶。", items:[
    ["14:40","抵達成都雙流機場 CTU","領行李後前往飯店；先休息、補水，不急著開始跑景點。","成都雙流機場"],
    ["約 17:00–18:00","龍之夢瑞峯公寓酒店 Check-in","地址為成華區嘉陵江路 8 號-D；14:00 後可入住。訂單已付款 TWD 988，9/4 18:00 前可免費取消，之後不退款。","龍之夢瑞峯公寓酒店"],
    ["晚上","東郊記憶・夜間散步","逛紅磚廠房、展演空間與夜間街區。","東郊記憶"],
    ["回房後","整理隔天行李・早睡","整理台胞證、動車票、接駁訂單、保暖衣物、早餐與水，準備隔天前往黃龍。","龍之夢瑞峯公寓酒店"]
  ]},
  { date:"9/5", weekday:"六", title:"成都 → 黃龍 → 九寨溝", city:"黃龍", lodging:"Yuji 嶼季海韻酒店", tone:"hard", done:true, record:"旅遊紀錄：從成都東搭車前往黃龍九寨站，遊覽黃龍後轉往九寨溝住宿。", items:[
    ["06:30","從龍之夢瑞峯公寓酒店步行出發","飯店在成都東站東廣場一側；按導航前往進站口，第一次走多留 10–15 分鐘找路。搭 08:12 的 C6362，07:10 前完成進站。","成都東站"],
    ["08:12–10:01","C6362 成都東 → 黃龍九寨","班次已於 8/29 再次核對；以 12306 最終訂單為準。抵達後先吃東西、上洗手間並到集合點等車。","黃龍九寨站"],
    ["11:40","車站 → 黃龍 → 九寨溝","三人小車拼車包含黃龍門票與上行索道；商品預計 20:45 結束。","黃龍九寨站"],
    ["約 12:30–17:00","黃龍風景區","使用上行索道省力，重點看五彩池；高海拔慢走，任何人不舒服就縮短行程。自備午餐、飲水與保暖衣物。","黃龍風景區"],
    ["約 20:45","抵達 Yuji 嶼季海韻酒店・入住","三人房為三張單人床，含三份早餐。飯店位於彭豐村，入住後直接休息，準備隔天完整遊園。","Yuji 嶼季海韻酒店"]
  ]},
  { date:"9/6", weekday:"日", title:"九寨溝完整一天", city:"九寨溝", lodging:"Yuji 嶼季海韻酒店", tone:"star", done:true, record:"旅遊紀錄：用完整一天遊覽九寨溝，依景區觀光車分流完成兩條上支線，再由諾日朗方向返回溝口。", items:[
    ["07:30","早餐後步行出發","帶三人的購票證件原件、水和零食，約 07:45 抵達景區入口。","Yuji 嶼季海韻酒店"],
    ["08:00","入園後先搭觀光車","依現場分流：被送往日則溝或長海方向，就先完成那一條；不用堅持固定順序。","九寨溝景區入口"],
    ["08:30–11:30","完成第一條上支線","日則溝抓五花海、珍珠灘瀑布；則查洼溝抓長海、五彩池。完成後搭車回諾日朗中心站。","五花海"],
    ["11:30–12:30","諾日朗午餐・換線","在中心站吃飯、上洗手間，再轉往尚未遊覽的另一條支線；諾日朗是今天最重要的換乘點。","諾日朗中心站"],
    ["12:30–15:30","完成另一條上支線","照同一原則只看兩個代表景點，再搭觀光車回諾日朗，不多走無必要的長棧道。","長海・五彩池"],
    ["15:30–17:15","諾日朗瀑布 → 出園","看完諾日朗瀑布，樹正溝只加犀牛海或樹正群海一處；爸媽累了就從諾日朗直接搭往溝口／出口的觀光車。","諾日朗瀑布"]
  ]},
  { date:"9/7", weekday:"一", title:"返回成都・天府廣場與寬窄巷子", city:"成都", lodging:"璽悅·瀾庭度假公寓", tone:"move", done:true, record:"旅遊紀錄：從九寨溝返回成都並入住公寓，晚上去了天府廣場與寬窄巷子。", items:[
    ["依接人通知","早餐、退房並在飯店等車","確認證件、動車票與接駁憑證；早餐 07:00 開始，若師傅提早抵達就前一晚詢問能否準備簡便早餐。","Yuji 嶼季海韻酒店"],
    ["以通知為準","飯店 → 黃龍九寨站","三人搭 7–9 座商務拼車銜接 13:08 高鐵；從 Yuji 飯店接人，車程約 2–3 小時。","黃龍九寨站"],
    ["建議 11:30 前","抵達黃龍九寨站・吃東西","抵站後先清點行李、吃東西和上洗手間；12:35 前完成安檢。若司機預估晚於 11:30 抵站，立即聯絡供應商。","黃龍九寨站"],
    ["13:08–15:14","C5794 黃龍九寨 → 成都東","三人帶購票時使用的台胞證原件；抵達後直接叫車前往公寓。","成都東站"],
    ["16:00 後","璽悅·瀾庭度假公寓 Check-in","地址：青羊區東華門街富力史丹尼國際公寓 A 座一樓。先確認房間無菸味、清潔與洗衣機，並休息至少 45 分鐘。","璽悅·瀾庭度假公寓"],
    ["傍晚","天府廣場・夜景","前往天府廣場，在成都中心散步並看夜景。","天府廣場"],
    ["晚上","寬窄巷子","晚上加走寬窄巷子，逛成都最具代表性的歷史街區之一。","寬窄巷子"],
    ["回公寓後","確認明日接車・準備雨具","留意供應商通知；若仍沒收到 9/8 接車時間，立即從 Trip.com 訂單主動聯絡。","璽悅·瀾庭度假公寓"]
  ]},
  { date:"9/8", weekday:"二", title:"青城山＋都江堰夜遊", city:"青城山・都江堰", lodging:"璽悅·瀾庭度假公寓", tone:"hard", done:true, record:"旅遊紀錄：參加套票 B 一日團，從青城山前山一路走到都江堰，最後用灌縣古城與南橋夜景收尾，是八天裡內容最滿的一天。", items:[
    ["清晨","成都公寓接人出發","一早由公寓上門接載，跟團前往青城山與都江堰；這天不用搬行李，晚上仍回成都住。","璽悅·瀾庭度假公寓"],
    ["上午","青城山前山","跟著導遊走訪青城山前山，參觀山林步道與道教建築。","青城山前山"],
    ["中午","午餐・川劇短演出","行程中觀看短版川劇、變臉與地方表演。","青城山前山"],
    ["下午","都江堰景區","跟著導覽認識魚嘴、飛沙堰與寶瓶口，看兩千多年前的水利設計如何持續運作。","都江堰景區"],
    ["入夜","灌縣古城・南橋夜景","夜裡走逛灌縣古城，在南橋看水面燈光與藍眼淚夜景，替長長的一日遊收尾。","南橋"],
    ["深夜","返回成都","結束約十五小時的一日團，回到成都公寓休息。","璽悅·瀾庭度假公寓"]
  ]},
  { date:"9/9", weekday:"三", title:"三星堆・春熙路與川劇", city:"廣漢 → 成都", lodging:"璽悅·瀾庭度假公寓", tone:"city", done:true, record:"旅遊紀錄：上午參觀三星堆博物館，下午約 16:00 回到春熙路；晚餐後分頭行動，你自己逛街，爸媽去看川劇。", items:[
    ["07:30–約 09:00","成都出發・前往三星堆","依一日遊安排在成都上車，車程約 1.5 小時；抵達後跟著導遊進館。","三星堆博物館"],
    ["上午至下午","三星堆博物館","跟著導覽看古蜀文明，重點包括青銅縱目面具、青銅大立人、金面具與青銅神樹。","三星堆博物館"],
    ["約 16:00","返回成都・春熙路下車","結束三星堆行程後回到成都，在春熙路一帶解散。","成都IFS"],
    ["下午至晚餐","春熙路・太古里・IFS","一家人先在商圈散步、逛街與吃晚餐，感受成都最熱鬧的城市一面。","成都IFS"],
    ["晚餐後・分頭行動","你逛街・爸媽看川劇","晚餐後各自選喜歡的活動：你留在商圈逛街，爸媽去看川劇，結束後再回公寓。","璽悅·瀾庭度假公寓"]
  ]},
  { date:"9/10", weekday:"四", title:"人民公園慢遊・錦江夜景", city:"成都", lodging:"璽悅·瀾庭度假公寓", tone:"city", done:true, record:"旅遊紀錄：上午慢慢出發走杜甫草堂，下午把時間留給人民公園；傍晚前往望平街，再沿錦江看成都夜色。文殊院與武侯祠最後沒有安排。", items:[
    ["約 10:00","從公寓慢慢出發","沒有早起趕行程，睡飽後再出門，直接前往杜甫草堂。","璽悅·瀾庭度假公寓"],
    ["上午","杜甫草堂","走進杜甫在成都的生活記憶，沿茅屋、詩史堂與紅牆花徑慢慢參觀。","杜甫草堂"],
    ["中午至 17:30","人民公園・午餐與喝茶","把整個下午留在人民公園：吃午餐、喝蓋碗茶、散步，也看成都人自在過日子的樣子。","人民公園"],
    ["傍晚","望平街・猛追灣","離開人民公園後前往望平街，在濱水街區吃飯、逛店並等夜景亮起。","望平街・猛追灣"],
    ["晚上","錦江沿岸・安順廊橋","沿錦江往東門碼頭、合江亭與安順廊橋方向散步；完整走法約 3–3.5 公里。","安順廊橋"],
    ["夜裡","回公寓・旅行最後一晚","回房整理一家人的行李，結束三人在成都的最後一個完整夜晚。","璽悅·瀾庭度假公寓"]
  ]},
  { date:"9/11", weekday:"五", title:"成都自由活動・爸媽返程", city:"成都", lodging:"", tone:"move", done:true, record:"旅遊紀錄：早上沒有安排景點，在成都隨意走走。爸媽自行前往天府機場，三人的四川行程到這裡結束。", items:[
    ["早上","成都自由活動","沒有安排景點，在市區吃東西、隨意走走。","璽悅·瀾庭度假公寓"],
    ["上午","爸媽自行前往天府機場","爸媽出發前往成都天府機場 T1；你沒有一起去機場，三人的四川行程在這裡結束。","成都天府國際機場 T1"]
  ]}
];

const dayGuides = [
  {effort:"輕鬆・早睡",summary:"CTU → 龍之夢瑞峯公寓酒店 → 有精神才去東郊記憶 → 整理隔天用品。第一晚不跑市中心。",facts:[
    ["car-taxi-front","機場車不用先訂接駁","9/4 領完行李後直接叫滴滴或排官方計程車；三人帶行李選六座或較大車型，下午可能遇到晚高峰。"],
    ["bed-double","成都東站飯店已確認","龍之夢瑞峯公寓酒店（成都東站店）9/4 入住、9/5 退房，實付 TWD 988；地址為成華區嘉陵江路 8 號-D。"],
    ["badge-alert","記住取消期限","9/4 18:00（住宿當地時間）前可免費取消；之後訂單不退款。接駁服務需另向飯店詢問，不代表訂單已含免費接送。"],
    ["footprints","隔天可步行進站","飯店位於成都東站東廣場一側，公開資料標示約 5–10 分鐘；帶行李第一次找路，多留 10–15 分鐘並依現場指標前往進站口。"],
    ["sandwich","早餐先準備","9/5 約 06:30 離開飯店，通常趕不上正式早餐；前晚準備早餐盒、麵包、水與零食。"],
    ["sparkles","唯一加碼：東郊記憶","18:30 前完成入住、三人都有精神才出發；叫滴滴往返，不搭地鐵轉車。逛街與晚餐控制在兩小時左右，最晚 21:30 回房。"],
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
  {effort:"移動日・晚間可取消",summary:"Yuji 飯店 → 黃龍九寨站 → C5794 → 成都公寓 → 有精神才去天府廣場吃飯看夜景。",facts:[
    ["bus-front","送站接駁","9/7 三人搭 7–9 座商務拼車，指定銜接 13:08 的黃龍九寨高鐵。"],
    ["clock-3","接人時間","訂單沒有承諾固定 07:20；車程約 2–3 小時，實際飯店接人時間以師傅通知為準。"],
    ["train-front","回程班次","C5794：黃龍九寨 13:08 出發、成都東 15:14 抵達；三人皆為二等座。"],
    ["luggage","行李安排","行李隨共乘車；下車先清點證件與件數，再進站。"],
    ["bed-double","成都入住","抵達成都東後直接叫車到璽悅·瀾庭度假公寓；先驗房、確認洗衣機並休息至少 45 分鐘。"],
    ["sparkles","今晚唯一加碼","天府廣場離騾馬市只有地鐵 1 號線一站；先吃飯再短暫看夜景，19:30 左右開始回程。"],
    ["phone-call","明早接車優先","20:00 前回公寓等通知；若 22:00 前仍未收到 9/8 接車時間，主動聯絡供應商。"]
  ],spot:["今晚為什麼只去天府廣場","黃龍與九寨溝已連續兩天活動，明早青城山團可能約 06:00 接人。天府廣場距住宿近、免門票、可隨時取消，比跨區夜遊穩妥。"]},
  {effort:"高強度・約 15 小時",summary:"公寓接人 → 青城山前山 → 川劇短演出 → 都江堰精講 → 藍眼淚／古城夜景 → 返回成都。",facts:[
    ["badge-check","套票 B 內容","含青城山、都江堰門票、兩景區中文導遊講解、川劇短演出、灌縣古城及藍眼淚夜景。"],
    ["phone-call","接車時間要等通知","集合基準為 07:00，三環內飯店免費上門接；接人可能提前約 1 小時。出發前一晚 20:00 後確認，保持手機可接中國來電。"],
    ["badge-check","官方標示無購物","商品頁標示全程不含購物店、沒有強制購物；景區內自行購物、午餐和小交通不屬於購物站。"],
    ["ticket-check","主要包含內容","青城山、都江堰門票，兩景區專業導遊人工講解，約 20 分鐘川劇演出，以及南橋藍眼淚、灌縣古城夜遊。"],
    ["wallet-cards","另外準備現金／行動支付","青城山索道約 ¥60、觀光車約 ¥20–35、耳機約 ¥20；都江堰扶梯約 ¥40、觀光車約 ¥20、耳機約 ¥20，最終以現場公示為準。"],
    ["sandwich","套票 B 先按不含餐準備","商品標題沒有寫含午餐；早餐吃飽並帶零食、水，午餐停留時自行購買，不把團餐當成已包含。"],
    ["id-card","爸爸的長者證件帶原件","爸爸 KAO/MING HSIEN 為訂單中的 60 歲以上長者；若景區核驗符合免票資格，商品頁寫可退 ¥100／人，現場詢問導遊辦理方式。"]
  ],spot:["為什麼選套票 B","它明確包含兩景區專業導遊人工講解、川劇短演出與灌縣古城夜遊；雖然上限 35 人，但內容完整、價格較低，而且訂單已確認三環內飯店免費接人。"]},
  {effort:"中高・正在進行",summary:"成都接送 → 三星堆導覽 → 16:00 春熙路／太古里／IFS → 晚餐後分流。",facts:[
    ["badge-check","上午三星堆已完成","跟導覽看青銅縱目面具、大立人、金面具與青銅神樹；這段已納入旅遊紀錄。"],
    ["bus-front","約 16:00 回春熙路","一日遊約 15:30 在春熙路解散，交通有浮動時以導遊通知與實際下車點為準。"],
    ["armchair","下午先一起逛","春熙路、太古里與 IFS 相連；先拍 IFS 熊貓、吃晚餐，再決定分頭行動。"],
    ["shopping-bag","晚餐後分流","你留在商圈逛街；爸媽依票面地址與時間看川劇，彼此傳送定位並約好演出後報平安。"],
    ["car-taxi-front","回程各自叫車","爸媽演出結束後直接叫車回公寓；你逛完也由人多、明亮的位置上車，不必特地集合。"],
    ["calendar-check","當晚整理","回房後整理照片與隔天需要的物品。"]
  ],spot:["今天的實際安排","原定文殊院改由三星堆取代，之後確認不再安排文殊院；春熙路逛街與爸媽川劇則保留在今晚。"]},
  {effort:"中等・17:30 後再夜遊",summary:"杜甫草堂 → 人民公園午餐並待到 17:30 → 望平街晚餐 → 錦江沿岸 → 安順廊橋。",facts:[
    ["route","文殊院與武侯祠都取消","今天只保留真正想看的杜甫草堂，下午改走人民公園與錦江濱水街區，不再追博物館。"],
    ["ticket-check","今天只需杜甫草堂門票","武侯祠已取消，不要再買票；爸爸 60 歲以上帶台胞證原件換免費票，另外兩位成人購買杜甫草堂全票。"],
    ["cloud-rain","夜遊保留彈性","帶摺疊傘；若路面濕滑，就從望平街或合江亭直接叫車到安順廊橋，不勉強走完全程。"],
    ["footprints","完整夜遊約 3–3.5 公里","望平街經東門碼頭、合江亭到安順廊橋，若再延伸九眼橋約需 1.5–2 小時；路線平坦，可依體力縮短。"],
    ["route-off","不再排川劇與重複景點","爸媽 9/9 晚上已看川劇；天府廣場、寬窄巷子與春熙路也都走過，今天全部不重複。"],
    ["utensils","人民公園待到 17:30 沒問題","下午沒有閉館趕場；17:30 再叫車去望平街，吃完晚餐後正好接夜景。"],
    ["luggage","約 21:15 回房整理","夜景後直接叫車回公寓，完成全員行李、確認隔天前往 TFU T1 的六座車，並處理你的成渝高鐵。"]
  ],spot:["人民公園想待到 17:30","可以。後段不取消，只把望平街改成晚餐加短逛，再沿錦江走到安順廊橋；若爸媽累了，就在合江亭前叫車縮短。"]},
  {effort:"四川旅程收尾",summary:"早上在成都隨意走走；爸媽自行前往天府機場，三人的四川行程結束。",facts:[
    ["footprints","早上沒有趕景點","最後半天順著當下的心情亂晃，沒有為了填滿時間再塞景點。"],
    ["plane","爸媽自行去機場","爸媽前往成都天府機場 T1；你沒有同行。"]
  ],spot:["行程結束","爸媽前往機場後，三人的四川行程結束。"]}
];

const dayFallbacks=[
  "這一天已完成，東郊記憶已從備選改為實際旅遊紀錄。",
  "若 C6362 大幅誤點、確定趕不上 11:40 共乘車，立刻聯絡供應商；無法改班就取消黃龍，改搭直達車前往九寨溝。",
  "遇雨就提高觀光車比例，只選五花海、諾日朗與樹正群海等代表區域，不追求走完整條棧道。",
  "這一天已完成，實際去了天府廣場與寬窄巷子；回公寓後只需確認 9/8 接車。",
  "若遇大雨、道路預警或任何人腿腳不適，立即告知導遊並提高索道、觀光車與扶梯使用比例；夜景自由活動可縮短，但集合時間不能錯過。",
  "若三星堆回程晚於 16:30，就直接在春熙路吃飯；爸媽依票面時間優先前往川劇，你的逛街時間往後順延即可。",
  "17:30 離開人民公園後，若爸媽腳累，就在望平街吃完晚餐直接叫車到合江亭或安順廊橋；若下雨明顯則看完廊橋後直接回公寓。",
  "爸媽前往天府機場後，三人的四川行程結束。"
];

const mapPlaces = [
  {name:"成都雙流機場",area:"成都・雙流",desc:"9/4 搭 NX388 於 14:40 抵達成都雙流機場 CTU T1；這不是 9/11 爸媽回程使用的機場。",lat:30.5785,lng:103.9471,type:"transport",days:[0],stay:"9/4 14:40 抵達 CTU T1",icon:"plane"},
  {name:"成都天府國際機場 T1",area:"成都・簡陽",desc:"9/11 爸媽自行前往 TFU T1 搭 NX387；你沒有同行，三人的四川旅程在成都分流。",lat:30.3125,lng:104.4413,type:"transport",days:[7],stay:"9/11 爸媽返程",icon:"plane"},
  {name:"龍之夢瑞峯公寓酒店",area:"成華區・嘉陵江路 8 號-D",desc:"成都東站店已確認，9/4 一晚實付 TWD 988。飯店位於成都東站東廣場一側，步行約 5–10 分鐘；帶行李第一次找路需多留時間。",lat:30.6328,lng:104.1427,type:"stay",days:[0,1],stay:"9/4 入住・9/5 退房・共 1 晚",icon:"bed-double"},
  {name:"東郊記憶",area:"成華區・建設南支路",desc:"9/4 晚上實際走訪；抵達成都並入住後，前往紅磚廠房與夜間街區散步。",lat:30.6717,lng:104.1213,type:"sight",days:[0],stay:"9/4 旅遊紀錄",icon:"camera"},
  {name:"璽悅·瀾庭度假公寓",area:"青羊區・東華門街・騾馬市站",desc:"9/7 至 9/11 連住四晚；富力史丹尼國際公寓 A 座一樓，距騾馬市地鐵站約 300 公尺。位於三環內，可銜接 9/8 飯店接送。",lat:30.671634,lng:104.07562,type:"stay",days:[3,4,5,6,7],stay:"9/7 入住・9/11 退房・共 4 晚",icon:"bed-double"},
  {name:"天府廣場",area:"青羊區・成都中心",desc:"9/7 返回成都並入住公寓後實際走訪，在廣場周邊吃飯、散步並看夜景。",lat:30.6573,lng:104.0658,type:"sight",days:[3],stay:"9/7 旅遊紀錄",icon:"sparkles"},
  {name:"寬窄巷子",area:"青羊區・長順街一帶",desc:"9/7 晚上實際加走的景點，已納入旅遊紀錄；9/10 不再重複安排。",lat:30.6695,lng:104.0590,type:"sight",days:[3],stay:"9/7 旅遊紀錄",icon:"camera"},
  {name:"三星堆博物館",area:"德陽廣漢・三星堆鎮",desc:"9/9 上午實際參觀，跟導覽看青銅縱目面具、大立人、金面具與青銅神樹。",lat:31.0059,lng:104.2195,type:"sight",days:[5],stay:"9/9 上午・旅遊紀錄",icon:"landmark"},
  {name:"成都IFS",area:"春熙路商圈",desc:"9/9 約 16:00 抵達；春熙路、太古里與 IFS 相鄰，先一起逛街吃晚餐，之後你留下自由逛。",lat:30.6543,lng:104.0815,type:"sight",days:[5],stay:"9/9 16:00 起・晚餐後自由逛",icon:"shopping-bag"},
  {name:"成都東站",area:"成華區",desc:"9/5 從這裡搭 C6362 前往黃龍九寨；9/7 搭 C5794 回到成都東。",lat:30.6289,lng:104.1403,type:"transport",days:[1,3],stay:"9/5 出發・9/7 返回",icon:"train-front"},
  {name:"黃龍九寨站",area:"松潘・川主寺",desc:"9/5 轉 11:40 接駁先遊黃龍；9/7 搭已購買的 C5794 於 13:08 回成都。",lat:32.6530,lng:103.6089,type:"transport",days:[1,3],stay:"接駁轉乘點",icon:"train-front"},
  {name:"Yuji 嶼季海韻酒店",area:"溝口彭豐村／天堂口",desc:"9/5、9/6 連住兩晚；三張單人床、三份早餐，步行約 10–15 分鐘到九寨溝景區入口。",lat:33.2676,lng:103.9188,type:"stay",days:[1,2,3],stay:"9/5 入住・9/7 退房・兩晚共 ¥475",icon:"bed-double"},
  {name:"九寨溝景區入口",area:"九寨溝縣",desc:"9/6 建議 07:45 抵達，依已選的 08:00–10:00 時段準備入園。",lat:33.2601,lng:103.9187,type:"sight",days:[2],stay:"完整一天",icon:"ticket-check"},
  {name:"五花海",area:"九寨溝・日則溝",desc:"九寨溝代表性海子之一；實際遊覽順序依景區觀光車調度。",lat:33.1599,lng:103.8794,type:"sight",days:[2],stay:"依觀光車安排",icon:"waves"},
  {name:"諾日朗中心站",area:"九寨溝・三條溝交會處",desc:"兩條上支線的午餐與換乘中心；不知道怎麼搭時，直接詢問穿制服的工作人員。",lat:33.16027,lng:103.910407,type:"transport",days:[2],stay:"11:30–12:30 午餐・換線",icon:"bus-front"},
  {name:"長海・五彩池",area:"九寨溝・則查洼溝",desc:"另一條上支線的兩個代表景點；搭觀光車為主，依現場分流決定先後。",lat:33.036228,lng:103.932113,type:"sight",days:[2],stay:"依觀光車安排",icon:"waves"},
  {name:"諾日朗瀑布",area:"九寨溝・諾日朗",desc:"兩條上支線完成後再看；爸媽累了可從諾日朗直接搭車往溝口。",lat:33.16552,lng:103.90513,type:"sight",days:[2],stay:"15:30 後・量力停留",icon:"waves"},
  {name:"黃龍風景區",area:"松潘縣",desc:"9/5 約 12:30 抵達、17:00 集合前往九寨溝；上行索道省力，重點看五彩池。",lat:32.7434,lng:103.8335,type:"sight",days:[1],stay:"約 4.5 小時・量力而為",icon:"mountain-snow"},
  {name:"都江堰景區",area:"都江堰市",desc:"9/8 套票 B 下午由專業導遊人工精講，重點看玉壘閣、二王廟、魚嘴、飛沙堰與寶瓶口。",lat:31.0045,lng:103.6050,type:"sight",days:[4],stay:"約 3 小時・門票包含",icon:"landmark"},
  {name:"南橋",area:"灌縣古城",desc:"9/8 套票 B 夜間自由活動區；觀看藍眼淚燈光、逛灌縣古城並視時間前往仰天窩。",lat:30.9949,lng:103.6162,type:"sight",days:[4],stay:"夜間約 2 小時",icon:"bridge"},
  {name:"青城山前山",area:"都江堰市",desc:"9/8 套票 B 上午由專業導遊人工講解，利用索道與觀光車節省體力；景區小交通另付。",lat:30.9000,lng:103.5703,type:"sight",days:[4],stay:"約 3–3.5 小時・門票包含",icon:"trees"},
  {name:"杜甫草堂",area:"青羊區・青華路 37 號",desc:"9/10 約 10:30 入館，走茅屋、詩史堂、工部祠與紅牆花徑主線；官方 17:00 停止售票。",lat:30.6607,lng:104.0282,type:"sight",days:[6],stay:"10:30–12:30",icon:"book-open"},
  {name:"人民公園",area:"青羊區・祠堂街",desc:"9/10 在園內吃鐘水餃，再到鶴鳴茶社喝蓋碗茶與散步，依本人安排待到 17:30。",lat:30.6579,lng:104.0559,type:"sight",days:[6],stay:"12:50–17:30",icon:"coffee"},
  {name:"望平街・猛追灣",area:"成華區・錦江北岸",desc:"9/10 約 18:05 抵達，先在濱水街區或香香巷吃晚餐，飯後短逛再開始夜遊。",lat:30.6616,lng:104.0980,type:"sight",days:[6],stay:"18:05–19:20",icon:"store"},
  {name:"安順廊橋",area:"錦江區・合江亭旁",desc:"9/10 由望平街經東門碼頭、合江亭步行抵達；不搭船也能看錦江與九眼橋夜景。",lat:30.6419,lng:104.0832,type:"sight",days:[6],stay:"19:20–21:00・可縮短",icon:"bridge"}
];

const readStoredValue=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const writeStoredValue=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{return false;}};
const readStoredJSON=(key,fallback)=>{try{const value=JSON.parse(readStoredValue(key,"null"));return value??fallback;}catch{return fallback;}};
const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const dayTypeLabels={arrival:"抵達日",move:"移動日",star:"山林景點日",hard:"高強度日",flex:"晚起慢遊日",city:"成都市區重點日",flight:"返程日"};
const tripDateKeys=itineraries.map(d=>`2026-${d.date.split("/").map(value=>value.padStart(2,"0")).join("-")}`);
const todayParts=new Intl.DateTimeFormat("en",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
const todayPart=type=>todayParts.find(part=>part.type===type)?.value;
const todayKey=`${todayPart("year")}-${todayPart("month")}-${todayPart("day")}`;
const matchedDay=tripDateKeys.indexOf(todayKey);
let activeDay=matchedDay>=0?matchedDay:0,mapFilter="all",mapDay=String(matchedDay>=0?matchedDay:0),mapQuery="",travelMap,markerLayer;
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
  qs("#dayOverview").innerHTML=`<div><span>${d.date} 星期${d.weekday}</span><h3>${d.title}</h3><div class="day-tags"><b>旅行紀錄</b>${sightCount?`<b>${sightCount} 個主要景點</b>`:""}</div></div><p>${d.record||d.note}</p>${d.lodging?`<div class="lodging-badge">${icon("bed-double")}<span>當晚住宿</span><strong>${d.lodging}</strong></div>`:""}`;
  timeline.innerHTML=d.items.map((item,i)=>`<article class="timeline-item" style="animation-delay:${i*60}ms"><time>${item[0]}</time><h3>${item[1]}</h3><p>${item[2]}</p>${mapPlaces.some(p=>p.name===item[3])?`<a href="https://uri.amap.com/search?keyword=${encodeURIComponent(item[3]+" 四川")}" target="_blank" rel="noreferrer">查看位置 ${icon("external-link")}</a>`:""}</article>`).join("");
  refreshIcons();
}
function routePlacesForDay(day){const result=[];itineraries[day].items.forEach(item=>{const p=mapPlaces.find(x=>x.name===item[3]);if(p&&!result.includes(p))result.push(p);});return result;}
function routeIndexForPlace(p){if(mapDay==="all")return -1;return routePlacesForDay(Number(mapDay)).findIndex(x=>x.name===p.name);}
function markerIcon(p){const order=routeIndexForPlace(p),daily=mapDay!=="all",markerText=daily?String(order+1):categoryGlyphs[p.type];return L.divIcon({className:`cq-marker ${p.type} ${daily?"daily":"overview"}`,html:`<div class="cq-marker-pin"><span>${markerText}</span></div><strong class="cq-marker-name">${p.name}</strong>`,iconSize:[38,38],iconAnchor:[19,36],popupAnchor:[0,-37]});}
function popupMarkup(p){return `<div class="map-popup"><span>${categoryLabels[p.type]} · ${p.area}</span><h3>${p.name}</h3><p>${p.desc}<br>${p.stay}</p><div><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(p.name+" 四川")}" target="_blank" rel="noreferrer">開啟導航 ${icon("external-link")}</a></div></div>`;}
function visiblePlaces(){const q=mapQuery.trim().toLocaleLowerCase("zh-Hant"),source=mapDay==="all"?mapPlaces:routePlacesForDay(Number(mapDay));return source.filter(p=>(mapFilter==="all"||p.type===mapFilter)&&(!q||`${p.name} ${p.area} ${p.desc}`.toLocaleLowerCase("zh-Hant").includes(q)));}
function renderMapContext(){
  const box=qs("#mapContext");
  if(mapDay==="all"){
    box.innerHTML=`<div class="map-context-title"><span>${icon("map")} 8 天全覽</span><strong>成都與川西主要地點</strong><small>先選日期查看當天順序，或依顏色辨認景點、交通與住宿。</small></div><div class="map-context-hint">${icon("mouse-pointer-click")} 點地圖標記或右側清單查看說明</div>`;
  }else{
    const dayNumber=Number(mapDay),d=itineraries[dayNumber],route=routePlacesForDay(dayNumber),sightCount=route.filter(p=>p.type==="sight").length;
    const routeNote=dayNumber===2?"兩條上支線都在諾日朗轉換，這是九寨溝當天最重要的換乘點。":dayNumber===7?"上午在成都自由活動；爸媽前往 TFU T1 後，三人的四川行程結束。":`${route.length} 個停靠點 · ${sightCount} 個主要景點${d.lodging?` · 這晚住 ${d.lodging}`:""}`;
    box.innerHTML=`<div class="map-context-title"><span>D${dayNumber+1} · ${d.date} 星期${d.weekday} · 旅行紀錄</span><strong>${d.title}</strong><small>${routeNote}</small></div><div class="map-route-chain">${route.map((p,i)=>`<button type="button" data-map-context-place="${p.name}"><b>${i+1}</b><span>${p.name}</span></button>${i<route.length-1?icon("chevron-right"):""}`).join("")}</div>`;
  }
  refreshIcons();
}
function initMap(){
  if(travelMap)return;
  if(!window.L){qs("#travelMap").innerHTML='<div class="map-empty"><strong>地圖載入失敗</strong><span>請確認網路後重新整理。</span></div>';return;}
  travelMap=L.map("travelMap",{zoomControl:false,scrollWheelZoom:true,tap:false}).setView([31.2,104.2],7);
  const tiles=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',crossOrigin:true});
  tiles.addTo(travelMap);
  L.control.zoom({position:"bottomright"}).addTo(travelMap);markerLayer=L.layerGroup().addTo(travelMap);
  qsa("#travelMap .leaflet-control-attribution a").forEach(a=>{a.target="_blank";a.rel="noreferrer";});
  travelMap.on("popupopen",refreshIcons);
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
  markerLayer.clearLayers();mapMarkers=new Map();
  visible.forEach(p=>{const m=L.marker([p.lat,p.lng],{icon:markerIcon(p),title:p.name,riseOnHover:true}).bindPopup(popupMarkup(p));m.on("click",()=>setActiveList(p.name));m.addTo(markerLayer);mapMarkers.set(p.name,m);});
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
function updateCountdown(){const countdown=qs("#countdown");if(!countdown)return;const days=Math.ceil((new Date("2026-09-04T00:00:00+08:00")-new Date())/86400000);countdown.textContent=days>0?`倒數 ${days} 天`:days===0?"今天出發":"旅程已開始";}
dayTabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)selectDay(b.dataset.day);});
qs("#allDaysGrid")?.addEventListener("click",e=>{const b=e.target.closest("[data-overview-day]");if(b)selectDay(b.dataset.overviewDay,true);});
qs("#mobileDaySelect").addEventListener("change",e=>selectDay(e.target.value));
qs("#mapDaySelect").addEventListener("change",e=>setMapDay(e.target.value));
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
function setParentMode(on){document.body.classList.toggle("parent-mode",on);qs("#parentMode").classList.toggle("active",on);qs("#parentMode").setAttribute("aria-pressed",String(on));writeStoredValue("sichuan-parent-mode",String(on));}
qs("#parentMode").addEventListener("click",()=>{const on=!document.body.classList.contains("parent-mode");setParentMode(on);showToast(on?"已開啟大字閱讀":"已關閉大字閱讀");});
function updateReadiness(){const checks=qsa("[data-check]"),done=checks.filter(i=>i.checked).length,total=checks.length,pct=total?Math.round(done/total*100):0;const percent=qs("#readinessPercent"),text=qs("#readinessText"),ring=qs("#readinessRing");if(percent)percent.textContent=`${pct}%`;if(text)text.textContent=`${done}／${total} 已完成`;if(ring)ring.style.setProperty("--progress",`${pct*3.6}deg`);}
const savedCheckState=readStoredJSON("sichuan-checklist",{}),checkState=savedCheckState&&typeof savedCheckState==="object"&&!Array.isArray(savedCheckState)?savedCheckState:{};qsa("[data-check]").forEach(i=>{i.checked=!!checkState[i.dataset.check];i.addEventListener("change",()=>{checkState[i.dataset.check]=i.checked;writeStoredValue("sichuan-checklist",JSON.stringify(checkState));updateReadiness();});});

qs("#shareTrip")?.addEventListener("click",async()=>{const url=`${location.origin}${location.pathname}`;const data={title:"四川八日回憶｜成都・九寨溝",text:"2026/09/04—09/11 一家三口的四川旅行紀錄",url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(url);showToast("公開網址已複製");}}catch(error){if(error?.name!=="AbortError")showToast("暫時無法分享，請複製網址列");}});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
qs("#installTrip")?.addEventListener("click",async()=>{if(matchMedia("(display-mode: standalone)").matches)return showToast("已經加入手機桌面");if(deferredInstallPrompt){await deferredInstallPrompt.prompt();deferredInstallPrompt=null;return;}showToast("iPhone：按分享，再選「加入主畫面」");});
qsa('a[href="#map"]').forEach(a=>a.addEventListener("click",()=>{qs("#mapDetails").open=true;refreshMapLayout();}));
qs("#mapDetails")?.addEventListener("toggle",e=>{if(e.currentTarget.open)refreshMapLayout();});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=59").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(readStoredValue("sichuan-parent-mode","false")==="true");renderAllDays();renderDays();updateReadiness();updateCountdown();refreshIcons();renderMapData(false);
