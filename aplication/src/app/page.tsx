
import startEngine from "./engine/engine.js";
import React from "react";
export default function Home() {
  startEngine();

  return (
    <main className="h-screen flex w-screen bg-cover bg-no-repeat bg-[url('../../public/image5.svg')]">
      <form className="flex justify-center w-2/5 ml-4 h-full flex-col">
        <div className="h-5/6 flex gap-2 bg-white bg-opacity-25 rounded-lg justify-center flex-col">
        <strong className="flex text-3xl justify-center mb-2">Login</strong>
        <fieldset className="flex items-center flex-col">
          <input placeholder="Username" className="w-4/5 p-2 rounded-lg"></input>
        </fieldset>

        <fieldset className="flex items-center flex-col">
          <input placeholder="Senha" className="w-4/5 p-2 rounded-lg"></input>
        </fieldset>
        
        <fieldset className="flex items-end flex-col">
          <strong className="flex mr-16">Esqueceu sua senha?</strong>
        </fieldset>

        <button></button>
        </div>
      </form>
    </main>
  );
}
