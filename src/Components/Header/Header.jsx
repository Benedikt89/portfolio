import React, {Component} from 'react';
import style from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={style.navBar}>
                <div>
                    <h2 className=''>Header</h2>
                </div>

                <div className={style.navButtons}>
                    <button>asd</button>
                    <button>asd</button>
                    <button>asd</button>
                    <button>asd</button>
                </div>
            </div>
        );
    }
}

export default Header;
