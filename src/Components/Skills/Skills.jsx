import React, {Component} from 'react';
import style from './Skills.module.css';
import bgPict from './../../Assets/background-picture-3-1080x1920.jpg'

class Skills extends Component {
    render() {
        let BgPict = bgPict;
        return (
            <div className={style.skillsBanner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className={style.skillsContent}>
                        <div className="container borRed">
                            <h2>Skills</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
