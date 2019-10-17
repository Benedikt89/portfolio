import React, {Component} from 'react';
import style from './Home.module.css';
import BgPict from '../../assets/images/code-Wp.jpg';
import Particles from 'react-particles-js';


const particlesOpt = {
    particles : {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 800,
            }
        }
    }
};

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
                    <Particles className={style.particles} params={particlesOpt}/>
                    <div className={style.bannerContent}>
                        <div className={style.discription}>
                            <span>
                                Hello, my name is
                            </span>
                            <h2 className={style.title}>
                                Kostka <span>Constantine</span>
                            </h2>

                            <span>
                                Junior React developer.
                            </span>

                            <div>
                                <button className={style.downloadBtn}>
                                    DOWNLOAD CV
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
