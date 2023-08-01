"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const UserSignIn = () => {
  const handleClick = () => {
    signIn("spotify");
  };

  return (
    <button
      className={"text-lg bg-[#1ed760] text-black rounded-md p-1 font-semibold"}
      onClick={handleClick}
    >
      Sign in with Spotify
    </button>
  );
};

export default UserSignIn;
