import UserSignIn from "@/components/UserSignIn";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import "animate.css";

export default async function Home() {
  const session = await getServerSession(authConfig);

  if (session) {
    return redirect("/profile");
  }

  return (
    <div
      className={
        "min-h-screen flex justify-center items-center flex-col p-8 gap-8 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400"
      }
    >
      <div className="animate__animated animate__fadeIn flex flex-col items-center p-8 gap-8">
        <div className="w-fit p-4 flex flex-col gap-6">
          <h1 className="sm:text-7xl text-5xl text-[#ddd] text-center">
            Eras Top 5
          </h1>
          <UserSignIn />
        </div>
        <Image src="/eras.png" width={400} height={225} alt="Eras" />
        <a
          className="text-lg bg-blue-400 text-white rounded-md p-1 px-3 font-semibold hover:bg-blue-700 ease-in duration-100 w-fit"
          href="https://github.com/caseycapetola/eras-top5"
          target="_blank"
        >
          Source Code
        </a>
        <a
          className="text-lg bg-blue-400 text-white rounded-md p-1 px-4 font-semibold hover:bg-blue-700 ease-in duration-100 w-fit"
          href="https://photos.google.com/share/AF1QipO-eT5g_Cop9QmYDLqtMwggwH5XPwiKB9xvNPYQ8yfGObhibaRhRkPC-3_zya048Q?key=NmZaUmFudFB1WTczcDhVNzV0VUlmcjQ5V0lPSUJR"
          target="_blank"
        >
          Google Photos
        </a>
      </div>
    </div>
  );
}
