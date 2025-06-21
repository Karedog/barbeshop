'use client'

import Image from "next/image";
import imgLogo from "../../../public/barbearia.png"
import { useState } from "react";
import { GrSolaris } from "react-icons/gr";
import { BsMoonStars } from "react-icons/bs";

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
                    {temaEscuro? <GrSolaris/>:<BsMoonStars/>}
                </button>
            </div>
        </header>
    );
}
