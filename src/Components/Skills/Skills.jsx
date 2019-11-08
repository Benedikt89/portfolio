import React, {Component} from 'react';
import style from './Skills.module.css';
import reactLogo from './../../assets/ico/React.ico';
import htmlLogo from './../../assets/ico/iconfinder_html_169775.png';
import jsLogo from './../../assets/ico/iconfinder_js_282802.ico';
import cssLogo from './../../assets/ico/iconfinder_icon-12-file-css_314563.png';
import tsLogo from './../../assets/ico/iconfinder_icon-76-document-file-html_315697.ico';
import {Fade} from "react-reveal";


// const particlesOpt = {
//     particles : {
//         number: {
//             value: 120,
//             density: {
//                 enable: true,
//                 value_area: 800,
//             }
//         }
//     }
// };

class Skills extends Component {
    state = {
        skillsItems: [
            {
                id: 101,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'Worked with projects with ReactJS for last six months. Starting from First to last Component',
            },
            {
                id: 106,
                title: 'Redux',
                imgSrc: reactLogo,
                experience: 'Used to work with Redux state management library',
            },
            {
                id: 104,
                title: 'Thunk',
                imgSrc: tsLogo,
                experience: 'Composes redux library with thunk middleware to work with API.',
            },
            {
                id: 102,
                title: 'JS',
                imgSrc: jsLogo,
                experience: 'Have experience with native JS on projects running on legacy code.',
            },
            {
                id: 103,
                title: 'CSS',
                imgSrc: cssLogo,
                experience: 'Used ClassNames in react and css modules. Also worked with bootstrap library.',
            },
            {
                id: 105,
                title: 'HTML',
                imgSrc: htmlLogo,
                experience: 'Have some knowledge about HTML.',
            },

        ]

    };

    render() {

        let skillItems = this.state.skillsItems.map(i =>
            <div className={style.item} key={i.id}>
                <Fade>
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
