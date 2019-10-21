import React, {Component} from 'react';
import style from './Skills.module.css';
import BgPict from './../../assets/images/black-city-backgrounds-powerpoint.jpg';
import reactLogo from './../../assets/ico/React.ico';
import htmlLogo from './../../assets/ico/iconfinder_html_169775.png';
import jsLogo from './../../assets/ico/iconfinder_js_282802.ico';
import cssLogo from './../../assets/ico/iconfinder_icon-12-file-css_314563.png';
import tsLogo from './../../assets/ico/iconfinder_icon-76-document-file-html_315697.ico';
import Particles from 'react-particles-js';
import {Fade} from "react-reveal";


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

class Skills extends Component {
    state = {
        skillsItems: [
            {
                id: 101,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...',
            },
            {
                id: 102,
                title: 'JS',
                imgSrc: jsLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            },
            {
                id: 103,
                title: 'CSS',
                imgSrc: cssLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            },
            {
                id: 104,
                title: 'TS',
                imgSrc: tsLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            },
            {
                id: 105,
                title: 'HTML',
                imgSrc: htmlLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            },
            {
                id: 106,
                title: 'Redux',
                imgSrc: reactLogo,
                experience: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
            },
        ]

    };

    render() {

        let skillItems = this.state.skillsItems.map(i =>
            <div className={style.item} key={i.id}>
                <Fade top>
                <div className={style.imageContainer}>
                    <div
                        style={{
                            backgroundImage: `url(${i.imgSrc})`,
                            backgroundSize: 'contain',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.9,
                        }}
                        className={style.image}
                    >
                        <span>React</span>
                    </div>
                </div>
                </Fade>

                <h4>{i.title}</h4>
                <div className={style.container}>
                    <article>{i.experience}</article>
                </div>
            </div>
        );

        return (
            <div id={'skills'} className={style.skillsBanner}>
                <div style={{
                    // backgroundImage: `url(${BgPict})`
                }}
                     className={style.parallaxImg}>
                    <Particles className={style.particles} params={particlesOpt}/>
                    <div className={style.skillsContent}>
                        <div className={style.container}>
                            <h2>PROFESSIONAL SKILLS</h2>
                        </div>

                        <div className={style.line}></div>

                        <div className={style.container}>
                            {skillItems}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
