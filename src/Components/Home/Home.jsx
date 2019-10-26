import React, {Component} from 'react';
import style from './Home.module.css';
import { getHomePageBg } from '../../assets/media.service';


class Home extends Component {

    state = {
        isFetching: false,
        bgPict: null,
        opacity: 0
    };

    componentDidMount() {
        this.setState({isFetching: true});
        getHomePageBg().then((res)=>{
            this.setState({isFetching: false, bgPict: res, opacity: 1})
        });

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
