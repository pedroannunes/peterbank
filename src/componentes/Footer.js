import Style from '../css/Footer.module.css';
import insta from '../img/iconInsta.png';
import git from '../img/iconGit.png';
import face from '../img/iconFace.png';
import linkedin from '../img/iconLinkedin.png';

function Footer(){

    return(
        <footer>
            <div className={Style.cx1}>
                <h1 className={Style.tituloPeter}>Peter<span className={Style.destaque2}>Bank</span></h1>

                <img src={insta} className={Style.insta} />
                <img src={git} className={Style.git}  />
                <img src={face} className={Style.face} />
                <img src={linkedin} className={Style.linkedin} />

            </div>
            <div className={Style.cx2}>
                <h3>Atendimento</h3> 
                    
                        <p>Rua Tito, 54 Lapa - Sp</p>
                        <p>exemplo@peterbank.com.br</p>
                        <p>(99) 99999-9999</p>
                        <p>Atendimento </p>
                    
            </div>
            <div className={Style.cx3}>
                <h3>Precisa de Ajuda?</h3> 
                    
                    <p>Central de ajuda</p>
                    <p>2° via de boleto</p>
                    <p>Negocio sua dívida</p>
                    <p>Ferramentas de acessibilidade</p>
            </div>
            <div className={Style.cx4}>
                <h3>Outras informações</h3> 
                    
                    <p>Política de Privacidade</p>
                    <p>Termos de uso</p>
                    <p>Trabalhe conosco</p>
                    <p>Nosso Blog</p>

            </div>

        </footer>



    )
    

}

export default Footer;