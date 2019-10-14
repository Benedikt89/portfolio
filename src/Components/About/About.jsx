import React, {Component} from 'react';
import '../../App.css';
import style from './About.module.css'
import BgPict from '../../assets/images/woodBg.jpg'
import mainPict from './../../assets/images/avtar-01.jpg'

class About extends Component {
    render() {
        return (
            <div className={style.banner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                }}>
                    <div className={style.bannerContent}>

                        <h2 className=''>Constantine</h2>
                        <div className={style.mainPict}>
                            <img src={mainPict}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;
