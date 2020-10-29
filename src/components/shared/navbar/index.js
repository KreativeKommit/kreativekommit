import React from 'react';
import Styles from './navbar.module.scss';
import { Link} from 'react-router-dom';

const NavBar = props => {
    return (
        <nav className = {`${Styles.navbar} ${props.class}`}>
            <div className = {`${Styles.navbar__container} container`}>
                <div className = {`${Styles.navbar__logo}`}>
                    <h1><span>K</span>reative <span>K</span>ommit</h1>
                </div>
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