import Image from "next/image";

const ArtistCard = ({ artist }) => {
  const getGenreString = () => {
    let genreString = "";
    const genres = artist.genres.map((genre) => {
      return genre;
    });

    return genres.join(", ");
  };

  return (
    <div
      className={
        "flex flex-col bg-[#222] sm:w-[320px] gap-4 border-t-2 border-[#1ed760] rounded-b-lg items-center"
      }
    >
      <Image
        src={artist.images[1].url}
        width={320}
        height={320}
        alt={artist.name}
      />
      <div className={"text-center w-full flex flex-col justify-center pb-4"}>
        <h1 className={"sm:text-xl text-sm"}>{artist.name}</h1>
        {/* <h2 className="sm:text-md text-sm italic">{getGenreString()}</h2> */}
      </div>
    </div>
  );
};

export default ArtistCard;
