import React, {Component} from 'react';
import '../../App.css';
import style from './Home.module.css'
import BgPict from '../../assets/images/code-Wp.jpg'

class Home extends Component {
    render() {
        return (
            <div className={style.banner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className={style.bannerContent}>

                        <h2 className={style.title}>Constantine</h2>
                        <div className={style.mainPict}>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
