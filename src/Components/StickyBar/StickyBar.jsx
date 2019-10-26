import React, {Component} from 'react';
import style from './StickyBar.module.css';
import {Fade} from "react-reveal";
import menuBtn from './../../assets/ico/menu-button.png'
import { Link, animateScroll as scroll } from "react-scroll";

class StickyBar extends Component {

    state = {
        opened: false,
        prevScrollpos: window.pageYOffset,
        visible: true
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    hideMenu = () => {
        this.setState({opened: !this.state.opened})
    };

    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = 1600 < currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        let classForBlock =
            this.state.opened ? style.navButtonsBlockOpened : style.navButtonsBlock;

        return (

            <div className={style.navButton}>
                <Fade right big when={this.state.visible}>
                    <button className={style.btnMenu} onClick={this.hideMenu}>
                        <img src={menuBtn}/>
                    </button>
                </Fade>
                <Fade when={this.state.opened}>
                    <div className={classForBlock}>
                        <Fade right big cascade when={this.state.opened}>
                            <Link to="home"
                                  activeClass={style.btnActive}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration= {1500}
                                  onClick={this.hideMenu}
                                  className={style.btn}>HOME</Link>
                            <Link to="about"
                                  activeClass={style.btnActive}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration= {1500}
                                  onClick={this.hideMenu}
                                  className={style.btn}>ABOUT</Link>
                            <Link to="skills"
                                  activeClass={style.btnActive}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration= {1500}
                                  onClick={this.hideMenu}
                                  className={style.btn}>SKILLS</Link>
                            <Link to="works"
                                  activeClass={style.btnActive}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration= {1500}
                                  onClick={this.hideMenu}
                                  className={style.btn}>WORKS</Link>
                            <Link to="contacts"
                                  activeClass={style.btnActive}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration= {1500}
                                  onClick={this.hideMenu}
                                  className={style.btn}>CONTACTS</Link>
                        </Fade>
                    </div>
                </Fade>
            </div>

        )

    }
}

export default StickyBar;