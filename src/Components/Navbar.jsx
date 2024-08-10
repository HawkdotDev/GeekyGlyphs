/* eslint-disable no-unused-vars */
import HamMenu from "./HamMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const handleProfileClick = () => {
    alert("Profile Settings Clicked!");
  };
  const dim = "28";
  const profileSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={dim}
      viewBox="0 -960 960 960"
      width={dim}
      fill="#e8eaed"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );

  const options = [
    {
      label: "Profile",
      value: "profile",
      // icon: profileSvg,
      onClick: handleProfileClick,
    },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];
  return (
    <>
      <nav className="h-[55px] px-3 flex justify-between items-center border-b-[0.5px] border-gray-600">
        <div id="logo" className="h-[35px] bg-slate-600 w-[35px]"></div>
        <div className="w-[20%] h-[80%] flex justify-between items-center">
          <UserMenu />
          <HamMenu
            options={options}
            dropdownClassName="border-gray-200"
            optionClassName="text-gray-200"
            buttonWidth="40px"
            buttonHeight="40px"
            dropdownWidth="150px"
            dropdownHeight="150px"
          />
        </div>
      </nav>
      <div className="flex gap-2 bg-slate-800 px-2 overflow-auto whitespace-nowrap scrollbar-hide">
        <h1 className="inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white">
          Discover
        </h1>
        <h1 className="inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white">
          eSports & Gaming
        </h1>
        <h1 className="inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white">
          Film & TV
        </h1>
        <h1 className="inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white">
          Tech
        </h1>
        <h1 className="inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-white">
          Gossip
        </h1>
      </div>
      <div className="mx-4 mt-2 text-sm flex items-baseline gap-1 flex-nowrap overflow-auto">
        <a className="cursor-pointer hover:text-pink-500" href="#">
          Home
        </a>{" "}
        {">"}{" "}
        <a className="cursor-pointer hover:text-pink-500" href="#">
          eSports & Gaming
        </a>
      </div>
    </>
  );
};

export default Navbar;
