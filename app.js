const itineraries = [
  { date:"9/4", weekday:"五", title:"抵達成都・東郊記憶", city:"成都", lodging:"龍之夢瑞峯公寓酒店", tone:"arrival", record:"抵達成都後入住成都東站旁飯店，晚上前往東郊記憶。", items:[
    ["14:40","抵達成都雙流機場 CTU","領取行李後前往成都東站旁飯店。","成都雙流機場"],
    ["傍晚","入住龍之夢瑞峯公寓酒店","飯店位於成都東站東廣場一側。","龍之夢瑞峯公寓酒店"],
    ["晚上","東郊記憶","逛紅磚廠房、展演空間與夜間街區。","東郊記憶"]
  ]},
  { date:"9/5", weekday:"六", title:"成都 → 黃龍 → 九寨溝", city:"黃龍", lodging:"Yuji 嶼季海韻酒店", tone:"hard", record:"從成都東搭車前往黃龍九寨站，遊覽黃龍後轉往九寨溝住宿。", items:[
    ["06:30","步行前往成都東站","從飯店步行至成都東站，準備搭乘早班動車。","成都東站"],
    ["08:12–10:01","C6362 成都東 → 黃龍九寨","搭動車抵達黃龍九寨站，再銜接景區接駁。","黃龍九寨站"],
    ["中午至傍晚","黃龍風景區","搭上行索道遊覽黃龍，主要看五彩池與沿途鈣華景觀。","黃龍風景區"],
    ["晚上","前往九寨溝・入住飯店","由黃龍搭車前往九寨溝，入住彭豐村的 Yuji 嶼季海韻酒店。","Yuji 嶼季海韻酒店"]
  ]},
  { date:"9/6", weekday:"日", title:"九寨溝完整一天", city:"九寨溝", lodging:"Yuji 嶼季海韻酒店", tone:"star", record:"用完整一天遊覽九寨溝，搭景區觀光車往返各支線。", items:[
    ["早上","步行前往九寨溝景區","從飯店步行至景區入口，入園後搭觀光車。","九寨溝景區入口"],
    ["上午","日則溝方向","遊覽五花海、珍珠灘瀑布等景點。","五花海"],
    ["中午","諾日朗中心站","在中心站用餐並轉乘另一條支線。","諾日朗中心站"],
    ["下午","則查洼溝方向","遊覽長海與五彩池。","長海・五彩池"],
    ["傍晚前","諾日朗瀑布・出園","看完諾日朗瀑布後搭車返回溝口。","諾日朗瀑布"]
  ]},
  { date:"9/7", weekday:"一", title:"返回成都・天府廣場與寬窄巷子", city:"成都", lodging:"璽悅·瀾庭度假公寓", tone:"move", record:"從九寨溝返回成都並入住公寓，晚上去了天府廣場與寬窄巷子。", items:[
    ["上午","九寨溝飯店 → 黃龍九寨站","從飯店搭接駁車前往黃龍九寨站。","黃龍九寨站"],
    ["13:08–15:14","C5794 黃龍九寨 → 成都東","搭動車返回成都。","成都東站"],
    ["下午","入住璽悅・瀾庭度假公寓","抵達成都後前往騾馬市附近的公寓。","璽悅·瀾庭度假公寓"],
    ["傍晚","天府廣場","在成都中心散步並看夜景。","天府廣場"],
    ["晚上","寬窄巷子","逛寬巷子、窄巷子與周邊街區。","寬窄巷子"]
  ]},
  { date:"9/8", weekday:"二", title:"青城山＋都江堰夜遊", city:"青城山・都江堰", lodging:"璽悅·瀾庭度假公寓", tone:"hard", record:"參加一日團走青城山與都江堰，晚上逛灌縣古城和南橋。", items:[
    ["清晨","成都出發","由公寓接載，搭車前往青城山。","璽悅·瀾庭度假公寓"],
    ["上午","青城山前山","參觀山林步道與道教建築。","青城山前山"],
    ["中午","午餐・川劇短演出","觀看短版川劇、變臉與地方表演。","青城山前山"],
    ["下午","都江堰景區","參觀魚嘴、飛沙堰與寶瓶口。","都江堰景區"],
    ["晚上","灌縣古城・南橋","逛灌縣古城並看南橋夜景，之後返回成都。","南橋"]
  ]},
  { date:"9/9", weekday:"三", title:"三星堆・春熙路與川劇", city:"廣漢 → 成都", lodging:"璽悅·瀾庭度假公寓", tone:"city", record:"上午參觀三星堆博物館，下午回到春熙路；晚餐後分頭活動。", items:[
    ["07:30","成都出發・前往三星堆","搭車前往廣漢，車程約 1.5 小時。","三星堆博物館"],
    ["上午至下午","三星堆博物館","跟著導覽看青銅縱目面具、青銅大立人、金面具與青銅神樹。","三星堆博物館"],
    ["約 16:00","返回成都・春熙路","回到春熙路後逛太古里與 IFS。","成都IFS"],
    ["晚餐後","分頭活動","你留在商圈逛街，爸媽前往觀看川劇。","璽悅·瀾庭度假公寓"]
  ]},
  { date:"9/10", weekday:"四", title:"人民公園慢遊・錦江夜景", city:"成都", lodging:"璽悅·瀾庭度假公寓", tone:"city", record:"上午參觀杜甫草堂，下午到人民公園，晚上走望平街與錦江沿岸。", items:[
    ["上午","杜甫草堂","參觀茅屋、詩史堂與紅牆花徑。","杜甫草堂"],
    ["中午至 17:30","人民公園","在園內用餐、喝蓋碗茶並散步。","人民公園"],
    ["傍晚","望平街・猛追灣","在濱水街區吃飯、逛店。","望平街・猛追灣"],
    ["晚上","錦江沿岸・安順廊橋","沿錦江經東門碼頭、合江亭走到安順廊橋。","安順廊橋"]
  ]},
  { date:"9/11", weekday:"五", title:"成都自由活動・爸媽返程", city:"成都", lodging:"", tone:"move", record:"早上在成都隨意走走。爸媽自行前往天府機場，三人的四川行程到這裡結束。", items:[
    ["早上","成都自由活動","沒有安排景點，在市區吃東西、隨意走走。","璽悅·瀾庭度假公寓"],
    ["上午","爸媽前往天府機場","爸媽自行前往成都天府機場 T1，你沒有同行。","成都天府國際機場 T1"]
  ]}
];

const mapPlaces = [
  {name:"成都雙流機場",area:"成都・雙流",desc:"9/4 搭 NX388 於 14:40 抵達成都雙流機場 CTU T1。",lat:30.5785,lng:103.9471,type:"transport",days:[0],stay:"9/4 14:40 抵達",icon:"plane"},
  {name:"成都天府國際機場 T1",area:"成都・簡陽",desc:"9/11 爸媽自行前往 TFU T1 搭 NX387，三人的四川旅程在成都分流。",lat:30.3125,lng:104.4413,type:"transport",days:[7],stay:"9/11 爸媽返程",icon:"plane"},
  {name:"龍之夢瑞峯公寓酒店",area:"成華區・嘉陵江路 8 號-D",desc:"9/4 住在成都東站店，飯店位於成都東站東廣場一側。",lat:30.6328,lng:104.1427,type:"stay",days:[0,1],stay:"9/4 入住・9/5 退房",icon:"bed-double"},
  {name:"東郊記憶",area:"成華區・建設南支路",desc:"9/4 入住後前往紅磚廠房與夜間街區散步。",lat:30.6717,lng:104.1213,type:"sight",days:[0],stay:"9/4 晚上",icon:"camera"},
  {name:"璽悅·瀾庭度假公寓",area:"青羊區・東華門街・騾馬市站",desc:"9/7 至 9/11 連住四晚，公寓距騾馬市地鐵站約 300 公尺。",lat:30.671634,lng:104.07562,type:"stay",days:[3,4,5,6,7],stay:"9/7 入住・9/11 退房",icon:"bed-double"},
  {name:"天府廣場",area:"青羊區・成都中心",desc:"9/7 返回成都後在廣場周邊吃飯、散步並看夜景。",lat:30.6573,lng:104.0658,type:"sight",days:[3],stay:"9/7 傍晚",icon:"sparkles"},
  {name:"寬窄巷子",area:"青羊區・長順街一帶",desc:"9/7 晚上逛寬巷子、窄巷子與周邊街區。",lat:30.6695,lng:104.0590,type:"sight",days:[3],stay:"9/7 晚上",icon:"camera"},
  {name:"三星堆博物館",area:"德陽廣漢・三星堆鎮",desc:"9/9 跟著導覽參觀青銅縱目面具、大立人、金面具與青銅神樹。",lat:31.0059,lng:104.2195,type:"sight",days:[5],stay:"9/9 上午至下午",icon:"landmark"},
  {name:"成都IFS",area:"春熙路商圈",desc:"9/9 約 16:00 抵達；春熙路、太古里與 IFS 相鄰，先一起逛街吃晚餐，之後你留下自由逛。",lat:30.6543,lng:104.0815,type:"sight",days:[5],stay:"9/9 16:00 起・晚餐後自由逛",icon:"shopping-bag"},
  {name:"成都東站",area:"成華區",desc:"9/5 從這裡搭 C6362 前往黃龍九寨；9/7 搭 C5794 回到成都東。",lat:30.6289,lng:104.1403,type:"transport",days:[1,3],stay:"9/5 出發・9/7 返回",icon:"train-front"},
  {name:"黃龍九寨站",area:"松潘・川主寺",desc:"9/5 在此轉車前往黃龍；9/7 搭 C5794 返回成都。",lat:32.6530,lng:103.6089,type:"transport",days:[1,3],stay:"9/5 與 9/7 轉乘",icon:"train-front"},
  {name:"Yuji 嶼季海韻酒店",area:"溝口彭豐村／天堂口",desc:"9/5、9/6 連住兩晚，步行約 10–15 分鐘可到九寨溝景區入口。",lat:33.2676,lng:103.9188,type:"stay",days:[1,2,3],stay:"9/5 入住・9/7 退房",icon:"bed-double"},
  {name:"九寨溝景區入口",area:"九寨溝縣",desc:"9/6 早上從這裡入園，搭乘景區觀光車展開一日遊覽。",lat:33.2601,lng:103.9187,type:"sight",days:[2],stay:"9/6 早上",icon:"ticket-check"},
  {name:"五花海",area:"九寨溝・日則溝",desc:"九寨溝代表性海子之一，沿日則溝方向搭車抵達。",lat:33.1599,lng:103.8794,type:"sight",days:[2],stay:"9/6 上午",icon:"waves"},
  {name:"諾日朗中心站",area:"九寨溝・三條溝交會處",desc:"在兩條上支線的交會處用午餐並換乘觀光車。",lat:33.16027,lng:103.910407,type:"transport",days:[2],stay:"9/6 中午",icon:"bus-front"},
  {name:"長海・五彩池",area:"九寨溝・則查洼溝",desc:"沿則查洼溝方向遊覽長海與五彩池。",lat:33.036228,lng:103.932113,type:"sight",days:[2],stay:"9/6 下午",icon:"waves"},
  {name:"諾日朗瀑布",area:"九寨溝・諾日朗",desc:"完成兩條支線後參觀瀑布，再搭車返回溝口。",lat:33.16552,lng:103.90513,type:"sight",days:[2],stay:"9/6 傍晚前",icon:"waves"},
  {name:"黃龍風景區",area:"松潘縣",desc:"9/5 搭上行索道遊覽黃龍，主要看五彩池與沿途鈣華景觀。",lat:32.7434,lng:103.8335,type:"sight",days:[1],stay:"9/5 中午至傍晚",icon:"mountain-snow"},
  {name:"都江堰景區",area:"都江堰市",desc:"9/8 跟著導覽參觀魚嘴、飛沙堰與寶瓶口。",lat:31.0045,lng:103.6050,type:"sight",days:[4],stay:"9/8 下午",icon:"landmark"},
  {name:"南橋",area:"灌縣古城",desc:"9/8 夜間逛灌縣古城並看南橋水面燈光。",lat:30.9949,lng:103.6162,type:"sight",days:[4],stay:"9/8 晚上",icon:"bridge"},
  {name:"青城山前山",area:"都江堰市",desc:"9/8 跟著導覽參觀青城山前山的步道與道教建築。",lat:30.9000,lng:103.5703,type:"sight",days:[4],stay:"9/8 上午",icon:"trees"},
  {name:"杜甫草堂",area:"青羊區・青華路 37 號",desc:"9/10 參觀茅屋、詩史堂與紅牆花徑。",lat:30.6607,lng:104.0282,type:"sight",days:[6],stay:"9/10 上午",icon:"book-open"},
  {name:"人民公園",area:"青羊區・祠堂街",desc:"9/10 在園內用餐、喝蓋碗茶並散步。",lat:30.6579,lng:104.0559,type:"sight",days:[6],stay:"9/10 中午至 17:30",icon:"coffee"},
  {name:"望平街・猛追灣",area:"成華區・錦江北岸",desc:"9/10 在濱水街區吃晚餐並逛街。",lat:30.6616,lng:104.0980,type:"sight",days:[6],stay:"9/10 傍晚",icon:"store"},
  {name:"安順廊橋",area:"錦江區・合江亭旁",desc:"9/10 由望平街沿錦江經東門碼頭、合江亭步行抵達。",lat:30.6419,lng:104.0832,type:"sight",days:[6],stay:"9/10 晚上",icon:"bridge"}
];

const readStoredValue=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const writeStoredValue=(key,value)=>{try{localStorage.setItem(key,value);return true;}catch{return false;}};
const categoryLabels={sight:"景點",transport:"交通",stay:"住宿"};
const categoryGlyphs={sight:"景",transport:"車",stay:"住"};
const tripDateKeys=itineraries.map(d=>`2026-${d.date.split("/").map(value=>value.padStart(2,"0")).join("-")}`);
const todayParts=new Intl.DateTimeFormat("en",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
const todayPart=type=>todayParts.find(part=>part.type===type)?.value;
const todayKey=`${todayPart("year")}-${todayPart("month")}-${todayPart("day")}`;
const matchedDay=tripDateKeys.indexOf(todayKey);
let activeDay=matchedDay>=0?matchedDay:0,mapFilter="all",mapDay=String(matchedDay>=0?matchedDay:0),mapQuery="",travelMap,markerLayer;
let mapMarkers=new Map();
const qs=s=>document.querySelector(s),qsa=s=>[...document.querySelectorAll(s)];
const dayTabs=qs("#dayTabs"),timeline=qs("#timeline"),toast=qs("#toast");
const icon=name=>`<i data-lucide="${name}"></i>`;
const refreshIcons=()=>{if(window.lucide)window.lucide.createIcons();};

function showToast(message){toast.textContent=message;toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove("show"),1800);}
function renderDays(){
  dayTabs.innerHTML=itineraries.map((d,i)=>`<button id="day-tab-${i}" class="day-tab ${i===activeDay?"active":""}" role="tab" aria-controls="timeline" aria-selected="${i===activeDay}" tabindex="${i===activeDay?0:-1}" data-day="${i}"><span>DAY ${i+1} · ${d.date}</span><strong>${d.title}</strong></button>`).join("");
  qs("#mobileDaySelect").innerHTML=itineraries.map((d,i)=>`<option value="${i}" ${i===activeDay?"selected":""}>D${i+1}｜${d.date}｜${d.title}</option>`).join("");
  qs("#mapDaySelect").innerHTML=`<option value="all">全部 8 天</option>${itineraries.map((d,i)=>`<option value="${i}">D${i+1}｜${d.date}｜${d.title}</option>`).join("")}`;
  qs("#mapDaySelect").value=mapDay;
  qsa("[data-map-day]").forEach(b=>b.classList.toggle("active",b.dataset.mapDay===mapDay));
  qsa(".overview-day").forEach(card=>card.classList.toggle("active",Number(card.dataset.overviewDay)===activeDay));
  renderTimeline();
}
function selectDay(index,scroll=false){activeDay=Number(index);renderDays();setMapDay(activeDay);if(scroll)qs("#route").scrollIntoView({behavior:"smooth",block:"start"});}
function renderTimeline(){
  const d=itineraries[activeDay];
  const sightCount=routePlacesForDay(activeDay).filter(p=>p.type==="sight").length;
  qs("#dayOverview").className=`day-overview ${d.tone}${d.lodging?"":" no-lodging"}`;
  qs("#dayOverview").innerHTML=`<div><span>${d.date} 星期${d.weekday}</span><h3>${d.title}</h3>${sightCount?`<div class="day-tags"><b>${sightCount} 個主要景點</b></div>`:""}</div><p>${d.record}</p>${d.lodging?`<div class="lodging-badge">${icon("bed-double")}<span>當晚住宿</span><strong>${d.lodging}</strong></div>`:""}`;
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
    box.innerHTML=`<div class="map-context-title"><span>D${dayNumber+1} · ${d.date} 星期${d.weekday}</span><strong>${d.title}</strong><small>${routeNote}</small></div><div class="map-route-chain">${route.map((p,i)=>`<button type="button" data-map-context-place="${p.name}"><b>${i+1}</b><span>${p.name}</span></button>${i<route.length-1?icon("chevron-right"):""}`).join("")}</div>`;
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
dayTabs.addEventListener("click",e=>{const b=e.target.closest("[data-day]");if(b)selectDay(b.dataset.day);});
dayTabs.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();const current=Number(e.target.closest("[data-day]")?.dataset.day??activeDay);const next=e.key==="Home"?0:e.key==="End"?itineraries.length-1:(current+(e.key==="ArrowRight"?1:-1)+itineraries.length)%itineraries.length;selectDay(next);qs(`#day-tab-${next}`)?.focus();});
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
qsa('a[href="#map"]').forEach(a=>a.addEventListener("click",()=>{qs("#mapDetails").open=true;refreshMapLayout();}));
qs("#mapDetails")?.addEventListener("toggle",e=>{if(e.currentTarget.open)refreshMapLayout();});
const navLinks=qsa(".mobile-nav a");
function setActiveNav(hash){navLinks.forEach(link=>{const active=link.getAttribute("href")===hash;link.classList.toggle("active",active);if(active)link.setAttribute("aria-current","true");else link.removeAttribute("aria-current");});}
navLinks.forEach(link=>link.addEventListener("click",()=>setActiveNav(link.getAttribute("href"))));
if("IntersectionObserver" in window){
  const navObserver=new IntersectionObserver(entries=>{const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(visible)setActiveNav(`#${visible.target.id}`);},{rootMargin:"-15% 0px -65% 0px",threshold:[0,.1,.25]});
  ["route","map","memories"].map(id=>qs(`#${id}`)).filter(Boolean).forEach(section=>navObserver.observe(section));
}
setActiveNav("#route");
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js?v=60").catch(()=>{}));
qs(".back-top").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
setParentMode(readStoredValue("sichuan-parent-mode","false")==="true");renderDays();refreshIcons();renderMapData(false);
