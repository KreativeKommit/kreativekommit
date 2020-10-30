import React from 'react';

import Styles from './clients.module.scss';

const Clients = props => {
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
                </ul>

            </div>
            
        </section>
    )
}

export default Clients;