import React, {Component} from 'react';
import style from './Contacts.module.css'
import bgPict from '../../assets/images/code-Wp.jpg'

class Contacts extends Component {
    render() {
        return (
            <div className={style.banner}>
                <div style={{
                    backgroundImage: `url(${bgPict})`,
                }} className={style.parallaxImg}>
                    <div className={style.bannerContent}>
                        <div className={style.container}>
                        <h2 className=''>CONTACTS</h2>
                        <div className={style.containerCol}>
                            <span>CV</span>
                            <span>GIT</span>
                            <span>Phone</span>
                            <span>Email</span>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
