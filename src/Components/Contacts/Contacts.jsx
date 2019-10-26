import React, {Component} from 'react';
import style from './Contacts.module.css'
import bgPict from '../../assets/images/fsnelqQAkUA.jpg'

class Contacts extends Component {
    render() {
        return (
            <div className={style.banner} id={"contacts"}>
                <div style={{
                    backgroundImage: `url(${bgPict})`,
                }} className={style.parallaxImg}>
                    <div className={style.bannerContent}>
                        <div className={style.container}>
                        <h2 className=''>CONTACTS</h2>
                        <div className={style.containerCol}>
                            <div className={style.table}>
                            <div>
                                <span>
                                    CV
                                </span>
                                <span>
                                    <a href={'https://github.com/Benedikt89'}>https://github.com/Benedikt89</a>
                                </span>
                            </div>
                            <div>
                                <span>GIT</span>
                                <span>
                                    <a href={'https://github.com/Benedikt89'}>https://github.com/Benedikt89</a>
                                </span>
                            </div>
                            <div>
                                <span>Velcom</span>
                                <span>
                                    <a>+375 29 374-32-28</a>
                                </span>
                            </div>
                                <div>
                                    <span>MTS</span>
                                    <span>
                                    <a>+375 33 685-81-21</a>
                                </span>
                                </div>
                            <div>
                                <span>Email</span>
                                <span>
                                    <a>constantine.kostka@gmail.com</a>
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
