import React from 'react';
import Styles from './connect.module.scss';

const Connect = props =>{
    return (
        <section className = {`${Styles.connect}`}>
            <div className = {`${Styles.connect__container} container`}>
                <div className = {Styles.connect__content}>
                    <div className = {Styles.connect__content__line}>
                        <div className = {Styles.connect__content__line__icon}>
                            <i className ={`fa fa-link fa-lg`}></i>
                        </div>
                        <div 
                            className =
                                {`${Styles.connect__content__line__circleTop} ${Styles.connect__content__line__circle}`}
                        >
                            CREATIVE
                        </div>
                        <div 
                            className =
                                {`${Styles.connect__content__line__circleBottom} ${Styles.connect__content__line__circle}`}
                        >
                            EVOLVE
                        </div>
                        <div className = {`${Styles.connect__content__line__arrow}`}>
                            <i className = 'fa fa-arrow-circle-down fa-lg'></i>
                        </div>
                    </div>
                    <div className = {`${Styles.connect__content__content}`}>
                        <h4 className = {`${Styles.connect__content__content__heading}`}>CONNECT</h4>
                        <p className = {`${Styles.connect__content__content__span}`}>YOU, KREATIVE KOMMIT & THE AUDIENCE</p>
                        <p className = {`${Styles.connect__content__content__text}`}>
                            We believe the most effective connections are emotional.
                            People know it when they feel it.
                        </p>
                        <br />
                        <br />
                        <p className = {`${Styles.connect__content__content__text}`}>
                            Our web design and development agency in Greater Manchester helps you 
                            connect with your audience in exciting and engaging ways.
                            We focus on your success by defining your needs
                            and achieving your goals
                        </p>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Connect;