import React, {Component} from 'react';
import style from './Works.module.css';
import BgPict from './../../assets/images/woodBg.jpg'
import reactLogo from "../../assets/ico/React.ico";
import dogGameImg from "../../assets/images/dog-centre.jpg";

class Works extends Component {
    state = {
        worksItems: [
            {
                id: 201,
                title: 'Social-Network',
                techs: ['all', 'react', 'redux'],
                imgSrc: reactLogo,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/'
            },
            {
                id: 302,
                title: 'Organizer Online',
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: reactLogo,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 403,
                title: 'Node server',
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: reactLogo,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/'
            },
            {
                id: 504,
                title: 'Bacery Shop',
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: reactLogo,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 605,
                title: 'Dog-Game',
                techs: ['all', 'react'],
                imgSrc: dogGameImg,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 706,
                title: 'Counter',
                techs: ['all', 'react', 'redux'],
                imgSrc: reactLogo,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
        ],
        selectedFilter: 'all',

    };

    filterSelect = (filter) => {
        this.setState({selectedFilter: filter})
    };

    render() {

        let workItems = this.state.worksItems
            .filter(wi => wi.techs.includes(this.state.selectedFilter))
            .map(i =>
                <div style={{
                    backgroundImage: `url(${i.imgSrc})`,
                    backgroundPosition: 'top center',
                    backgroundRepeat: 'no-repeat',
                }} className={style.projectImageWrapper} key={i.id}>
                    <div className={style.projectContent}>
                        <h4>{i.title}</h4>
                        <div className={style.container}>
                            <span className={style.link}> code </span>
                            <span className={style.link}> project </span>
                        </div>
                    </div>
                </div>
            );

        return (
            <div className={style.worksBanner}>
                <div style={{
                    backgroundImage: `url(${BgPict})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div className={style.worksContent}>
                        <div>
                            <h2>LATEST WORKS</h2>
                        </div>
                        <div className={style.line}></div>
                        <div className={style.filterBtnRow}>
                            <button
                                className={style.filterBtn}
                                onClick={() => {
                                    this.filterSelect('all')
                                }}
                            >All
                            </button>
                            <button
                                className={style.filterBtn}
                                onClick={() => {
                                    this.filterSelect('react')
                                }}
                            >React
                            </button>
                            <button
                                className={style.filterBtn}
                                onClick={() => {
                                    this.filterSelect('css')
                                }}
                            >Css
                            </button>
                            <button
                                className={style.filterBtn}
                                onClick={() => {
                                    this.filterSelect('redux')
                                }}
                            >Redux
                            </button>
                        </div>

                        <div className={style.container}>
                            <div className={style.containerCards}>
                                {workItems}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Works;
