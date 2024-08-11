/* eslint-disable no-unused-vars */
import HamMenu from "./HamMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const handleProfileClick = () => {
    alert("Profile Settings Clicked!");
  };

  const userOptions = [
    {
      label: "Profile",
      value: "profile",
      onClick: handleProfileClick,
    },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];
  const options = [
    { label: "some page", value: "some Page" },
    { label: "some page", value: "some Page" },
    { label: "some page", value: "some Page" },
    { label: "some page", value: "some Page" },
  ];
  return (
    <div className="select-none">
      <nav className="h-[55px] px-3 flex justify-between items-center border-b-[0.5px] border-gray-600">
        <div id="logo" className="h-[35px] bg-slate-600 w-[35px]"></div>
        <div className="w-[20%] h-[80%] flex justify-between items-center">
          <UserMenu
            options={userOptions}
            dropdownClassName="border-gray-200"
            optionClassName="text-gray-200"
            buttonWidth="36px"
            buttonHeight="36px"
            dropdownWidth="150px"
            dropdownHeight="150px"
          />
          <HamMenu
            options={options}
            dropdownClassName="border-gray-200"
            optionClassName="text-gray-200"
            buttonWidth="40px"
            buttonHeight="40px"
            dropdownWidth="200px"
            dropdownHeight="300px"
          />
        </div>
      </nav>
      <div className="flex gap-2 bg-slate-800 px-2 overflow-auto whitespace-nowrap scrollbar-hide sm:justify-evenly">
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Discover
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Gaming
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Anime
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Film & TV
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          eSports
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Tech
        </h1>
        <h1 className="font-semibold inline-block text-center px-4 py-2 cursor-pointer hover:bg-yellow-500 hover:text-black">
          Gossip
        </h1>
      </div>
      <div className="mx-4 mt-2 text-sm flex items-baseline gap-1 flex-nowrap overflow-auto">
        <a className="cursor-pointer hover:text-pink-500" href="#">
          Home
        </a>{" "}
        {">"}{" "}
        <a className="cursor-pointer hover:text-pink-500" href="#">
          Discover
        </a>
      </div>
    </div>
  );
};

export default Navbar;
