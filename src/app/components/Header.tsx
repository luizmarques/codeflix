'use client'
import Image from 'next/image';
import React from "react"
import { useScroll } from '../hooks/useScroll';

const NavLinks = () => (
    <nav>
        <ul className="hidden md:space-x-4 md:flex">
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
        </ul>
    </nav>
)

const UserProfile = () => (
    <div className="flex items-center space-x-2 md:space-x-8">
        <p className="hidden cursor-not-allowed lg:inline">Kids</p>
        <Image 
            src="/Netflix-avatar.png"
            alt="profile"
            width={35} 
            height={35}
            className="cursor-pointer "
        />
    </div>
)

const Logo = () => (
    <Image 
        src= "/Netflix_2015_logo.svg" 
        alt="logo" 
        width={120} 
        height={120}
        className="cursor-pointer"
    />
)

export default function Header() {
    const isScrolled = useScroll();
   
    return(
        <header className={`
            ${isScrolled && 'bg-black'}
            fixed top-0 z-50
            flex w-full items-center 
            justify-between bg-gradient-to-t 
            from-transparent to-black p-2 px-4 
            transition-all lg:px-16 lg:py-4`}
            >

            <div className="flex items-center space-x-2 md:space-x-8">
                <Logo />

                <NavLinks />
            </div>
            <UserProfile />
        </header>
    )
}