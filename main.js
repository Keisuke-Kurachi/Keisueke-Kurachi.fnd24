'use strict'
// 1行目に記載している 'use strict' は削除しないでください


let raceExplain;
let raceExplainEnd;
let raceUrl;

const raceField = document.getElementById("raceField")
let raceImg = document.getElementById('dewaltImg');

function nascar() {
  raceExplain = "NASCAR とはアメリカ国内で行われているレースで、日本やヨーロッパとは一味違う形式のレースが非常に盛り上がっている。そのひとつが、オーバルコースでのレースがメイン。NASCARはNational Association for Stock Car Auto Racing, Inc.という主催団体の名称の頭文字からつけられている。";
  changeImg("whatsnascar.jpg")
  raceField.innerText = raceExplain;
  let goNas = document.getElementById("button");
  goNas.innerText = "詳しい NASCAR の情報はこちらへ！"
  goNas.onclick = () => {
    window.open("https://toyotagazooracing.com/archive/ms/jp/nascar/whats.html");
  }
}


function wrc() {
  raceExplain = "WRC とはFIA 世界ラリー選手権は1973年に創設された。世界各地で開催されていたラリーの中から選ばれた13のイベントがシリーズ化され、世界選手権のタイトルがかけられたのがその始まりである。以降、WRCは40年以上にわたりスプリントラリーの最高峰として君臨。ラリーが盛んな欧州や南米では、F1に勝るとも劣らない人気を誇っています。";
  changeImg('whatswrc.jpg');
  raceField.innerText = raceExplain;
  let goWrc = document.getElementById("button");
  goWrc.innerText = "詳しい WRC の情報はこちらへ！"
  goWrc.onclick = () => {
    window.open("https://toyotagazooracing.com/jp/wrc/about/2024/");
  }
}


function wec() {
  raceExplain = "WEC とは世界のレースで、FIA世界耐久選手権(FIA World Endurance Championship：WEC)は、耐久レースの世界選手権で、国際自動車連盟（FIA）とル・マン24時間の開催で知られるフランス西部自動車クラブ（ACO）が運営しています。レースはプロトタイプカーとGTカーが混走する形式で争われています。レギュレーションで各決勝レースの長さは6時間以上と規定され、今シーズン最長は第4戦ル・マンの24時間レースです。";
  changeImg('whatswec.jpg');
  raceField.innerText = raceExplain;
  let goWec = document.getElementById("button");
  goWec.innerText = "詳しい WEC の情報はこちらへ！"
  goWec.onclick = () => {
    window.open("https://toyotagazooracing.com/jp/wec/about/2023/");
  }
}



function sgt() {
  raceExplain = "SUPER GT（スーパー・ジーティ）は、高性能な乗用車であるGTカーをベースにしたレーシングカーで行われるレースのシリーズ戦です。GTとは「Grand Touring（グランド・ツーリング）」の略称で、元々は長距離を高速に移動できる高性能車を表すグレード（車両の格）です。このためクルマ好きはもちろん、一般にもGTカーは高性能車として名前が知られています。"
  changeImg('whatssgt.jpg');
  raceField.innerText = raceExplain;
  let goSgt = document.getElementById("button");
  goSgt.innerText = "詳しい SGT の情報はこちらへ！"
  goSgt.onclick = () => {
    window.open("https://toyotagazooracing.com/jp/supergt/about/");
  }
}


const clickNas = document.getElementById("NAS");
clickNas.addEventListener("click", nascar);





const clickWrc = document.getElementById("WRC");
clickWrc.addEventListener("click", wrc);

const clickWec = document.getElementById("WEC");
clickWec.addEventListener("click", wec);

const clickSgt = document.getElementById("SGT");
clickSgt.addEventListener("click", sgt);

function changeImg(path) {
  raceImg.src = path;
}

// 画像切替
function changeImg(path) {
  raceImg.src = path;
}

