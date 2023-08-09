import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/auth";
import TopArtists from "@/components/TopArtists";
import "../../styles/animations.css";
import { getTopFiveArtists } from "@/lib/spotify";
import ArtistCard from "@/components/ArtistCard";
import "animate.css";
import { redirect } from "next/navigation";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Page = async () => {
  const session = await getServerSession(authConfig);
  let monthVal = new Date().getMonth();
  if (!session) {
    redirect("/");
  }

  const topArtists = await getTopFiveArtists(session.accessToken);

  return (
    <>
      <div
        className={
          "flex flex-col items-center gap-8 pt-10 bg-gradient-to-b from-blue-900 via-blue-600 to-blue-400"
        }
      >
        <div className="animate__animated animate__fadeIn flex flex-col items-center gap-8 text-4xl">
          <h1 className="px-4 text-center">
            {month[monthVal]} looks good on you! Here are some of your trends
            from the last month...
          </h1>
        </div>
        <div className="animate__animated animate__fadeInUp delay-2 flex flex-col items-center gap-8 pt-10">
          {topArtists?.map((artist, index) => {
            return <ArtistCard key={index} artist={artist} />;
          })}
        </div>
        <TopArtists />
      </div>
    </>
  );
};

export default Page;
