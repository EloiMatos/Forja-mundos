import {
  ArrowForward,
  Instagram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-between w-screen bg-cover bg-no-repeat bg-[url('../../public/image5.svg')]">
      <form className="flex justify-center w-2/5 ml-4 h-full flex-col">
        <div className="h-5/6 flex gap-2 bg-white bg-opacity-25 rounded-lg justify-center flex-col">
          <strong className="flex text-3xl justify-center mb-2">
            Fazer Login
          </strong>
          <fieldset className="flex items-center flex-col">
            <input
              placeholder="NOME DO USUÁRIO"
              className="w-4/5 p-2 rounded-lg"
            ></input>
          </fieldset>

          <fieldset className="flex items-center flex-col">
            <input placeholder="SENHA" className="w-4/5 p-2 rounded-lg"></input>
          </fieldset>

          <fieldset className="flex items-end flex-col">
            <strong className="flex mr-16">Esqueceu sua senha?</strong>
          </fieldset>

          <Link className="flex justify-center" href={"/worldsPage"}>
            <IconButton className="bg-white bg-opacity-50 rounded-xl">
              <ArrowForward />
            </IconButton>
          </Link>

          <strong className="flex mt-12 gap-2 justify-center text-xl">
            Ainda não tem conta?
            <Link className="underline" href="/register">
              Crie agora!
            </Link>
          </strong>
        </div>
      </form>
      <nav>
        <ul className="flex rounded-xl flex-col mt-4 mr-4 bg-white bg-opacity-25">
          <Link href={"./"}>
            <IconButton size="large">
              <Twitter/>
            </IconButton>
          </Link>
          <Link href={"./"}>
            <IconButton size="large">
              <Instagram />
            </IconButton>
          </Link>
          <Link href={"./"}>
            <IconButton size="large">
              <WhatsApp />
            </IconButton>
          </Link>
        </ul>
      </nav>
    </main>
  );
}
