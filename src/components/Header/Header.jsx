'use client'
import style from "./Header.module.css"
import Image from "next/image";
import imgLogo from "../../../public/barbearia.png"
import { useState , useEffect} from "react";
import { GrSolaris } from "react-icons/gr";
import { FiMoon } from "react-icons/fi";

export default function Header(){
    const [temaEscuro, setTemaEscuro] = useState(false)

function TrocarTema(){
    setTemaEscuro(!temaEscuro)
    if(!temaEscuro){
        document.querySelector('body').classList.add('tema_escuro')
        document.querySelector('body').classList.remove('tema_claro')
    }else{
        document.querySelector('body').classList.remove('tema_escuro')
        document.querySelector('body').classList.add('tema_claro')

    }
}

    return (
        <header>
            <div className={style.header_box}>
                <Image src={imgLogo} className={style.image_logo } alt="logo da barbearia, rosto com uma lamina em casa lado"></Image>
                <button onClick={TrocarTema} className={style.button_tema}>
                    {temaEscuro? 
                        <GrSolaris className={style.icon} fill="white"/>:
                        <FiMoon className={style.icon} />}
                </button>
            </div>
        </header>
    );
}
