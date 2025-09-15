// components/RightSideMenu.jsx
'use client'; // This directive marks the component as a Client Component in Next.js 13+ App Router
import Link from 'next/link'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X as XButton, Menu as MenuButton } from 'lucide-react';
import { playfairDisplay } from '@/fonts';

const RightSideMenu = ({ exactStyling }) => {
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
            <div className=''>
                <MenuButton exactStyling={exactStyling} ref={toggleButtonRef} onClick={openMenu} size={88} strokeWidth={1} className={`${exactStyling} cursor-pointer md:w-[68px] md:h-[68px] xl:w-[40px] xl:h-[40px] -mt-0.5 xl:-mt-1`}/>
            </div>

            {/* Right Side Pop-up Menu */}
            <div
                ref={menuRef} // Attach ref to the menu div
                className={`
                    fixed top-0 right-0 h-screen bg-gray-100 shadow-lg z-[1000]
                    w-full sm:w-9/12 md:w-1/2 lg:w-1/2 2xl:w-2/5
                    transition-transform duration-300 
                    ${transitionTimingClass} 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} 
                    flex flex-col justify-between pl-8 lg:pl-20
                `}
            >
                {/* Menu Content */}
                <div className="flex justify-between items-center pt-11 xl:pt-15p text-gray-400">
                    <h2 className={`mt-2 lg:mt-1 text-base lg:text-lg 2xl:text-2xl h-full w-2/3 flex space-x-4 xl:space-x-6  ${playfairDisplay.className}`}>
                        <Link href={"/women"}  rel="noopener noreferrer"><div className="text-gray-800">Toronto</div></Link>      
                        <Link href={"/newyork"} rel="noopener noreferrer"><div className="">New York</div></Link>
                        <Link href={"/paris"}  rel="noopener noreferrer"><div className="">Paris</div></Link>   
                        <Link href={"/milan"}  rel="noopener noreferrer"><div className="">Milan</div></Link>  
                    </h2>
                    <div className='pr-6 xl:pr-15 text-gray-600 w-1/3 flex justify-end'>
                        <XButton onClick={closeMenu} size={88} strokeWidth={1} className='cursor-pointer w-[36px] h-[36px] md:w-[68px] md:h-[68px] xl:w-[40px] xl:h-[40px]'/>
                    </div>
                </div>

                <div className='space-y-8 lg:space-y-12'>
                    <div className={`space-y-2 lg:space-y-4 text-3xl lg:text-5xl text-stone-600 uppercase ${playfairDisplay.className}`}>
                        <Link href={"/women"}  rel="noopener noreferrer">
                            <div className="block hover:text-gray-800 transition-colors duration-200">Women</div></Link>
                        <Link href={"/curve"}  rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Curve</div></Link>
                        <Link href={"/men"}  rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Men</div></Link>
                        <Link href={"/image"}  rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Image</div></Link>
                    </div>
                    <div className={`space-y-2 lg:space-y-4 text-xl lg:text-3xl text-stone-600 `}>
                        <Link href={"/philosophy"} rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Our Philosophy</div></Link>
                        <Link href={"/contact"} rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Contact Us</div></Link>
                        <Link href={"/become"} rel="noopener noreferrer"><div  href="#" className="block hover:text-gray-800 transition-colors duration-200">Become a Model</div></Link>
                    </div>
                </div>

                <div className='w-full pb-40 lg:pb-16'>
                    <div className="flex space-x-4">
                        <Link target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer currentcolor">
                                <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                            </svg>
                        </Link>

                        <Link target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                                <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path>
                            </svg>
                        </Link>

                        <Link target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                                <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                            </svg>
                        </Link>

                        <Link target="_blank" href="https://www.instagram.com/tianxiaozhang/" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" className="mt-1 cursor-pointer">
                                <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
};

export default RightSideMenu;