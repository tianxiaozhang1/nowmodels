// components/RightSideMenu.jsx
'use client'; // This directive marks the component as a Client Component in Next.js 13+ App Router
import Link from 'next/link'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X as XButton, Menu as MenuButton } from 'lucide-react';
import { playfairDisplay } from '@/fonts';

const RightSideMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State to control the transition timing function dynamically
    const [transitionTimingClass, setTransitionTimingClass] = useState('ease-in-out'); 

    // Refs to directly interact with DOM elements for click outside logic
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);

    // Memoized callback to open the menu
    const openMenu = useCallback(() => {
        setTransitionTimingClass('ease-out'); // For slide-in: faster at the end
        setIsMenuOpen(true);
    }, []);

    // Memoized callback to close the menu
    const closeMenu = useCallback(() => {
        setTransitionTimingClass('ease-in'); // For slide-out: faster at the beginning
        setIsMenuOpen(false);
    }, []);

    // Effect for handling body overflow and click outside functionality
    useEffect(() => {
        const handleOutsideClick = (event) => {
            // Check if the click occurred outside the menu and not on the toggle button itself
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target) &&
                toggleButtonRef.current && 
                !toggleButtonRef.current.contains(event.target)
            ) {
                // If the menu is currently open, close it
                if (isMenuOpen) {
                    closeMenu();
                }
            }
        };

        // Add/remove body overflow and event listener based on menu state
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden'); // Prevent scrolling background
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.body.classList.remove('overflow-hidden'); // Allow scrolling
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        // Cleanup function: This runs when the component unmounts or before the effect re-runs
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            // Ensure overflow is reset in case of component unmount
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMenuOpen, closeMenu]); // Dependencies: Re-run effect if isMenuOpen or closeMenu changes

    return (
        <>
            {/* Toggle Button */}
            {/* <button
                ref={toggleButtonRef} // Attach ref to the button
                onClick={openMenu}
                className="fixed top-6 right-6 z-[1001] bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
            >
                Open Menu
            </button> */}

            <div className='text-gray-100'>
                <MenuButton ref={toggleButtonRef} onClick={openMenu} size={88} strokeWidth={1} className='cursor-pointer w-[36px] h-[36px] md:w-[68px] md:h-[68px] xl:w-[40px] xl:h-[40px] -mt-0.5 xl:-mt-1'/>
            </div>

            {/* Right Side Pop-up Menu */}
            <div
                ref={menuRef} // Attach ref to the menu div
                className={`
                    fixed top-0 right-0 h-screen bg-gray-100 shadow-lg z-[1000]
                    w-full sm:w-9/12 md:w-1/2 lg:w-2/5
                    transition-transform duration-300 
                    ${transitionTimingClass} 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                    flex flex-col justify-between pl-8 lg:pl-20
                `}
            >
                {/* Menu Content */}
                <div className="flex justify-between items-center pt-11 xl:pt-15p text-gray-400">
                    <h2 className={`mt-2 lg:mt-1 text-base lg:text-2xl h-full w-2/3 flex space-x-2 lg:space-x-6  ${playfairDisplay.className}`}>
                        <Link href={"/women"} target="_blank" rel="noopener noreferrer"><div className="text-gray-800">Toronto</div></Link>      
                        <Link href={"/newyork"} target="_blank" rel="noopener noreferrer"><div className="">New York</div></Link>
                        <Link href={"/paris"} target="_blank" rel="noopener noreferrer"><div className="">Paris</div></Link>   
                        <Link href={"/milan"} target="_blank" rel="noopener noreferrer"><div className="">Milan</div></Link>  
                    </h2>
                    <div className='pr-6 xl:pr-15 text-gray-600 w-1/3 flex justify-end'>
                        <XButton onClick={closeMenu} size={88} strokeWidth={1} className='cursor-pointer w-[36px] h-[36px] md:w-[68px] md:h-[68px] xl:w-[40px] xl:h-[40px]'/>
                    </div>
                </div>

                <div className='space-y-8 lg:space-y-12'>
                    <div className={`space-y-2 lg:space-y-4 text-3xl lg:text-5xl text-stone-600 uppercase ${playfairDisplay.className}`}>
                        <Link href={"/women"} target="_blank" rel="noopener noreferrer">
                            <div className="block hover:text-gray-800 transition-colors duration-200">Women</div></Link>
                        <Link href={"/curve"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Curve</div></Link>
                        <Link href={"/men"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Men</div></Link>
                        <Link href={"/image"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Image</div></Link>
                    </div>
                    <div className={`space-y-2 lg:space-y-4 text-xl lg:text-3xl text-stone-600 `}>
                        <Link href={"/philosophy"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Our Philosophy</div></Link>
                        <Link href={"/contact"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Contact Us</div></Link>
                        <Link href={"/become"} target="_blank" rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Become a Model</div></Link>
                    </div>
                </div>

                <div className='w-full'></div>

            </div>
        </>
    );
};

export default RightSideMenu;