import queryString from "query-string";

const basic = Buffer.from(
  `${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN,
    }),
  });
  const json = await response.json();
  console.log("Access Token: " + json.access_token);
  return json;
};

const getTopFiveSongs = async (session_token) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session_token}`,
      },
    }
  );
  const top5 = await response.json();
  let songsToAdd = [];
  for (let i = 0; i < top5.items.length; i++) {
    songsToAdd.push(top5.items[i].uri);
  }
  return songsToAdd;
};

export const addFiveSongs = async (session_token) => {
  const { access_token } = await getAccessToken();
  const songsToAdd = await getTopFiveSongs(session_token);
  console.log(songsToAdd);
  const response = await fetch(
    "https://api.spotify.com/v1/playlists/6SvlnMHDktbb5AiesvGLZg/tracks",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify({
        uris: songsToAdd,
      }),
    }
  );
  const snapshot = await response.json();
  return snapshot;
};
