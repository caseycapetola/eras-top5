import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import { redirect } from "next/navigation";
import SongCard from "@/components/SongCard";
import CreatePlaylist from "@/components/CreatePlaylist";
import TopFivePlaylist from "@/components/TopFivePlaylist";
import AddSongs from "@/components/AddSongs";

const getTopSongs = async (accessToken) => {
  console.log("YEET");
  const result = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
  console.log(topSongs);

  return (
    <div className={"flex flex-col items-center gap-8 mt-10"}>
      <CreatePlaylist />
      <TopFivePlaylist />
      <AddSongs />
      {topSongs.map((song, index) => {
        return <SongCard key={index} song={song} />;
      })}
    </div>
  );
};

export default Page;
