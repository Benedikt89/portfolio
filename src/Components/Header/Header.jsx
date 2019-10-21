import React, {Component} from 'react';
import style from './Header.module.css'
import { Link, animateScroll as scroll } from "react-scroll";

class Header extends Component {
    render() {
        return (
            <div style={{position: 'relative', width: '100%'}}>
                <div className={style.navBar}>
                    <div className={style.container}>
                        <h3 style={{cursor: 'pointer'}}>Constantine</h3>
                    </div>

                    <div className={style.navButtonsBlock}>
                        <Link to="about"
                              activeClass={style.linkActive}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration= {1500}
                              className={style.link}>ABOUT</Link>
                        <Link to="skills"activeClass={style.linkActive}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration= {1500}
                              className={style.link}>SKILLS</Link>
                        <Link to="works"
                              activeClass={style.linkActive}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration= {1500}
                              className={style.link}>WORKS</Link>
                        <Link to="contacts"
                              activeClass={style.linkActive}
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration= {1500}
                              className={style.link}>CONTACTS</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
