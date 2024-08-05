import HamMenu from "./HamMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="h-[45px] px-3 flex justify-between items-center border-b-[0.5px] border-gray-600">
      <div id="logo" className="h-[35px] bg-slate-600 w-[35px]"></div>
      <div className="w-[20%] h-[80%] flex justify-between items-center">
        <UserMenu />
        <HamMenu />
      </div>
    </nav>
  );
};

export default Navbar;
