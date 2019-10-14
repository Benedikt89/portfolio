import React, {Component} from 'react';
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div className={style.navBar}>
                    <div className={style.container}>
                        <h2 className=''>Header</h2>
                    </div>

                    <div className={style.container}>
                        <button className={style.btn}>asd</button>
                        <button className={style.btn}>asd</button>
                        <button className={style.btn}>asd</button>
                        <button className={style.btn}>asd</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
