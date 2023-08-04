import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import SongCard from "@/components/SongCard";
import CreatePlaylist from "@/components/CreatePlaylist";
import TopFivePlaylist from "@/components/TopFivePlaylist";
import AddSongs from "@/components/AddSongs";
import "animate.css";
import "../../styles/animations.css";

const getTopSongs = async (accessToken) => {
  const result = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer ${accessToken}",
      },
    }
  );

  return await result.json();
};

const Page = async () => {
  const session = await getServerSession(authConfig);
  if (!session) {
    redirect("/");
  }

  const topSongs = (await getTopSongs(session.accessToken)).items;

  return (
    <>
      <div
        className={
          "flex flex-col items-center gap-8 pt-10 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400"
        }
      >
        <div className="animate__animated animate__fadeIn flex flex-col items-center gap-8 text-4xl">
          {session.user.name}'s Top Songs
        </div>
        <div className="animate__animated animate__fadeInUp delay-2 flex flex-col items-center gap-8 pt-10">
          {topSongs === undefined
            ? console.log("no top songs?")
            : topSongs.map((song, index) => {
                return <SongCard key={index} song={song} />;
              })}
          {/* <CreatePlaylist />
          <TopFivePlaylist /> */}
          <div className="flex flex-col gap-12 mb-12 items-center sm:flex-row">
            <AddSongs />
            <a
              className="text-lg bg-blue-700 text-white rounded-md p-1 px-3 font-semibold hover:bg-blue-400 ease-in duration-100 w-fit"
              href="https://open.spotify.com/playlist/6SvlnMHDktbb5AiesvGLZg"
              target="_blank"
            >
              View Playlist
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
