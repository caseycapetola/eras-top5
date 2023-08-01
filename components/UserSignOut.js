"use client";

import { signOut } from "next-auth/react";

export const UserSignOut = () => {
  return (
    <button
      className={
        "text-lg bg-[#1ed760] text-black rounded-md py-1 px-2 font-semibold"
      }
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
