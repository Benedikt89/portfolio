import React, {Component} from 'react';
import '../../App.css';
import style from './About.module.css'
import BgPict from '../../assets/images/woodBg.jpg'
import mainPict from './../../assets/images/avtar-01.jpg'

class About extends Component {
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
                        <div className={style.mainPict}>
                            <img src={mainPict}/>
                        </div>

                        <div className={style.container}>
                            <h2 className={style.title}>
                                I'm <span> Constantine Kostka
                            </span
                            ></h2>
                            <h5>A Lead UX & UI designer based in Canada</h5>
                            <article>
                                I design and develop services for customers of all sizes, specializing in creating
                                stylish, modern websites, web services and online stores. My passion is to design
                                digital user experiences through the bold interface and meaningful interactions. Check
                                out my Portfolio
                            </article>
                            <div className={style.containerIform}>
                                <span>birthday: 21 april 1989</span>
                                <span>Age: 30</span>
                                <span>Residence: Minsk, Belarus</span>
                                <span>E-mail: {email}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default About;
