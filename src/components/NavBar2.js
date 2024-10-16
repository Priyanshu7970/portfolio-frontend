import React from 'react'
import DropDown from './DropDown';
import Link from 'next/link';
import Image from 'next/image';



const NavBar2 = ({profile}) => {
  return (
    <>
    <div className={`w-full z-50 top-0 py-4 sm:py-5  absolute bg-[#5440af] `}>
    <div className="container flex items-center justify-between">
      <div>
        <Link href="/">
          <h2 className="text-white text-2xl font-bold">{profile.title}</h2>
        </Link>
      </div>
      <div className="hidden lg:block">
        <ul className="flex items-center">
          
          <li className="group pl-6">
            
           <Link href="#about"><span
              click="triggerNavItem('#about')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >About</span
            ></Link>
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          <li className="group pl-6">
            <Link href="#services"><span
              click="triggerNavItem('#services')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Services</span
            ></Link>
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          <li className="group pl-6">
            
           <Link href="#portfolio"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Portfolio</Link>
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          
          <li className="group pl-6">
            
           <Link href="#work"><span
              click="triggerNavItem('#work')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Work</span
            ></Link> 
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          <li className="group pl-6">
            <Link href="#statistics">
            <span
              click="triggerNavItem('#statistics')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Statistics</span
            ></Link>
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          <li className="group pl-6">
            
           <Link href="#blog"><span
              click="triggerNavItem('#blog')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Blog</span
            >
            </Link> 
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
          <li className="group pl-6">
            
           <Link href="#contact"> <span
              click="triggerNavItem('#contact')"
              className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
              >Contact</span
            >
            </Link>
            
            <span
              className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"
            ></span>
          </li>
          
        </ul>
      </div>
      <div className="block lg:hidden">
        <DropDown className="text-4xl text-white"/>
      </div>
    </div>
    </div>
    
    <div
    className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
    >
    <div
      className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
    >
      <button
        className="absolute top-0 right-0 mt-4 mr-4"
        click="mobileMenu = false"
      >
        <Image src="/assets/img/icon-close.svg" className="h-10 w-auto" width={300} height={400} alt="Image not found" />
      </button>
    
      <ul className="mt-8 flex flex-col">
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >About</span
          >
          
        </li>
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Services</span
          >
          
        </li>
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Portfolio</span
          >
          
        </li>
        
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Work</span
          >
          
        </li>
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Statistics</span
          >
          
        </li>
        
        <li className="py-2">
          
          <span
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Blog</span
          >
          
        </li>
        
        <li className="py-2">
          
          <span
            click="triggerMobileNavItem('#contact')"
            className="cursor-pointer pt-1 font-header font-semibold uppercase text-white"
            >Contact</span
          >
          
        </li>
        
      </ul>
    </div>
    </div>
    </>
  )
}

export default NavBar2;
