'use strict';

// アイテムを表示する場所を見つける
const randomMusicDisplay = document.getElementById('randomMusic');
const artistNameInput = document.getElementById('artistName') // アーティスト名入力欄

// 曲を取得して表示する関数
async function displayRandomMusic() {
    const artistName = artistNameInput.value;
    if (!artistName) {
      randomMusicDisplay.textContent = 'アーティスト名を入力してください。';
      return;
    }

    const requestURL = `/.netlify/functions/youtube?artistName=${encodeURIComponent(artistName)}`;


    try {
      // APIを呼び出してデータを取得
      const response = await fetch(requestURL);
      const data = await response.json();
    
      if (data.error || data.items.length === 0) {
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