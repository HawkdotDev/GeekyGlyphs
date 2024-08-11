/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";

const UserMenu = ({
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
          element.style.fontSize = "16px"; // Adjust font size if necessary
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

  return (
    <div
      className={`relative ${dropdownClassName}`}
      style={{ width: buttonWidth }}
    >
      <div
        className="flex justify-between items-center rounded cursor-pointer"
        onClick={handleToggleDropdown}
        ref={buttonRef}
        style={{ width: buttonWidth, height: buttonHeight }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height= {buttonHeight}
          viewBox="0 -960 960 960"
          width={buttonWidth}
          fill="#e8eaed"
          className="flex justify-center items-center"
        >
          <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
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

export default UserMenu;
