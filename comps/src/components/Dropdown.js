import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);
    // what option did the user click on?
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  //   let content = 'Select...';
  //   if(selection){
  //     content = selection.label;
  //   }

  return (
    <div className="w-48 relative">
      <div className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" onClick={handleClick}>{selection?.label || "Select..."}
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>
      {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full mt-0.5">{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
