'use client'
import style from "./Header.module.css"
import Image from "next/image";
import imgLogo from "../../../public/barbearia.png"
import { useState } from "react";
import { GrSolaris } from "react-icons/gr";
import { FiMoon } from "react-icons/fi";

export default function Header(){
    const [temaEscuro, setTemaEscuro] = useState(false)

function TrocarTema(){
    setTemaEscuro(!temaEscuro)
}

    return (
        <header className={`${temaEscuro ? style.tema_escuro : ''}`}>
            <div className={style.header_box}>
                <Image src={imgLogo} className={style.image_logo } alt="logo da barbearia, rosto com uma lamina em casa lado"></Image>
                <button onClick={TrocarTema} className={style.button_tema}>
                    {temaEscuro? <FiMoon className={style.icon} fill="white"/>:<GrSolaris className={style.icon}/>}
                </button>
            </div>
        </header>
    );
}
