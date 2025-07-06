'use strict';

// アイテムを表示する場所を見つける
const randomMusicDisplay = document.getElementById('randomMusic');
const artistNameInput = document.getElementById('artistName') // アーティスト名入力欄

// APIキー（自分のものに置き換えてください）
const API_KEY = 'ここをAPIキーに置き換えてください';

// 曲を取得して表示する関数
async function displayRandomMusic() {
    const artistName = artistNameInput.value;
    if (!artistName) {
      randomMusicDisplay.textContent = 'アーティスト名を入力してください。';
      return;
    }

  // youtube APIにリクエストを送るURLを組み立てる
    const searchWord = encodeURIComponent(artistName + '公式'); // "公式" をつけて検索精度を上げる
    const requestURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchWord}&type=video&key=${API_KEY}&maxResults=50`;

    try {
      // APIを呼び出してデータを取得
      const response = await fetch(requestURL);
      const data = await response.json();
    
      if (data.items.length === 0) {
        randomMusicDisplay.textContent = '該当する動画が見つかりませんでした。';
        return;  
      }

      // ランダムな動画を選択
      const randomIndex = Math.floor(Math.random() * data.items.length);
      const selectedMusic = data.items[randomIndex];

      const title = selectedMusic.snippet.title;
      const videoId = selectedMusic.id.videoId;
      const videoURL = `https://www.youtube.com/watch?v=${videoId}`;

      // HTMLに表示
      randomMusicDisplay.innerHTML = `<a href="${videoURL}" target="_blank">${title}</a>`;
  } catch (error) {
      console.error('エラーが発生しました:', error);
      randomMusicDisplay.textContent = '曲の取得中にエラーが発生しました。';
  }

}




// ランダムにアイテムを選んで表示する関数
function displayRandomMusic() {
  // 1.ランダムな数字を作る
  const randomIndex = Math.floor(Math.random() * music.length);

  // 2.その数字を使って、配列の中からアイテムを選ぶ
  const selectedMusic = music[randomIndex];

  // 3.選んだアイテムをHTMLに表示
  randomMusicDisplay.innerHTML = `<a href="${selectedMusic.url}" target="_blank">${selectedMusic.title}</a>`;
}