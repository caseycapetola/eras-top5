import Image from "next/image";

const SongCard = ({ song }) => {
  const getArtistString = () => {
    let artistString = "";
    const artists = song.artists.map((artist) => {
      return artist.name;
    });

    return artists.join(", ");
  };

  return (
    <div
      className={
        "flex bg-[#222] sm:w-[600px] w-11/12 gap-4 border-t-2 border-[#1ed760] rounded-b-lg"
      }
    >
      <Image
        src={song.album.images[1].url}
        width={100}
        height={100}
        alt={song.album.name + " album art"}
      />
      <div className={"text-center w-full flex flex-col justify-center"}>
        <h1 className={"sm:text-xl text-sm font-bold"}>{song.name}</h1>
        <h1 className={"sm:text-md text-sm italic"}>{song.album.name}</h1>
        <h1 className={"sm:text-md text-sm"}>{getArtistString()}</h1>
      </div>
    </div>
  );
};

export default SongCard;
