import React,{useEffect} from 'react';
import Styles from './header.module.scss';
import NavBar from '../../shared/navbar';

const Header = props => {
    useEffect(() => {
        const nav = document.querySelector(`.${Styles.nav}`);
        console.log(nav)
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
    return (
        <header className = {`${Styles.header}`}>
            
            <NavBar class = {Styles.nav}/>
            <p>
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