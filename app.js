const itineraries = [
  { date:"9/4", weekday:"五", title:"抵達成都", city:"成都", lodging:"成都", tone:"arrival", note:"14:40 抵達 CTU。第一天只熟悉飯店周邊，晚餐與逛街依當天體力彈性取捨。", items:[
    ["14:40","抵達成都雙流機場 CTU","領行李後前往飯店；先休息、補水，不急著開始跑景點。","成都雙流機場"],
    ["17:30","飯店 Check-in","建議住春熙路／天府廣場一帶，後續進出成都東站與市區都方便。","成都住宿區"],
    ["19:00","春熙路・太古里・IFS","三處相鄰，依體力慢慢走；累了就在附近吃飯回飯店。","成都IFS"]
  ]},
  { date:"9/5", weekday:"六", title:"成都 → 九寨溝", city:"移動日", lodging:"九寨溝", tone:"move", note:"純移動日，正式景點為 0。動車與接駁之間保留緩衝，抵達後只辦入住、吃晚餐；還有精神再到溝口附近短暫散步。", items:[
    ["早上","前往成都東站","至少提前 45–60 分鐘到站，證件與車票截圖放在手機容易找到的位置。","成都東站"],
    ["動車","成都東 → 黃龍九寨","實際車次以 12306 開售後為準，不在網站寫死可能調整的時刻。","黃龍九寨站"],
    ["下午","接駁前往九寨溝","車站到九寨溝仍有公路段；預先訂好直通車、飯店接駁或包車。","九寨溝住宿區"],
    ["抵達後","入住、晚餐、自由休息","今天不排正式景點。若提早抵達且精神還好，只在溝口附近散步、買隔天補給，不另外叫車跑行程。","九寨溝住宿區"]
  ]},
  { date:"9/6", weekday:"日", title:"九寨溝完整一天", city:"九寨溝", lodging:"九寨溝", tone:"star", note:"本次旅行第一個重點日。8:00 開始入園，一整天只給九寨溝；¥190 門票＋¥90 觀光車。", items:[
    ["07:20","抵達九寨溝遊客中心","帶有效證件、早餐吃飽、穿分層衣物；盡量排在第一批入園。","九寨溝景區入口"],
    ["08:00","全天遊覽九寨溝","搭觀光車分段遊覽日則溝、則查洼溝與樹正溝；不追求每個點都走到。","五花海"],
    ["18:00 前","離開景區回飯店","景區 18:00 閉園。晚餐後整理隔天黃龍的保暖衣物與行李。","九寨溝景區入口"]
  ]},
  { date:"9/7", weekday:"一", title:"九寨溝 → 黃龍 → 成都", city:"高強度移動日", lodging:"成都", tone:"hard", note:"全程最累的一天。早出發、黃龍量力而為，再到黃龍九寨或松潘搭動車回成都；晚上完全留白。", items:[
    ["清晨","九寨溝出發","包車／接駁時間需反推黃龍停留與動車時間，行李全程隨車。","九寨溝住宿區"],
    ["上午","黃龍風景區","高海拔不快走。可依現場狀況使用索道與接駁，任何人不舒服就縮短路線。","黃龍風景區"],
    ["下午","前往車站搭動車","黃龍九寨站或松潘站擇一，以當日班次與接駁最順者為準。","松潘站"],
    ["晚上","回成都，只休息","抵達飯店後不排宵夜、不逛街，讓體力完整恢復。","成都住宿區"]
  ]},
  { date:"9/8", weekday:"二", title:"都江堰彈性日", city:"都江堰", lodging:"成都", tone:"flex", note:"戶外但可自由縮短。累的話晚點出發、只看核心區，或提早回成都休息。", items:[
    ["09:30","成都出發","依體力選動車或包車；不追求早起，先讓前一天的疲勞恢復。","成都住宿區"],
    ["11:00","都江堰景區","魚嘴、飛沙堰、寶瓶口擇重點走；多用景區交通，少走回頭路。","都江堰景區"],
    ["16:00","返回成都","若已經疲累就更早走，晚上只在飯店附近用餐。","成都住宿區"]
  ]},
  { date:"9/9", weekday:"三", title:"三星堆完整一天", city:"廣漢", lodging:"成都", tone:"star", note:"第二個重點日。三星堆獨立安排，不與樂山混搭；預留足夠時間慢慢看展。", items:[
    ["08:00","從成都出發","依預約時段選動車＋接駁或包車，提前準備入館證件。","成都住宿區"],
    ["09:30","三星堆博物館","新館展品密度高，先看核心展廳，中間安排坐下休息與午餐。","三星堆博物館"],
    ["16:30","回成都","不再加樂山或遠程景點；若尚有體力，晚餐後飯店附近散步。","成都住宿區"]
  ]},
  { date:"9/10", weekday:"四", title:"成都完整一天", city:"成都", lodging:"成都", tone:"panda", note:"熊貓基地早上優先，下午與晚上只選最想去的區域；人民公園、寬窄巷子、錦里與武侯祠不必全收。", items:[
    ["07:30","成都熊貓基地","越早越有機會看到熊貓活動；園區大，先選必看區域與接駁方式。","成都熊貓基地"],
    ["13:30","人民公園／寬窄巷子","想放鬆就人民公園喝茶；想逛街再去寬窄巷子，兩者可二選一。","人民公園"],
    ["17:30","武侯祠／錦里","兩處相鄰。依體力取捨，晚上提早回飯店整理行李。","武侯祠"]
  ]},
  { date:"9/11", weekday:"五", title:"返程・分開", city:"成都", lodging:"—", tone:"flight", note:"15:50 CTU → 澳門 → 高雄。上午不排遠程景點，預留行李、退房與跨境航班報到時間。", items:[
    ["上午","早餐與整理行李","只在飯店周邊活動，確認護照、轉機文件、行李與登機資訊。","成都住宿區"],
    ["12:30 前","前往成都雙流機場","建議至少提前 3 小時抵達；實際航廈與交通時間以前一晚查詢為準。","成都雙流機場"],
    ["15:50","CTU → 澳門 → 高雄","返程航班。轉機過程留意登機門、行李是否直掛與下一段航班狀態。","成都雙流機場"]
  ]}
];

const dayGuides = [
  {effort:"輕鬆",summary:"機場 → 飯店 → 春熙路商圈。抵達日的原則是先安頓，再決定要逛多少。",facts:[
    ["car-taxi-front","交通方式","CTU 到市區帶行李時優先叫車；車程依晚高峰而變，出發後把車牌與司機資訊截圖保存。"],
    ["utensils","吃飯安排","飯店放好行李後再吃。春熙路、太古里、IFS 餐廳密集，不必為名店排長隊。"],
    ["armchair","休息地點","太古里與 IFS 內都有室內座位、洗手間與冷氣；累了就直接回飯店。"],
    ["backpack","今天要帶","護照／台胞證、手機、行李牌；下車前一起清點件數。"]
  ],spot:["春熙路・太古里・IFS","這是成都最集中的現代商圈。春熙路適合逛街、太古里是開放式街區、IFS 最醒目的是屋頂熊貓；三處相連，不需要分別叫車。"]},
  {effort:"移動為主",summary:"飯店 → 成都東站 → 動車 → 黃龍九寨站 → 九寨溝飯店。今天不安排景點。",facts:[
    ["train-front","乘車順序","前一晚叫飯店確認去成都東站所需時間；抵站後依 12306 顯示的檢票口進站。"],
    ["bus-front","接駁重點","黃龍九寨站到九寨溝仍有一段公路。出發前把司機姓名、電話、車牌與集合點截圖。"],
    ["sandwich","吃飯安排","早餐在飯店吃飽；另外帶水與簡單乾糧，避免轉乘途中臨時找不到餐食。"],
    ["badge-alert","不要硬排","如果接駁晚到，只做入住與晚餐。九寨溝隔天要走整日，今晚越早休息越好。"]
  ],spot:["川青鐵路","成都東到黃龍九寨已可搭動車，但班次會調整。黃龍九寨站是鐵路接駁點，不是九寨溝景區門口；出站後還要換車。"]},
  {effort:"中高",summary:"早到遊客中心 → 觀光車進溝 → 分區遊覽 → 18:00 前出園。不要自行規劃死板順序。",facts:[
    ["ticket-check","票券與入園","2026 旺季門票 ¥190＋觀光車 ¥90；全員帶購票時使用的有效證件原件。"],
    ["bus-front","怎麼遊覽","進園後先搭觀光車，當天由景區依人流調度去左線或右線；下車後再沿棧道看景。"],
    ["footprints","少走一點的方法","每一區挑代表景點，不必站站下車。疲累時多搭一站觀光車、少走棧道。"],
    ["utensils","午餐與補給","園內用餐選擇有限，帶水、巧克力或餅乾；午餐避開最尖峰時間。"],
    ["cloud-rain","衣物與安全","早晚涼、日照強，採洋蔥式穿法。雨具、防曬都帶；全程不離開棧道。"]
  ],spot:["九寨溝看什麼","重點不是跑完所有海子，而是看翠海、瀑布與森林層次。五花海色彩最豐富，諾日朗瀑布氣勢大，樹正群海適合從觀光車與棧道交替欣賞。"]},
  {effort:"最高",summary:"九寨溝飯店 → 黃龍 → 黃龍九寨／松潘站 → 成都飯店。所有時間倒推回程動車。",facts:[
    ["mountain-snow","高原原則","黃龍海拔較高：慢走、不跑、不喝酒。頭痛、噁心、胸悶或明顯不適就停止上行並求助。"],
    ["tram-front","省體力走法","是否搭索道依當天開放狀況決定；以少爬坡為優先，不勉強走完整圈。"],
    ["clock-3","時間底線","先訂好回程動車，再反推離開景區時間；車站接駁至少保留塞車與進站緩衝。"],
    ["luggage","行李安排","早上退房後行李隨接駁車，下車前確認護照、票券與行李件數。"],
    ["bed-double","晚上安排","回成都只入住、洗澡、睡覺。不要再加火鍋、夜市或逛街。"]
  ],spot:["黃龍看什麼","黃龍以層層鈣華彩池、雪山、峽谷與森林聞名。最具代表性的是五彩池，但不必以抵達最高點為唯一目標；舒服地看風景比完成路線重要。"]},
  {effort:"中等可縮短",summary:"睡飽再出發 → 都江堰核心區 → 下午回成都。前一天累就縮成半日。",facts:[
    ["car-taxi-front","交通選擇","多人同行最省心是包車／叫車；若搭動車，還要計算成都端與都江堰端轉乘。"],
    ["route","建議順序","從較高處往低處走通常較省力；現場依入口與景區交通，選魚嘴、飛沙堰、寶瓶口三個核心。"],
    ["footprints","體力管理","景區橋樑與步道多，不走安瀾索橋也不影響理解水利工程；可利用觀光車減少步行。"],
    ["utensils","吃飯安排","午餐不要排太晚。若已經疲累，吃完就回成都，不再加青城山。"]
  ],spot:["都江堰看什麼","兩千多年前建成、至今仍在運作的水利工程。魚嘴負責分水、飛沙堰協助排沙洩洪、寶瓶口控制進水；理解這三處，就看懂都江堰。"]},
  {effort:"中等・室內",summary:"成都 → 三星堆博物館 → 成都。展品很多，只看三星堆，不再跨城加景點。",facts:[
    ["ticket-check","預約入館","依官方放票批次預約，全員帶預約時使用的有效證件；成功頁面先截圖。"],
    ["headphones","參觀方法","先租導覽或使用官方解說，從祭祀坑背景開始，再看青銅大面具、神樹與金杖。"],
    ["armchair","休息節奏","每看完一個主要展區就坐下休息。博物館日不是步數競賽，不必逐字讀完每塊說明。"],
    ["utensils","午餐安排","在館內或附近解決，預留完整午休；下午再補上午沒看完的核心展品。"]
  ],spot:["三星堆看什麼","三星堆最迷人的是古蜀文明獨特的青銅造型。青銅大立人、青銅神樹、金杖與大型面具是理解展覽的核心，先看造型，再聽它與祭祀文化的關係。"]},
  {effort:"中高・可取捨",summary:"早上熊貓基地 → 下午人民公園／寬窄巷子二選一 → 傍晚武侯祠／錦里。",facts:[
    ["clock-3","熊貓要早去","9 月上午票 07:30–12:00 可入園。熊貓怕熱，越早越可能看到活動；可提前 14 天預約。"],
    ["bus-front","園內省力","基地很大，園內觀光車目前 ¥30／人。遊客中心有輪椅、拐杖與雨傘等便民借用。"],
    ["badge-check","長者規則","依目前官方規則，60 歲以上長者可免預約，持本人有效證件入園；出發前仍需再核對公告。"],
    ["coffee","下午二選一","想休息就人民公園喝茶；想逛街才去寬窄巷子，不要兩邊都趕。"],
    ["luggage","晚上任務","武侯祠與錦里相鄰，逛到累就回飯店；今晚完成隔天返程行李。"]
  ],spot:["熊貓基地看什麼","先看成年大熊貓與幼年熊貓活動區，動物休息時就換區，不在一處久等。熊貓塔不是必去；若有高血壓、心臟病或身體不適，官方也建議不要登塔。"]},
  {effort:"輕鬆但時間重要",summary:"飯店附近 → 退房 → 12:30 前往 CTU → 15:50 飛澳門轉高雄。",facts:[
    ["badge-check","文件放同一包","護照／台胞證、登機資料、澳門轉機文件與緊急聯絡方式放在隨身包，不要托運。"],
    ["plane","機場時間","跨境航班建議至少提前 3 小時抵達；前一晚確認 CTU 航廈與即時交通。"],
    ["luggage","行李確認","確認是否直掛高雄、每段托運限額與行動電源規則；掛行李後拍行李條。"],
    ["message-circle","分開後聯絡","約好三個報平安節點：到 CTU、到澳門、抵達高雄；手機漫遊與充電要先準備。"]
  ],spot:["澳門轉機","下機後跟著 Transfer／轉機標示走，不要直接前往入境。先看下一段登機門與時間；若行李不是直掛，依航空公司指示提領並重新辦理。"]}
];

const dayFallbacks=[
  "航班延誤或抵達後太累，就只辦入住與吃晚餐；春熙路留到 9/10 再決定。",
  "動車或接駁延誤時，直接前往九寨溝飯店，不增加沿途停靠，也不安排晚間逛街。",
  "遇雨就提高觀光車比例，只選五花海、諾日朗與樹正群海等代表區域，不追求走完整條棧道。",
  "若高原不適或回程時間不足，縮短黃龍或直接前往車站；返成都動車優先於景點完整度。",
  "下雨或前幾天太累，可以晚出發、只看魚嘴與寶瓶口，或改成成都休息日。",
  "若未搶到三星堆票，保留成都自由日，不臨時購買來源不明的高價票券。",
  "熊貓基地結束後只選人民公園或武侯祠其中一區；人潮太多就提早離開，不硬湊所有景點。",
  "航班日不安排遠程備案；若時間有餘，只在飯店附近吃飯、整理行李與確認報到櫃檯。"
];

const mapPlaces = [
  {name:"成都雙流機場",area:"成都・雙流",desc:"9/4 抵達與 9/11 返程使用的機場；務必再次確認航廈。",lat:30.5785,lng:103.9471,type:"transport",days:[0,7],stay:"CTU 機場",icon:"plane"},
  {name:"成都住宿區",area:"春熙路／天府廣場",desc:"成都五晚的建議住宿核心區，前往成都東站與市區景點方便。",lat:30.6570,lng:104.0737,type:"stay",days:[0,3,4,5,6,7],stay:"成都共 5 晚",icon:"bed-double"},
  {name:"成都IFS",area:"春熙路商圈",desc:"春熙路、太古里與 IFS 相鄰，抵達第一晚依體力散步。",lat:30.6543,lng:104.0815,type:"sight",days:[0],stay:"9/4 晚間",icon:"shopping-bag"},
  {name:"成都東站",area:"成華區",desc:"9/5 前往黃龍九寨的動車起點；車次以 12306 開售後為準。",lat:30.6289,lng:104.1403,type:"transport",days:[1,3],stay:"至少提早 45–60 分鐘",icon:"train-front"},
  {name:"黃龍九寨站",area:"松潘・川主寺",desc:"川青鐵路車站，可轉接駁前往九寨溝或黃龍。",lat:32.6530,lng:103.6089,type:"transport",days:[1,3],stay:"接駁轉乘點",icon:"train-front"},
  {name:"松潘站",area:"松潘縣",desc:"9/7 回成都的備選車站，依班次與黃龍接駁安排擇一。",lat:32.6367,lng:103.5983,type:"transport",days:[3],stay:"回程備選",icon:"train-front"},
  {name:"九寨溝住宿區",area:"漳扎鎮／溝口",desc:"9/5、9/6 連住兩晚；優先選有車站或景區接送的住宿。",lat:33.2317,lng:103.9114,type:"stay",days:[1,2,3],stay:"九寨溝共 2 晚",icon:"bed-double"},
  {name:"九寨溝景區入口",area:"九寨溝縣",desc:"9/6 建議 07:20 左右抵達，準備 08:00 第一批入園。",lat:33.2601,lng:103.9187,type:"sight",days:[2],stay:"完整一天",icon:"ticket-check"},
  {name:"五花海",area:"九寨溝・日則溝",desc:"九寨溝代表性海子之一；實際遊覽順序依景區觀光車調度。",lat:33.1599,lng:103.8794,type:"sight",days:[2],stay:"依觀光車安排",icon:"waves"},
  {name:"黃龍風景區",area:"松潘縣",desc:"9/7 高海拔重點行程；量力步行並預留前往車站時間。",lat:32.7434,lng:103.8335,type:"sight",days:[3],stay:"半天・量力而為",icon:"mountain-snow"},
  {name:"都江堰景區",area:"都江堰市",desc:"9/8 彈性戶外日；以寶瓶口、飛沙堰、魚嘴等核心區為主。",lat:31.0045,lng:103.6050,type:"sight",days:[4],stay:"半日到一日",icon:"landmark"},
  {name:"三星堆博物館",area:"廣漢市",desc:"9/9 獨立完整一天，不與樂山混搭，慢慢看核心展廳。",lat:31.0067,lng:104.2192,type:"sight",days:[5],stay:"建議 5–6 小時",icon:"landmark"},
  {name:"成都熊貓基地",area:"成華區",desc:"9/10 早上優先，越早越有機會看到熊貓活動。",lat:30.7381,lng:104.1467,type:"sight",days:[6],stay:"建議 3–4 小時",icon:"trees"},
  {name:"人民公園",area:"青羊區",desc:"喝茶、休息與感受成都日常；和寬窄巷子可依體力二選一。",lat:30.6575,lng:104.0570,type:"sight",days:[6],stay:"建議 1–2 小時",icon:"coffee"},
  {name:"寬窄巷子",area:"青羊區",desc:"9/10 下午備選；若熊貓基地後疲累，可直接略過。",lat:30.6696,lng:104.0503,type:"sight",days:[6],stay:"彈性備選",icon:"store"},
  {name:"武侯祠",area:"武侯區",desc:"與錦里相鄰，9/10 傍晚依體力選擇參觀。",lat:30.6455,lng:104.0495,type:"sight",days:[6],stay:"建議 1.5 小時",icon:"landmark"},
  {name:"錦里",area:"武侯區",desc:"晚間備選老街，前一晚要整理行李，不必逛到太晚。",lat:30.6450,lng:104.0479,type:"sight",days:[6],stay:"彈性備選",icon:"store"}
];

const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const dayTypeLabels={arrival:"抵達日",move:"純移動日",star:"重點景點日",hard:"高強度日",flex:"彈性戶外日",panda:"城市景點日",flight:"返程日"};
const driverDestinations=[
  {day:"9/4、9/11",name:"成都双流国际机场",note:"成都雙流機場 CTU"},
  {day:"9/5",name:"成都东站",note:"搭乘前往黃龍九寨方向的動車"},
  {day:"9/5—9/7",name:"九寨沟风景名胜区游客中心",note:"九寨溝景區入口／溝口"},
  {day:"9/7",name:"黄龙国家级风景名胜区",note:"黃龍景區遊客中心"},
  {day:"9/9",name:"三星堆博物馆",note:"四川省廣漢市向新路"},
  {day:"9/10",name:"成都大熊猫繁育研究基地南大门",note:"熊貓基地南大門；出發前再確認入園門區"}
];
const saved=new Set(JSON.parse(localStorage.getItem("sichuan-saved")||"[]"));
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
  qs("#allDaysGrid").innerHTML=itineraries.map((d,i)=>`<button type="button" class="overview-day ${i===activeDay?"active":""}" data-overview-day="${i}"><span>D${i+1} · ${d.date} 星期${d.weekday}</span><strong>${d.title}</strong><small>${icon("bed-double")} 今晚住 ${d.lodging}</small></button>`).join("");
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
  const large=qs("#parentGuide")?.classList.contains("large-guide");
  qs("#parentGuide").className=`parent-guide-card${large?" large-guide":""}`;
  qs("#parentGuide").innerHTML=`
    <div class="guide-summary"><div><span>DAY ${activeDay+1} · ${day.date} 星期${day.weekday}</span><h3>${day.title}</h3><p>${guide.summary}</p></div><div class="effort-pill"><small>今日體力</small><strong>${guide.effort}</strong></div></div>
    <div class="guide-body">
      <div class="run-steps"><h3 class="guide-subheading">一步一步怎麼跑</h3>${day.items.map((item,i)=>`<div class="run-step"><span class="run-step-num">${i+1}</span><div class="run-step-copy"><span>${item[0]}</span><h4>${item[1]}</h4><p>${item[2]}</p><a href="#map" data-focus-place="${item[3]}">打開位置 ${icon("navigation")}</a></div></div>`).join("")}</div>
      <aside class="guide-sidebar"><h3 class="guide-subheading">今天要先確認</h3><div class="guide-facts">${guide.facts.map(f=>`<div class="guide-fact">${icon(f[0])}<div><strong>${f[1]}</strong><span>${f[2]}</span></div></div>`).join("")}</div><div class="spot-explainer"><span>景點重點</span><h4>${guide.spot[0]}</h4><p>${guide.spot[1]}</p></div><div class="plan-b"><span>${icon("route-off")} 臨時備案</span><p>${dayFallbacks[activeDay]}</p></div></aside>
    </div>`;
  refreshIcons();
}
function toggleSaved(name){saved.has(name)?(saved.delete(name),showToast(`已移除「${name}」`)):(saved.add(name),showToast(`已收藏「${name}」`));localStorage.setItem("sichuan-saved",JSON.stringify([...saved]));qs("#savedCount").textContent=saved.size;renderMapData(false);renderDrawer();}
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
  if(!window.L){qs("#travelMap").innerHTML='<div class="map-empty"><strong>地圖載入失敗</strong><span>請確認網路後重新整理。</span></div>';return;}
  travelMap=L.map("travelMap",{zoomControl:false,scrollWheelZoom:true,tap:false}).setView([31.2,104.2],7);
  const tiles=L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',crossOrigin:true});
  tiles.addTo(travelMap);
  L.control.zoom({position:"bottomright"}).addTo(travelMap);markerLayer=L.layerGroup().addTo(travelMap);routeLayer=L.layerGroup().addTo(travelMap);
  qsa("#travelMap .leaflet-control-attribution a").forEach(a=>{a.target="_blank";a.rel="noreferrer";});
  travelMap.on("popupopen",()=>{refreshIcons();const b=qs("[data-popup-save]");if(b)b.addEventListener("click",()=>toggleSaved(b.dataset.popupSave),{once:true});});
  const resizeMap=()=>travelMap?.invalidateSize({pan:false});
  if("ResizeObserver" in window)new ResizeObserver(resizeMap).observe(qs("#travelMap"));
  window.addEventListener("orientationchange",()=>setTimeout(resizeMap,250));
  window.addEventListener("pageshow",()=>setTimeout(resizeMap,120));
  setTimeout(resizeMap,120);renderMapData(true);
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
  if(fit)fitVisibleMap();
}
function renderMapList(list){
  const ordered=mapDay==="all"?list:[...list].sort((a,b)=>{const ai=routeIndexForPlace(a),bi=routeIndexForPlace(b);return (ai<0?99:ai)-(bi<0?99:bi);});
  qs("#mapResultCount").textContent=mapDay==="all"?`${ordered.length} 個地點`:`D${Number(mapDay)+1} · ${ordered.length} 個地點`;
  qs("#mapEmpty").hidden=!!ordered.length;qs("#mapPlaceList").hidden=!ordered.length;
  qs("#mapPlaceList").innerHTML=ordered.map(p=>{const order=routeIndexForPlace(p),badge=mapDay==="all"?categoryGlyphs[p.type]:(order>=0?String(order+1):"備");return `<button type="button" class="map-list-item ${order<0&&mapDay!=="all"?"alternate":""}" data-map-place="${p.name}"><span class="map-list-icon ${p.type}">${badge}</span><span class="map-list-copy"><span class="map-list-meta">${categoryLabels[p.type]} · ${p.area}</span><strong>${p.name}</strong><small>${p.desc}</small><em>${icon("clock-3")} ${p.stay}</em></span><span class="map-list-day">${mapDay==="all"?p.days.map(d=>`D${d+1}`).join("/"):(order>=0?`第 ${order+1} 站`:"備選")}</span></button>`;}).join("");refreshIcons();
}
function setActiveList(name){qsa(".map-list-item").forEach(x=>x.classList.toggle("active",x.dataset.mapPlace===name));const a=qsa(".map-list-item").find(x=>x.dataset.mapPlace===name);if(a)a.scrollIntoView({block:"nearest",behavior:"smooth"});}
function fitVisibleMap(){if(!travelMap)return;const p=visiblePlaces();if(!p.length)return;p.length===1?travelMap.setView([p[0].lat,p[0].lng],14):travelMap.fitBounds(p.map(x=>[x.lat,x.lng]),{padding:[35,35],maxZoom:13});}
function focusPlace(name){const p=mapPlaces.find(x=>x.name===name);if(!p)return;mapFilter="all";mapDay="all";mapQuery="";qs("#mapSearch").value="";qs("#mapDaySelect").value="all";qsa("[data-map-filter]").forEach(b=>b.classList.toggle("active",b.dataset.mapFilter==="all"));qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay==="all"));renderMapData(false);setTimeout(()=>{if(travelMap){travelMap.invalidateSize();travelMap.setView([p.lat,p.lng],14,{animate:true});mapMarkers.get(name)?.openPopup();setActiveList(name);}},420);}
function setMapDay(day){mapDay=String(day);qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));qs("#mapDaySelect").value=mapDay;renderMapData(true);}
function updateCountdown(){const days=Math.ceil((new Date("2026-09-04T00:00:00+08:00")-new Date())/86400000);qs("#countdown").textContent=days>0?`倒數 ${days} 天`:days===0?"今天出發":"旅程已開始";}
function renderDrawer(){const list=[...saved].map(n=>mapPlaces.find(p=>p.name===n)).filter(Boolean);qs("#drawerEmpty").hidden=!!list.length;qs("#drawerSaved").hidden=!list.length;qs("#drawerSaved").innerHTML=list.map(p=>`<div class="drawer-place"><div><strong>${p.name}</strong><span>${p.area} · ${p.stay}</span></div><button type="button" data-drawer-remove="${p.name}" aria-label="移除${p.name}">${icon("x")}</button></div>`).join("");refreshIcons();}
function openDrawer(){renderDrawer();qs("#drawerBackdrop").hidden=false;requestAnimationFrame(()=>qs("#drawerBackdrop").classList.add("show"));qs("#tripDrawer").classList.add("open");qs("#tripDrawer").setAttribute("aria-hidden","false");document.body.classList.add("drawer-open");}
function closeDrawer(){qs("#drawerBackdrop").classList.remove("show");qs("#tripDrawer").classList.remove("open");qs("#tripDrawer").setAttribute("aria-hidden","true");document.body.classList.remove("drawer-open");setTimeout(()=>qs("#drawerBackdrop").hidden=true,260);}

dayTabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)selectDay(b.dataset.day);});
qs("#allDaysGrid").addEventListener("click",e=>{const b=e.target.closest("[data-overview-day]");if(b)selectDay(b.dataset.overviewDay,true);});
qs("#mobileDaySelect").addEventListener("change",e=>selectDay(e.target.value));
qs("#mapDaySelect").addEventListener("change",e=>setMapDay(e.target.value));
document.addEventListener("click",e=>{const a=e.target.closest("[data-focus-place]");if(a)focusPlace(a.dataset.focusPlace);});
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
qs("#clearMapSearch").addEventListener("click",()=>{qs("#mapSearch").value="";mapQuery="";renderMapData(true);qs("#mapSearch").focus();});qs("#fitMap").addEventListener("click",fitVisibleMap);
qs(".saved-button").addEventListener("click",openDrawer);qs("#closeDrawer").addEventListener("click",closeDrawer);qs("#drawerBackdrop").addEventListener("click",closeDrawer);document.addEventListener("keydown",e=>{if(e.key==="Escape")closeDrawer();});
qs("#drawerSaved").addEventListener("click",e=>{const b=e.target.closest("[data-drawer-remove]");if(b)toggleSaved(b.dataset.drawerRemove);});
qs("#clearSaved").addEventListener("click",()=>{if(!saved.size)return showToast("收藏目前是空的");saved.clear();localStorage.setItem("sichuan-saved","[]");qs("#savedCount").textContent="0";renderMapData(false);renderDrawer();showToast("已清空收藏");});
qs("#copyPlan").addEventListener("click",async()=>{const list=saved.size?[...saved].map(n=>`・${n}`).join("\n"):"・尚未收藏地點";const text=`四川八日行程｜成都・九寨溝｜2026/09/04–09/11\n\n收藏地點\n${list}`;try{await navigator.clipboard.writeText(text);showToast("旅行摘要已複製");}catch{showToast("瀏覽器未允許複製");}});
qs("#copyDayGuide").addEventListener("click",async()=>{
  const day=itineraries[activeDay],guide=dayGuides[activeDay];
  const steps=day.items.map((item,i)=>`${i+1}. ${item[0]}｜${item[1]}\n${item[2]}`).join("\n\n");
  const facts=guide.facts.map(f=>`・${f[1]}：${f[2]}`).join("\n");
  const text=`DAY ${activeDay+1}｜${day.date} 星期${day.weekday}｜${day.title}\n今晚住宿：${day.lodging}\n體力：${guide.effort}\n\n${guide.summary}\n\n${steps}\n\n當日提醒\n${facts}\n\n${guide.spot[0]}\n${guide.spot[1]}`;
  try{await navigator.clipboard.writeText(text);showToast("今天的帶路內容已複製");}catch{showToast("瀏覽器未允許複製");}
});
qs("#toggleLargeGuide").addEventListener("click",()=>{qs("#parentGuide").classList.toggle("large-guide");showToast(qs("#parentGuide").classList.contains("large-guide")?"帶路文字已放大":"帶路文字已恢復");});
function setParentMode(on){document.body.classList.toggle("parent-mode",on);qs("#parentMode").classList.toggle("active",on);qs("#parentMode").setAttribute("aria-pressed",String(on));localStorage.setItem("sichuan-parent-mode",String(on));}
qs("#parentMode").addEventListener("click",()=>{const on=!document.body.classList.contains("parent-mode");setParentMode(on);showToast(on?"已開啟大字閱讀":"已關閉大字閱讀");});
function updateReadiness(){const checks=qsa("[data-check]"),done=checks.filter(i=>i.checked).length,total=checks.length,pct=total?Math.round(done/total*100):0;qs("#readinessPercent").textContent=`${pct}%`;qs("#readinessText").textContent=`${done}／${total} 已完成`;qs("#readinessRing").style.setProperty("--progress",`${pct*3.6}deg`);}
const checkState=JSON.parse(localStorage.getItem("sichuan-checklist")||"{}");qsa("[data-check]").forEach(i=>{i.checked=!!checkState[i.dataset.check];i.addEventListener("change",()=>{checkState[i.dataset.check]=i.checked;localStorage.setItem("sichuan-checklist",JSON.stringify(checkState));updateReadiness();});});

function renderDriverCards(){qs("#driverGrid").innerHTML=driverDestinations.map(d=>`<button type="button" class="driver-card" data-copy-destination="${d.name}"><span>${d.day}</span>${icon("copy")}<strong>${d.name}</strong><small>${d.note}</small></button>`).join("");refreshIcons();}
qs("#driverGrid").addEventListener("click",async e=>{const b=e.target.closest("[data-copy-destination]");if(!b)return;try{await navigator.clipboard.writeText(b.dataset.copyDestination);showToast(`已複製：${b.dataset.copyDestination}`);}catch{showToast("請長按中文名稱複製");}});

const tripInfo=JSON.parse(localStorage.getItem("sichuan-trip-info")||"{}");
function updateTripInfoStatus(){const fields=qsa("[data-trip-info]"),filled=fields.filter(x=>x.value.trim()).length;qs("#tripInfoStatus").textContent=filled?`已填寫 ${filled}／${fields.length} 項`:`尚未填寫`;}
qsa("[data-trip-info]").forEach(field=>{field.value=tripInfo[field.dataset.tripInfo]||"";field.addEventListener("input",()=>{tripInfo[field.dataset.tripInfo]=field.value;localStorage.setItem("sichuan-trip-info",JSON.stringify(tripInfo));updateTripInfoStatus();});});

qs("#shareTrip").addEventListener("click",async()=>{const url=`${location.origin}${location.pathname}`;const data={title:"四川八日行程｜成都・九寨溝",text:"2026/09/04—09/11 四川八日完整行程",url};try{if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(url);showToast("公開網址已複製");}}catch(error){if(error?.name!=="AbortError")showToast("暫時無法分享，請複製網址列");}});
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredInstallPrompt=e;});
qs("#installTrip").addEventListener("click",async()=>{if(matchMedia("(display-mode: standalone)").matches)return showToast("已經加入手機桌面");if(deferredInstallPrompt){await deferredInstallPrompt.prompt();deferredInstallPrompt=null;return;}showToast("iPhone：按分享，再選「加入主畫面」");});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=10").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(localStorage.getItem("sichuan-parent-mode")==="true");qs("#savedCount").textContent=saved.size;renderAllDays();renderDays();renderDriverCards();renderDrawer();updateReadiness();updateTripInfoStatus();updateCountdown();refreshIcons();initMap();
