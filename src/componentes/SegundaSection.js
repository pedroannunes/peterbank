import Style from '../css/SegundaSection.module.css';
import mulher from '../img/mulher.png';
import logo from '../img/logo.png';

function SegundaSection (){

    return(
        <section className={Style.segundaSection}>
            <img src={mulher} className={Style.mulher} data-aos="fade-right" data-aos-duration="3000" />

            <div className={Style.caixaTxt} data-aos="fade-right" data-aos-duration="3000">
                <h1 className={Style.txt3}>Tenha condições <span className={Style.destaque}>futurísticas</span>,as menores <span className={Style.destaque}>taxas</span>, e melhores <span className={Style.destaque}>vantages</span>!</h1>

                <h2 className={Style.txt4}>Solicite agora mesmo o seu <span className={Style.destaque}>cartão</span> de <span className={Style.destaque}>crédito</span>.</h2>

                <button className={Style.bt4}>Solicitar Cartão</button>

            </div>

            <img src={logo} className={Style.logo} data-aos="fade-right" data-aos-duration="3000"/>


        </section>


    )
}

export default SegundaSection;