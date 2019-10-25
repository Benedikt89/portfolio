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
                            <table className={style.table}>
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
                                <span>Phone</span>
                                <span>
                                    <a>+375 29 3743228</a>
                                </span>
                            </div>
                            <div>
                                <span>Email</span>
                                <span>
                                    <a>constantine.kostka@gmail.com</a>
                                </span>
                            </div>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
