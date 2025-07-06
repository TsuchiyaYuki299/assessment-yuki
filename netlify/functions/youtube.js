export default async (request) => {
  // Netlifyの関数が受け取ったURL全体を取得
  const requestUrl = new URL(request.url);
  // URLの中から、探し物（アーティスト名）を取り出す
  const artistName = requestUrl.searchParams.get('artistName');

  // もしアーティスト名がなければ、ここで処理を止める
  if (!artistName) {
    return new Response("アーティスト名が指定されていません。", { status: 400 });
  }

  // Netlifyに預けた秘密の鍵（APIキー）を取り出す
  const apiKey = process.env.YOUTUBE_API_KEY;
  // YouTubeに検索をお願いする言葉を作る
  const searchWord = encodeURIComponent(artistName + ' 公式MV');
  // YouTubeにお願いするための正式なURLを作る
  const youtubeApiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchWord}&type=video&key=${apiKey}&maxResults=50`;

  try {
    // YouTubeに探しに行く
    const youtubeResponse = await fetch(youtubeApiUrl);
    const videoData = await youtubeResponse.json();

    // 見つかった結果を、元の画面（ブラウザ）に送り返す
    return new Response(JSON.stringify(videoData), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // もし途中で何かエラーが起きたら、それも知らせる
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};