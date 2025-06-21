'use client'

import Image from "next/image";
import imgLogo from "../../../public/barbearia.png"
import { useState } from "react";

export default function Header(){
    const [temaEscuro, setTemaEscuro] = useState(false)

function TrocarTema(){
    setTemaEscuro(!temaEscuro)
}
    return (
        <header>
            <div>
                <Image src={imgLogo}></Image>
                <button onClick={TrocarTema}>
                    {temaEscuro?"img1":"img2"}
                </button>
            </div>
        </header>
    );
}