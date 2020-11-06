import React, { useEffect, useRef } from 'react';
import Styles from './navbar.module.scss';
import { Link} from 'react-router-dom';

const NavBar = props => {
    const bars = useRef(null);
    const mobileLinks = useRef(null)
    const closeButtons = useRef(null);

    useEffect(()=>{
        if(bars.current){
            bars.current.addEventListener('click',()=>{
                mobileLinks.current.style.left = '-3px'
                
            });
            closeButtons.current.addEventListener('click',()=>{
                mobileLinks.current.style.left = '101%'
            })

        }
    },[bars])
    return (
        <nav className = {`${Styles.navbar} ${props.class}`}>
            
                <div className = {`${Styles.navbar__mobile}`} ref = {mobileLinks}>
                    <div className = {`${Styles.navbar__mobile__header}`}>
                        <h5>MENU</h5>
                        <Link to = '/' ref = {closeButtons}>
                            <i className = 'fa fa-times-circle-o fa-lg'></i>
                        </Link>
                    </div>
                    <ul className = {`${Styles.navbar__mobile__links} list-unstyled`}>
                        <li>
                            <Link to = '/'>WORK</Link>
                        </li>
                        <li>
                            <Link to = '/'>EXPERTISE</Link>
                        </li>
                        <li>
                            <Link to = '/'>PROCESS</Link>
                        </li>
                        <li>
                            <Link to = '/'>AGENCY</Link>
                        </li>
                        <li>
                            <Link to = '/'>RESOURCES</Link>
                            <i className = {` fa fa-arrow-circle-down ${Styles.navbar__mobile__links__arrow}`}></i>
                        </li>
                        <li>
                            <Link to = '/'>CONTACT</Link>
                        </li>
                        
                    </ul>
                </div>
            <div className = {`${Styles.navbar__container} container`}>
            
                
                <div className = {`${Styles.navbar__logo}`}>
                    <h1><span>K</span>reative <span>K</span>ommit</h1>
                </div>
                <Link className = {`${Styles.navbar__mobilebutton}`} to = '/' ref = {bars}>
                    <i className = 'fa fa-bars fa-lg'></i>
                </Link>
                <ul className = {`${Styles.navbar__links} list-unstyled`}>
                    <li>
                        <Link to = '/work' className = {`${Styles.navbar__links__link}`}>
                            work
                        </Link>
                    </li>
                    <li>
                        <Link to = '/expertise' className = {`${Styles.navbar__links__link}`}>
                            expertise
                        </Link>
                    </li>
                    <li>
                        <Link to = '/process' className = {`${Styles.navbar__links__link}`}>
                            process
                        </Link>
                    </li>
                    <li>
                        <Link to = '/agency' className = {`${Styles.navbar__links__link}`}>
                            agency
                        </Link>
                    </li>
                    <li>
                        <Link to = '/resources' className = {`${Styles.navbar__links__link}`}>
                            resources
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to = '/contact' 
                            className = 
                                {`${Styles.navbar__links__link} ${Styles.navbar__links__linkActive}`}
                        >
                            contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;