import React,{useEffect} from 'react';
import Styles from './header.module.scss';
import NavBar from '../../shared/navbar';

const Header = props => {
    useEffect(() => {
        const nav = document.querySelector(`.${Styles.nav}`);
        
        const animateNav = (e)=>{
            const navRect = nav.getBoundingClientRect();  
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const navTop = navRect.top + scrollTop;
            if(navTop>100){
                nav.style.backgroundColor = '#212125';
                nav.style.transform = 'translateY(0)'
                nav.style.transition = 'all .20s linear';
            }
            else{
                nav.style.backgroundColor = 'transparent';
                nav.style.transform = 'translateY(10px)'
                nav.style.transition = 'all .20s linear';

            }
        }
        window.addEventListener('scroll',animateNav)

        return ()=>{
            window.removeEventListener('scroll',animateNav)
        }
        
    }, [])
    // animate haeder info after appearing in the screen

    useEffect(()=>{
        const info = document.querySelector('.'+Styles.header__info);
       setTimeout(()=> info.style.transform = 'translateX(0)',1000) 
            const animateInfo = (e) => {
                const infoRect = info.getBoundingClientRect();

                if(
                    infoRect.top>= 0 &&
                    infoRect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                ){
                    info.style.transform = 'translateX(0)';
                }
                else{
                    info.style.transform = 'translateX(80%)';
                }
            }
            window.addEventListener('scroll',animateInfo);

        return ()=>{
            window.removeEventListener('scroll',animateInfo)
        }
    },[])
    return (
        <header className = {`${Styles.header}`}>
            
            <NavBar class = {Styles.nav}/>
            <p className = {Styles.header__info}>
                BIG IDEAS,<br />
                CREATIVE PEOPLE,<br />
                NEW TECHNOLOGY.
            </p> 
            
            <div className = {`${Styles.header__overlay}`}>
               
            </div>
            
        </header>
    )
}
export default Header;