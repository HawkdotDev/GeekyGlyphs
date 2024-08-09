import HamMenu from "./HamMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const handleProfileClick = () => {
    alert('Profile Settings Clicked!');
  };
  const options = [
    { label: "Profile", value: "profile", onClick: handleProfileClick},
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];
  const handleSelect = (selectedOption) => {
    console.log(selectedOption);
  };
  return (
    <nav className="h-[45px] px-3 flex justify-between items-center border-b-[0.5px] border-gray-600">
      <div id="logo" className="h-[35px] bg-slate-600 w-[35px]"></div>
      <div className="w-[20%] h-[80%] flex justify-between items-center">
        <UserMenu />
        <HamMenu
          options={options}
          onSelect={handleSelect}
          placeholder="Select an option"
          isMultiSelect={true}
          isSearchable={true}
          dropdownClassName="border-gray-200"
          optionClassName="text-gray-200"
          buttonWidth="40px"       
          buttonHeight="40px"      
          dropdownWidth="150px"    
          dropdownHeight="150px"    
        />
      </div>
    </nav>
  );
};

export default Navbar;
