let music = [
  "BOW AND ARROW",
  "がらくた - JUNK",
  "Plazma",
  "KICK BACK",
  "POP SONG",
  "死神",
  "地球儀",
  "砂の惑星 ( + 初音ミク )",
  "カムパネルラ",
];

// アイテムを表示する場所を見つける
const randomMusicDisplay = document.getElementById('randomMusic');

// ランダムにアイテムを選んで表示する関数
function displayRandomMusic() {
  // 1.ランダムな数字を作る
  // items.lengthは配列のアイテムの数
  // Math.random（） は0以上1未満のランダムな少数
  // それらを掛け算して、Math.floor() で小数点以下を切り捨てると、
  // 0から1までの整数（アイテムの数 -1 ) がランダムで作られる
  const randomIndex = Math.floor(Math.random() * music.length);

  // 2.その数字を使って、配列の中からアイテムを選ぶ
  const selectedMusic = music[randomIndex];

  // 3.選んだアイテムをHTMLに表示
  randomMusicDisplay.textContent = selectedMusic;
}