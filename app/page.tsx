import UserSignIn from "@/components/UserSignIn";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authConfig);

  if (session) {
    return redirect("/profile");
  }

  return (
    <div
      className={
        "min-h-screen flex justify-center items-center flex-col p-8 gap-8"
      }
    >
      <div className="w-fit border-[#333] border-2 rounded-lg p-4 flex flex-col gap-4">
        <h1 className="sm:text-7xl text-5xl text-[#ddd] text-center">
          Sample Text
        </h1>
        <UserSignIn />
      </div>
      {/* <Image src="/eras.png" width={400} height={225} alt="Eras" /> */}
    </div>
  );
}
