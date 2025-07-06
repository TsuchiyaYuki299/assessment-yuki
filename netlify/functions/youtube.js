// YouTube APIを叩くためのサーバーレス関数

export default async (request, context) => {
  try {
    // フロントエンドから渡されたアーティスト名を取得
    const url = new URL(request.url);
    const artistName = url.searchParams.get('artistName');

    if (!artistName) {
      return new Response("アーティスト名が指定されていません。", { status: 400 });
    }

    // Netlifyの環境変数から安全にAPIキーを取得
    const API_KEY = process.env.YOUTUBE_API_KEY;

    // YouTube APIにリクエストを送るURLを組み立てる
    const searchWord = encodeURIComponent(artistName + ' 公式');
    const requestURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchWord}&type=video&key=${API_KEY}&maxResults=50`;

    // YouTube APIを呼び出す
    const youtubeResponse = await fetch(requestURL);
    const data = await youtubeResponse.json();

    // 結果をJSON形式でフロントエンドに返す
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};