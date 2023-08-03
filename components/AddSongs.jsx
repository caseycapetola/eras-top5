"use client";

import { useSession } from "next-auth/react";
import { addFiveSongs } from "../lib/spotify";

const AddSongs = () => {
  const { data: session, status } = useSession();

  const displayToken = () => {
    addFiveSongs(session.accessToken);
  };

  return (
    <button
      onClick={displayToken}
      className="bg-[#1ed760] text-black rounded-sm py-1 px-2"
    >
      Add Your Top 5 Songs
    </button>
  );
};

export default AddSongs;
