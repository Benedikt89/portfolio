import React, {Component} from 'react';
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div style={{position: 'relative', width: '100%'}}>
                <div className={style.navBar}>
                    <div className={style.container}>
                        <h3 style={{cursor: 'pointer'}}>Constantine</h3>
                    </div>

                    <div className={style.navButtonsBlock}>
                        <button className={style.btn}>HOME</button>
                        <button className={style.btn}>ABOUT</button>
                        <button className={style.btn}>SKILLS</button>
                        <button className={style.btn}>WORKS</button>
                        <button className={style.btn}>CONTACTS</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
