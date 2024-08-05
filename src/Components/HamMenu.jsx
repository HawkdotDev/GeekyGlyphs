// import hamMenu from "../assets/hamMenu.svg";
const HamMenu = () => {
  const dim = "36";
  return (
    <button
      id="HamburgerMenu"
      className="h-full w-[40%]"
      onClick={() => alert("features add nhi hua re!")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={dim}
        viewBox="0 -960 960 960"
        width={dim}
        fill="#e8eaed"
      >
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </button>
  );
};

export default HamMenu;
