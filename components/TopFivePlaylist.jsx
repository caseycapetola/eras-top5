"use client";

import { useSession } from "next-auth/react";

const TopFivePlaylist = () => {
  const { data: session, status } = useSession();
  const result = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );
    const top5 = await response.json();
    console.log(top5.items);
    let songsToAdd = [];
    for (let i = 0; i < top5.items.length; i++) {
      console.log(top5.items[i].uri);
      songsToAdd.push(top5.items[i].uri);
    }
    console.log(songsToAdd);
    const secondResponse = await fetch(
      "https://api.spotify.com/v1/playlists/3qRZ3dXnH3tLjKEpe5LQmq/tracks",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          uris: songsToAdd,
        }),
      }
    );
    const snapshot = await secondResponse.json();
    console.log(snapshot);
    return result;
  };

  return (
    <button
      onClick={result}
      className="bg-[#1ed760] text-black rounded-sm py-1 px-2"
    >
      Create Top 5 Playlist
    </button>
  );
};

export default TopFivePlaylist;
