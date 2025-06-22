import  style from "./SectionInfo.module.css"


export default function SectionInfo(){
    return(
        <section className={style.section_info}>
            <div className={style.info_box}>
                <h1 className={style.title}>Bem-Vindo a Barbe Shop</h1>
                <p className={style.text}>Nossa barbearia oferece profissionais de qualidade e
                     estamos prontos para lidar com suas maiores expectativas</p>
                <p className={style.text}>Nossos serviços são dedicados ao seu sucesso pessoal.
                     Aqui temos uma equipe premiada que demostrou talento de mestres barbeiros em varios concursos de estilo.
                     Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado</p>
                <p className={style.assinatura}>S. Kelly</p>
            </div>
        </section>
    );
}