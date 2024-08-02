import HamMenu from "./HamMenu"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <nav className="w-screen h-[45px] mx-3 flex justify-between items-center border-b-[0.5px] border-gray-600">
        <div id="logo" className="h-[35px] bg-slate-600 w-[35px]">

        </div>
        <div className="w-[20%] h-[80%] flex justify-between items-center">
            {/* <div id="hamburgerMenu" className="bg-red-700 h-full w-[40%]">

            </div> */}
            <UserMenu />
            <HamMenu />

        </div>


    </nav>
  )
}

export default Navbar