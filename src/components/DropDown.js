import React, { useEffect, useState } from 'react';

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle button click to toggle dropdown state
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown on click outside using a dedicated ref
  const dropdownRef = React.createRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen,dropdownRef]); // Only re-attach event listener on state change

  return (
    <div className="relative" ref={dropdownRef}>
       <button onClick={handleButtonClick} >
          <i className="bx bx-menu text-4xl text-white"></i>
        </button>
      {isOpen && (
        <ul className="flex flex-col items-center justify-center mr-2 gap-3 absolute -left-14 rounded-md shadow-md mt-6 bg-[#4b389b]" >
            <li className="group p-4 border-2 border-white  ">
             
             <a href="#about"><span
                click="triggerNavItem('#about')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >About</span
              ></a>
              
              
            </li>
            
            <li className="group p-4 border-2 border-white  ">
              <a href="#services"><span
                click="triggerNavItem('#services')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Services</span
              ></a>
              
              
            </li>
            
            <li className="group p-4 ">
              
             <a href="#portfolio"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Portfolio</a>
              
              
            </li>
            
            
            <li className="group p-4 border-2 border-white  ">
              
             <a href="#work"><span
                click="triggerNavItem('#work')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Work</span
              ></a> 
              
              
            </li>
            
            <li className="group p-4 border-2 border-white">
              <a href="#statistics">
              <span
                click="triggerNavItem('#statistics')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Statistics</span
              ></a>
              
              
            </li>
            
            <li className="group p-4 border-2 border-white ">
              
             <a href="#blog"><span
                click="triggerNavItem('#blog')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Blog</span
              >
              </a> 
              
            </li>
            
            <li className="group p-4 border-2 border-white ">
              
             <a href="#contact"> <span
                click="triggerNavItem('#contact')"
                className="cursor-pointer  font-header font-semibold uppercase text-white"
                >Contact</span
              >
              </a>
              
              
            </li>
         
        </ul>
      )}
    </div>
  );
};

export default DropDown;