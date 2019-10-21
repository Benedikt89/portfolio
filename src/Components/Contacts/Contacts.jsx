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
                            <tr>
                                <td>
                                    CV
                                </td>
                                <td>
                                    <a>https://github.com/Benedikt89</a>
                                </td>
                            </tr>
                            <tr>
                                <td>GIT</td>
                                <td>
                                    <a>https://github.com/Benedikt89</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>
                                    <a>+375 29 3743228</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <a>constantine.kostka@gmail.com</a>
                                </td>
                            </tr>
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
