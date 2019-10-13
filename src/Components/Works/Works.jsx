import React, {Component} from 'react';
import style from './Works.module.css';
import BgPict from "../../Assets/backgroundPicture3.jpg";

class Works extends Component {
    render() {
        return (
            <div className={style.worksBanner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className={style.worksContent}>
                        <h2 className=''>Works</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Works;
