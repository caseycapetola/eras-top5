"use client";

import { useSession } from "next-auth/react";
import { getTopFiveArtists, getTopFiveSongs } from "@/lib/spotify";

const TopArtists = () => {
  const { data: session, status } = useSession();

  const displayArtists = () => {
    getTopFiveArtists(session.accessToken);
  };
  const displaySongs = () => {
    getTopFiveSongs(session.accessToken);
  };

  return (
    <>
      <button
        onClick={displayArtists}
        className="bg-[#1ed760] text-black rounded-sm py-1 px-2"
      >
        Get Top Artists
      </button>
      <button
        onClick={displaySongs}
        className="bg-[#1ed760] text-black rounded-sm py-1 px-2"
      >
        Get Top Songs.items
      </button>
    </>
  );
};

export default TopArtists;
