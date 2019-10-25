import React, {Component} from 'react';
import style from './Footer.module.css';
import fIco from './../../assets/ico/Circles-Facebook.ico';
import gitIco from './../../assets/ico/Circles-GitHub.ico';
import linkedIco from './../../assets/ico/Circles-LinkedIn.ico';
import skypeIco from './../../assets/ico/Circles-Skype.ico';

class Footer extends Component {
    render() {


        return (
            <div  className={style.container}>
                <div className={style.container}>
                    <h5>Constantine Kostka</h5>
                </div>
                <hr />
                <div className={style.container}>
                    <span className={style.linkSocial}>
                        <a href={'https://www.facebook.com/konstantsin.kostka'}>
                            <img src={fIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a href={'https://github.com/Benedikt89'}>
                            <img src={gitIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a href={'https://www.linkedin.com/in/constantine-kostka-0ba16318b/'}>
                            <img src={linkedIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a href={'https://t.me/ConstantineKostka'}>
                            <img src={skypeIco}/>
                        </a>
                    </span>
                </div>
                <hr />
                <div className={style.containerCol}>
                    <span>+375 33 685-81-21</span>
                    <span>+375 29 374-32-28</span>
                    <h6>Call me if you have any questions.</h6>
                </div>
            </div>
        );
    }
}

export default Footer;
