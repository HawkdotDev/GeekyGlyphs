/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const HamMenu = ({
  options = [],
  dropdownClassName = "",
  optionClassName = "",
  placement = "bottom-right",
  buttonWidth = "auto", 
  buttonHeight = "auto", 
  dropdownWidth = "auto", 
  dropdownHeight = "auto", 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current && dropdownWidth === "auto") {
      const maxOptionWidth = Math.max(
        ...options.map((option) => {
          const element = document.createElement("div");
          element.style.position = "absolute";
          element.style.visibility = "hidden";
          element.style.blackSpace = "nowrap";
          element.style.fontSize = "16px";      // Adjust font size if necessary
          element.textContent = option.label;
          document.body.appendChild(element);
          const width = element.getBoundingClientRect().width;
          document.body.removeChild(element);
          return width;
        })
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dropdownWidth = `${maxOptionWidth}px`;
    }
  }, [options, dropdownWidth]);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };
const handleSelectOption = (option) => {
  if (option.onClick) {
    option.onClick();
  }
};

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPlacementClasses = () => {
    switch (placement) {
      case "bottom-left":
        return "top-full left-0";
      case "bottom-right":
        return "top-full right-0";
      case "top-left":
        return "bottom-full left-0";
      case "top-right":
        return "bottom-full right-0";
      default:
        return "top-full left-0";
    }
  };

  const dim = "36";

  return (
    <div
      className={`relative ${dropdownClassName}`}
      style={{ width: buttonWidth }}
    >
      <div
        className="flex justify-between items-center bg-black rounded cursor-pointer"
        onClick={handleToggleDropdown}
        ref={buttonRef}
        style={{ width: buttonWidth, height: buttonHeight }}
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
      </div>
      {isOpen && (
        <div
          className={`absolute p-1 ${getPlacementClasses()} bg-black border border-gray-300 rounded mt-1 z-10`}
          style={{ width: dropdownWidth, maxHeight: dropdownHeight }}
          ref={dropdownRef}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`flex items-center p-[4px] cursor-pointer rounded-sm hover:bg-gray-100 hover:text-black ${optionClassName}`}
              onClick={() => setIsOpen(!isOpen) & handleSelectOption(option)}
            >
              {option.icon && <span className="mr-2">{option.icon}</span>}
              <span className="blackspace-nowrap">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HamMenu;
