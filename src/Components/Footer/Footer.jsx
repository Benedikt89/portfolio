import React, {Component} from 'react';
import style from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div  className={style.container}>
                <div className={style.container}>
                    <h6>Constantine Kostka</h6>
                </div>
                <hr />
                <div className={style.container}>
                    <span>asd</span>
                    <span>asd</span>
                    <span>asd</span>
                    <span>asd</span>
                </div>

            </div>
        );
    }
}

export default Footer;
