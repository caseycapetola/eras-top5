import Image from "next/image";

const ArtistCard = ({ artist }) => {
  return (
    <div
      className={
        "flex flex-col bg-[#222] sm:w-[600px] w-11/12 gap-4 border-t-2 border-[#1ed760] rounded-b-lg"
      }
    >
      <Image
        src={artist.images[1].url}
        width={300}
        height={300}
        alt={artist.name}
      />
      <div className={"text-center w-full flex flex-col justify-center"}>
        <h1 className={"sm:text-xl text-sm font-bold"}>{artist.name}</h1>
      </div>
    </div>
  );
};

export default ArtistCard;
