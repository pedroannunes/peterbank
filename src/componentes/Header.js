import { useEffect, useState } from 'react';
import Style from '../css/Header.module.css';
import logo from '../img/logo.png';

function Header (){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 0){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.addEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <header className={`${Style.header} ${scrolled ? Style.scrolled : ""}`}>
            <img src={logo} className={Style.logoH} />

                <li>Para Você</li>
                <li>Empresas</li>
                <li>O PeterBank</li>
                <li>Atendimento</li>
            
                <button className={Style.btH}>Abra sua conta</button>
                <button className={Style.btH2}>Log-in</button>
                
        </header>


    )
}

export default Header;