import React, {Component} from 'react';
import '../../App.css';
import style from './Home.module.css'
import BgPict from "../../Assets/backgroundPicture3.jpg";
import mainPict from "../../Assets/mainPict.jpg";

class Home extends Component {
    render() {
        return (
            <div className={style.homeBanner}>
                <div style = {{ backgroundImage: `url(${ BgPict })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.9,
                }}>
                <div className='heroBannerContent dFlex alignItemsCenter jCenter'>

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

export default Home;
