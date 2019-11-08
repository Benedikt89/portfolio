import React, {Component} from 'react';
import style from './Home.module.css';
import BgPict from './../../assets/images/home.jpg';


class Home extends Component {

    state = {
        isFetching: false,
        bgPict: 'https://steamuserimages-a.akamaihd.net/ugc/918040807623446845/657A1F646213A86D0AC6D5670408B769441D17AC/',
        opacity: 0
    };

    bgImage = new Image();

    componentDidMount() {
        this.bgImage.src = BgPict;
        this.bgImage.onload = () => {
            this.setState({isFetching: false, bgPict: this.bgImage.src, opacity: 1});
        }
    }

    render() {

        return (
            <div className={style.banner} id={"home"}>
                <div style={{
                    backgroundImage: `url(${this.state.bgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    opacity: `${this.state.opacity}`,
                    transition: `opacity 3s`,
                }}>

                    <div className={style.bannerContent}>
                        <div className={style.discription}>
                            <span>
                                Hello, my name is
                            </span>
                            <h2 className={style.title}>
                                Kostka <span>Constantine</span>
                            </h2>

                            <span>
                                Junior React developer.
                            </span>

                            <div>
                                <a className={style.downloadBtn} href="https://jobs.tut.by/applicant/resumes/view?resume=5b7d42f0ff076d1c500039ed1f517144687851">
                                    DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Home;
