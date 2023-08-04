"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export const UserSignIn = () => {
  const handleClick = () => {
    signIn("spotify");
  };

  return (
    <button
      className={
        "text-lg bg-blue-400 text-white rounded-md p-1 font-semibold hover:bg-blue-700 ease-in duration-100"
      }
      onClick={handleClick}
    >
      Sign in with Spotify
    </button>
  );
};

export default UserSignIn;
