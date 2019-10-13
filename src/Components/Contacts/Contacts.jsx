import React, {Component} from 'react';
import style from './Contacts.module.css'
import bgPict from './../../Assets/background-picture1080x1920.jpg'

class Contacts extends Component {
    render() {
        return (
            <div className={style.banner}>
                <div style = {{ backgroundImage: `url(${ bgPict })`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className={style.bannerContent}>
                    <h2 className=''>Contacts</h2>
                </div>
                </div>
            </div>
        );
    }
}

export default Contacts;
