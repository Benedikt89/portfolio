import React, {Component} from 'react';
import style from './StickyBar.module.css';
import { Fade } from "react-reveal";
import menuBtn from './../../assets/ico/menu-button.png'

class StickyBar extends Component {

    state={
        opened: false,
    }

    hideMenu = () =>{
        this.setState({opened: !this.state.opened})
    };

    render() {
        let classForBlock =
            this.state.opened ? style.navButtonsBlockOpened : style.navButtonsBlock;

        return (
            <div className={style.navButton}>

                <button className={style.btnMenu} onClick={this.hideMenu}>
                    <img src={menuBtn} />
                </button>

                <Fade when={this.state.opened}>
                    <div className={classForBlock}>
                        <Fade right big cascade when={this.state.opened}>
                        <button className={style.btn}>HOME</button>
                        <button className={style.btn}>ABOUT</button>
                        <button className={style.btn}>SKILLS</button>
                        <button className={style.btn}>WORKS</button>
                        <button className={style.btn}>CONTACTS</button>
                        </Fade>
                    </div>
                </Fade >
            </div>
        )

    }
}

export default StickyBar;