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
                        <a>
                            <img src={fIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a>
                            <img src={gitIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a>
                            <img src={linkedIco}/>
                        </a>
                    </span>
                    <span className={style.linkSocial}>
                        <a>
                            <img src={skypeIco}/>
                        </a>
                    </span>
                </div>
                <hr />
                <div className={style.container}>
                    <h6>@Copyright My d</h6>
                </div>
            </div>
        );
    }
}

export default Footer;
