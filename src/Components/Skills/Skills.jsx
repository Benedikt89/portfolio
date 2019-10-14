import React, {Component} from 'react';
import style from './Skills.module.css';
import BgPict from './../../assets/images/code-Wp.jpg'
import reactLogo from './../../assets/images/redux.svg'


class Skills extends Component {
    state = {
        skillsItems: [
            {
                id: 101,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
            {
                id: 102,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
            {
                id: 103,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
            {
                id: 104,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
            {
                id: 105,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
            {
                id: 106,
                title: 'React',
                imgSrc: reactLogo,
                experience: 'none',
            },
        ]

    };

    render() {

        let skillItems = this.state.skillsItems.map(i =>
            <div className={style.item} key={i.id}>
                <div
                    style={{backgroundImage: `url(${i.imgSrc})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',}}
                    className={style.image}
                ><span>React</span></div>

                    <h4>{i.title}</h4>
                <div className={style.container}>
                    <span>{i.experience}</span>
                </div>
            </div>
        );

        return (
            <div className={style.skillsBanner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`}}
                     className={style.parallaxImg}>
                    <div className={style.skillsContent}>
                        <div>
                            <h2>PROFESSIONAL SKILLS</h2>
                        </div>

                        <div className={style.container}>
                            {skillItems}
                        </div>

                        <hr />

                        <h3>MORE SKILLS</h3>
                        <div className={style.container}>
                            <div className={style.containerCol}>
                                asdasdasd
                            </div>
                            <div className={style.containerCol}>
                                asdasdasd
                            </div>
                            <div className={style.containerCol}>
                                asdasdasd
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
