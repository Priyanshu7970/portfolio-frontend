import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

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
          <MenuIcon className=" text-4xl text-white"/>
        </button>
      {isOpen && (
        <ul className="flex flex-col px-2 py-5 items-center justify-center mr-2 gap-1  absolute -right-3 rounded-md shadow-md mt-6 bg-[#38297dc8]" >
            <li className="group px-11 py-3 text-white hover:underline   ">
             
             <a href="#about"><span
                click="triggerNavItem('#about')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >About</span
              ></a>
              
              
            </li>
            
            <li className="group px-8 py-3 text-white hover:underline  ">
              <a href="#services"><span
                click="triggerNavItem('#services')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Services</span
              ></a>
              
              
            </li>
            
            <li className="group px-7 py-3 text-white hover:underline  ">
              
             <a href="#portfolio"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Portfolio</a>
              
              
            </li>
            
            
            <li className="group px-12 py-3 text-white hover:underline   ">
              
             <a href="#work"><span
                click="triggerNavItem('#work')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Work</span
              ></a> 
              
              
            </li>
            
            <li className="group px-7 py-3 text-white hover:underline ">
              <a href="#statistics">
              <span
                click="triggerNavItem('#statistics')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Statistics</span
              ></a>
              
              
            </li>
            
            <li className="group px-12 py-3 text-white hover:underline  ">
              
             <a href="#blog"><span
                click="triggerNavItem('#blog')"
                className="cursor-pointer font-header font-semibold uppercase text-white"
                >Blog</span
              >
              </a> 
              
            </li>
            
            <li className="group px-8 py-3 text-white hover:underline  ">
              
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