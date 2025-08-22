'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';

import { playfairDisplay, cinzel } from '../../fonts';
import { photos } from '../images';

function SearchOverlay({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // Auto-focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const filteredResults = photos.filter(model =>
        model.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-[0.96] flex flex-col">
      <div className='w-full'>
          <div className='flex mx-auto justify-between lg:w-2/3 2xl:w-2/3 items-center pt-8 md:pt-10 px-4 lg:px-0 lg:py-8 xl:pt-16 xl:pb-12 2xl:py-12'>
            <div className='flex items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 md:size-7 xl:size-9 mt-1 lg:mt-3 mr-4 text-zinc-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>

            <div className='flex-grow w-1/3'>
                <input 
                    ref={inputRef}
                    type="text" 
                    placeholder="Search by name..." 
                    className={`w-full text-xl md:text-2xl 2xl:text-4xl py-2 lg:py-3 lg:mx-4 px-0 bg-transparent text-white placeholder-zinc-400 focus:outline-none focus:ring-0 border-b border-gray-400 ${cinzel.className}`} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={handleSearch}
                />
            </div>
            
            <div className='flex justify-end'>
                <button 
                    onClick={onClose} 
                    className="ml-4 text-zinc-400 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 md:size-7 xl:size-9 mt-1 lg:mt-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
          </div>
      </div>

      <div className='mt-2 lg:mt-0 2xl:w-5/6 flex-grow grid mx-auto space-x-2 xl:mb-4 overflow-y-auto'>
        {results.length > 0 ? (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 mx-2'>
            {results.map((model, n) => (
                <Link className='z-10' href={`/women/${model.name}`} key={n}>
                    <Image
                        src={model.profileImage}
                        width={800}
                        height={800}
                        alt={model.fullName}
                    />
                    <div className={`flex justify-center text-center text-xl -mt-10 mb-4 md:text-2xl md:-mt-12 md:mb-4 2xl:text-4xl 2xl:-mt-16 2xl:mb-6 text-white drop-shadow-[0_1px_1px_rgba(100,100,100,1)] ${playfairDisplay.className}`}>
                        {model.fullName}
                    </div>
                </Link>
            ))}
            </div>
        ) : (
            <div className={`text-center text-zinc-400 text-3xl md:text-5xl lg:text-7xl flex items-center justify-center m-auto ${playfairDisplay.className} uppercase`}>No results found.</div>
        )}
      </div>

    </div>
  );
}

export default SearchOverlay;