import { UserSignOut } from "@/components/UserSignOut";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div
        className={
          "flex border-b-2 border-[#333] py-4 sm:px-20 px-2 justify-between"
        }
      >
        <h1 className={"text-4xl"}>
          <span className={"text-[#1ed760]"}>Eras</span>Top5
        </h1>
        <UserSignOut />
      </div>
      {children}
    </>
  );
};

export default ProfileLayout;
