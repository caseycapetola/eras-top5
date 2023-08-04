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
      className="text-lg bg-blue-700 text-white rounded-md p-1 px-3 font-semibold hover:bg-blue-400 ease-in duration-100 w-fit"
    >
      Add Your Top 5 Songs
    </button>
  );
};

export default AddSongs;
