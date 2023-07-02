import React from 'react';
import Link from 'next/link';
import {Container} from "@mui/material";

export function Navbar() {
  return (
    <Container className="flex items-center justify-between">
      <Link href="/worldsPage" className="ml-5 flex items-center">
        <img
          className="h-12 w-12 hover:bg-indigo-400 rounded-full"
          src="https://cdn.discordapp.com/attachments/769880063315148861/1111807693489979422/image.png"
          alt="Logo"
        />
        <p className="ml-2 text-white font-bold text-xl">forjamundo</p>
      </Link>
    </Container>
  );
}