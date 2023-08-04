import { UserSignOut } from "@/components/UserSignOut";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className={"flex py-4 sm:px-20 px-2 justify-between bg-blue-900"}>
        <h1 className={"text-4xl"}>Eras Top 5</h1>
        <UserSignOut />
      </div>
      {children}
    </>
  );
};

export default ProfileLayout;
