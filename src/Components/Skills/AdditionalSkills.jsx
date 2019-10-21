import React, {Component} from 'react';
import style from './Skills.module.css';
import bgPict from '../../assets/images/fsnelqQAkUA.jpg';

class AdditionalSkills extends Component {

    render() {
        return (

            <div className={style.banner}>
                <div style={{
                    backgroundImage: `url(${bgPict})`,
                }} className={style.parallaxImg}>
                    <div className={style.bannerContent}>
                        <div className={style.container}>



                            <h4>About Me</h4>
                            <hr/>
                            <div className={style.container}>
                                <div className={style.containerCol}>
                                    Story development
                                    <span>
                                    Creating and supporting project documentation.
                                </span>
                                </div>
                                <div className={style.containerCol}>
                                    Self-starter
                                    <span>
                                   Organized material, determined area of emphasis, and wrote stories according to prescribed editorial style and format standards.
                                </span>
                                </div>
                                <div className={style.containerCol}>
                                    Project management
                                    <span>
                                   Supervised 6 staff, including offering feedback and enforcing deadlines.
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdditionalSkills;
