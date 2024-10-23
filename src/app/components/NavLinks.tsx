<<<<<<< HEAD
'use client';
import Link from 'next/link';
export const NavLinks = () => (
  <nav>
=======
'use client'
import React from "react";
import Link from "next/link";

export const NavLinks = () => (
    <nav>
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
    <ul className='hidden md:flex md:space-x-4'>
      <Link href='/search?genre=Comedy'>Comedy</Link>
      <Link href='/search?genre=Action'> Action </Link>
      <Link href='/search?genre=Adventure'>Adventure</Link>
      <Link href='/search?genre=Animation'> Animation </Link>
    </ul>
  </nav>
<<<<<<< HEAD
);
=======
)
>>>>>>> 2e8427da4f61760ec89951d4975e609419fa157a
