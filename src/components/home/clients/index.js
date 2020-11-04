import React, { useEffect } from 'react';

import Styles from './clients.module.scss';

const Clients = props => {

    useEffect(()=>{
        const lis = document.querySelectorAll('.'+Styles.clients__list__item);
        console.log(lis,'from lis')
        const handleScroll = (e) => {
            for (let li of lis){
                const bounding = li.getBoundingClientRect();
                if (
                    bounding.top >= 0 &&
                    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    li.style.transform = 'translateX(0)';
                    li.style.opacity = '1';
                }
            }
        }
        document.addEventListener('scroll',handleScroll);
    })
    return (
        <section className  = {`${Styles.clients}`}>
            <div className = {`${Styles.clients__container} container`}>

                <header className = {`${Styles.clients__header}`}>
                    <h4 className = {`${Styles.clients__header__heading}`}>SELECT CLIENTS</h4>
                    
                    <p className = {`${Styles.clients__header__details}`}>
                        We are proud to have some of the most well-known and
                        respected corporate clients – but we love to help 
                        start-ups and new brands too. We aren’t just talk.
                        We are in the game, in a big way, and are ready 
                        to partner with you.
                    </p>
                </header>
                <ul className = {`${Styles.clients__list} list-unstyled`}>
                    <div className = {`${Styles.clients__list__left}`}>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-amazon fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-university fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-cc-diners-club fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-newspaper-o fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                    </div>
                    <div className = {`${Styles.clients__list__right}`}>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-amazon fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-headphones fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                        <li className = {`${Styles.clients__list__item}`}>
                            <i className = {`fa fa-university fa-lg ${Styles.clients.list__item__icon}`}></i>
                        </li>
                    </div>
                   
                    
                </ul>

            </div>
            
        </section>
    )
}

export default Clients;