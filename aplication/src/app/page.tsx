"use client";
import { Button, IconButton } from "@mui/material";
import startEngine from "./engine/engine.js";
import { ArrowForward, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import Link from "next/link.js";


export default function Home() {
  startEngine();

  return (
    <main className="h-screen flex bg-no-repeat bg-cover w-screen justify-between bg-[url('../../public/image5.svg')]">
      <form className="flex justify-center w-2/5 ml-4 h-full flex-col">
        <div className="h-5/6 flex gap-2 bg-white bg-opacity-25 rounded-lg justify-center flex-col">
          <strong className="flex text-3xl justify-center mb-2">Login</strong>
          <fieldset className="flex items-center flex-col">
            <input
              placeholder="Username"
              className="w-4/5 p-2 rounded-lg"
            ></input>
          </fieldset>

          <fieldset className="flex items-center flex-col">
            <input placeholder="Senha" className="w-4/5 p-2 rounded-lg"></input>
          </fieldset>

          <fieldset className="flex items-end flex-col">
            <strong className="flex mr-16">Esqueceu sua senha?</strong>
          </fieldset>

          <fieldset className="flex items-center flex-col">
            <Button variant="contained" startIcon={<ArrowForward />}>
              Enter
            </Button>
          </fieldset>
        </div>
      </form>
      <nav>
        <ul className="flex rounded-xl flex-col mt-4 mr-4 bg-white bg-opacity-25">
            <Link href={"./"}><IconButton size="large"><Twitter/></IconButton></Link>
            <Link href={"./"}><IconButton size="large"><Instagram/></IconButton></Link>
            <Link href={"./"}><IconButton size="large"><WhatsApp/></IconButton></Link>
        </ul>
      </nav>
    </main>
  );
}
