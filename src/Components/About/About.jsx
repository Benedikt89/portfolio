import React, {Component} from 'react';
import '../../App.css';
import style from './About.module.css'
import BgPict from '../../assets/images/black-city-backgrounds-powerpoint.jpg'
import {Fade} from "react-reveal";
import MainPict from "./MainPict";
import ReactCursorPosition from 'react-cursor-position';

class About extends Component {

    state={ show: false };

    render() {
        let email = 'asdasd@ewr.de';
        return (
            <div className={style.banner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className={style.bannerContent}>
                        <ReactCursorPosition>
                            <MainPict />
                        </ReactCursorPosition>

                        <div className={style.container}>
                            <Fade bottom>
                            <h2 className={style.title}>
                                <span>I'm Kostka </span><span> Constantine</span>
                            </h2>
                            <h5>An junior React Developer from Minsk</h5>
                            <article>
                                I design and develop services , specializing in creating
                                stylish, modern websites, web services and online stores.
                                Check out my Portfolio
                            </article>
                            </Fade>
                            <div className={style.containerIform}>
                                <Fade bottom cascade>
                                <span>birthday: 21 april 1989</span>
                                <span>Age: 30</span>
                                <span>Residence: Minsk, Belarus</span>
                                <span>E-mail: {email}</span>
                                </Fade>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;
