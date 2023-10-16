import Style from '../css/QuartaSection.module.css';
import miles from '../img/miles.jpeg';

function QuartaSection(){

    return(
        <section className={Style.quartaSection}>
            
            <div className={Style.caixaTexto}data-aos="fade-down" data-aos-duration="3000">
                <h1 className={Style.txt1}>Peter<span className={Style.destaque2}>Miles</span></h1>

                <h2 className={Style.txt2}>Com o cartão de milhas, você acumula até o <span className={Style.destaque}>DOBRO</span> de milhas, e realiza sua viagem dos <span className={Style.destaque}>sonhos</span>!</h2>

                <button className={Style.bt5}>Peça ja o seu</button>

            </div>

        
            <img src={miles} className={Style.miles}data-aos="fade-down" data-aos-duration="3000"/>

        </section>
    


    )
}

export default QuartaSection;