import Style from '../css/TerceiraSection.module.css';
import peter from '../img/2.jpg';

function TerceiraSection(){

    return(
        <section className={Style.terceiraSection}>
            
            <div className={Style.caixaTexto}data-aos="fade-up" data-aos-duration="3000">
                <h1 className={Style.txt1}>Peter<span className={Style.destaque2}>Bank</span> é uma <span className={Style.destaque}>FINTECH</span>, que visa auxiliar todo o seu público  de forma <span className={Style.destaque}>objetiva</span> e <span className={Style.destaque}>dinâmica</span>.</h1>

                <h2 className={Style.txt2}>Através de um atendimento personalizado e proximo de nossos clientes, visamos cada vez mais trazer atualidades, e melhores condições e funcionalidades para os PeterBanker’s.</h2>

            </div>

        
            <img src={peter} className={Style.peter} data-aos="fade-up" data-aos-duration="3000"/>

        </section>
    


    )
}

export default TerceiraSection;