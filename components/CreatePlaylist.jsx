"use client";

import { useSession } from "next-auth/react";

const CreatePlaylist = ({ createPlaylist }) => {
  const { data: session, status } = useSession();
  if (session) {
  }
  const result = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/users/capstoli_13/playlists",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
        body: JSON.stringify({
          name: "Eras",
          description: "New playlist made by Eras Top 5 App",
          public: "false",
          collaborative: "True",
        }),
      }
    );
    const playlist = await response.json();
    console.log(playlist);
    return result;
  };

  return (
    <button
      onClick={result}
      className="bg-[#1ed760] text-black rounded-sm py-1 px-2"
    >
      Create New Shared Playlist
    </button>
  );
};

export default CreatePlaylist;
