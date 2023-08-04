"use client";

import { signOut } from "next-auth/react";

export const UserSignOut = () => {
  return (
    <button
      className={
        "text-lg bg-blue-400 text-white rounded-md p-1 px-3 font-semibold hover:bg-blue-700 ease-in duration-100 w-fit"
      }
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};
