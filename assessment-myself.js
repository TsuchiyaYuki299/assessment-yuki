'use strict';

let music = [
  { title: "BOW AND ARROW", url: "https://youtu.be/M-Eyhjkepy0?si=GuXATAl2hgozu_to" },
  { title: "がらくた - JUNK", url: "https://youtu.be/2mUC91bXt60?si=8S65Kq9SN6MlQWVv" },
  { title: "Plazma", url: "https://youtu.be/fp3F6TqBsAU?si=PNLdCGHyq77gw3LV" },
  { title: "KICK BACK", url: "https://youtu.be/M2cckDmNLMI?si=HjEawp3v1J38kz6u" },
  { title: "POP SONG", url: "https://youtu.be/mHP6-D-yBEw?si=1q4myzFy0vXCw21U" },
  { title: "死神", url: "https://youtu.be/8nxaZ69ElEc?si=_A4UMABRt-9us5yM" },
  { title: "地球儀", url: "https://youtu.be/VUsURj_OYdA?si=N6NdQOz7sLTNNLPT" },
  { title: "砂の惑星 ( + 初音ミク )", url: "https://youtu.be/AS4q9yaWJkI?si=TafceU_tWSyxPNlB" },
  { title: "カムパネルラ", url: "https://youtu.be/XeFQJ6-XoD0?si=c_Mmes29hQ2CEYju" },
];

// アイテムを表示する場所を見つける
const randomMusicDisplay = document.getElementById('randomMusic');

// ランダムにアイテムを選んで表示する関数
function displayRandomMusic() {
  // 1.ランダムな数字を作る
  const randomIndex = Math.floor(Math.random() * music.length);

  // 2.その数字を使って、配列の中からアイテムを選ぶ
  const selectedMusic = music[randomIndex];

  // 3.選んだアイテムをHTMLに表示
  randomMusicDisplay.innerHTML = `<a href="${selectedMusic.url}" target="_blank">${selectedMusic.title}</a>`;
}