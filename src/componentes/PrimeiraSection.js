import Style from '../css/PrimeiraSection.module.css';
import app from '../img/app.png';

import {React, useEffect} from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function PrimeiraSection (){

    useEffect(() => {
        AOS.init();
      }, [])


    return(

        <section className={Style.primeiraSection}>
            
            <div className={Style.caixaTexto}data-aos="fade-down" data-aos-duration="3000">
                <h1 className={Style.txt1}>O banco do <span className={Style.destaque}>futuro</span>, na palma da sua <span className={Style.destaque}>mão</span>!</h1>

                <h2 className={Style.txt2}>Faça sua conta agora, e aproveite <span className={Style.destaque}>hoje</span> o <span className={Style.destaque}>amanhã</span>!</h2>

            </div>

            <button className={Style.bt1}> Baixar App</button>

            <img src={app} className={Style.app} data-aos="fade-right" data-aos-duration="3000"/>

        </section>
    

    )

}

export default PrimeiraSection;