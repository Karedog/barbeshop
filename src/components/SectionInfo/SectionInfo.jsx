import  style from "./SectionInfo.module.css"


export default function SectionInfo(){
    return(
        <section>
            <div className={style.info_box}>
                <h1>Bem-Vindo a Barbe Shop</h1>
                <p>Nossa barbearia oferece profissionais de qualidade e
                     estamos prontos para lidar com suas maiores expectativas</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal.
                     Aqui temos uma equipe premiada que demostrou talento de mestres barbeiros em varios concursos de estilo.
                     Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado</p>
                <p className={style.assinatura}>S. Kelly</p>
            </div>
        </section>
    );
}