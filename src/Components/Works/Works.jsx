import React, {Component} from 'react';
import style from './Works.module.css';
import BgPict from './../../assets/images/woodBg.jpg'
import sotialWorkImg from "../../assets/images/work2.jpg";
import organizerWorkImg from "../../assets/images/work3.jpg";
import counterSrverImg from "../../assets/images/work5.jpg";
import nodeSrverImg from "../../assets/images/work4.jpg";
import bakeryShopImg from "../../assets/images/work6.png";
import dogGameImg from "../../assets/images/dog-centre.jpg";
import codeIco from "../../assets/ico/code.svg";
import pageIco from "../../assets/ico/page.svg";
import {Fade} from "react-reveal";

class Works extends Component {
    state = {
        worksItems: [
            {
                id: 201,
                title: 'Social-Network',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: sotialWorkImg,
                discription: 'Studying project, creating Social network using React',
                gitLink: 'https://benedikt89.github.io/Social-Network-Training',
                codeLink: 'https://github.com/Benedikt89/Social-Network-Training'
            },
            {
                id: 302,
                title: 'Organizer Online',
                displaying: true,
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: organizerWorkImg,
                discription: 'Studying task to create online organizer with API',
                gitLink: 'http:/',
                codeLink: 'https://github.com/Benedikt89/Todolist-home-station',
            },
            {
                id: 403,
                title: 'Node server',
                displaying: true,
                techs: ['all', 'redux'],
                imgSrc: nodeSrverImg,
                discription: 'asdasdas asd adsf sdf sdf sdf sdf sdfsefwef',
                gitLink: 'http:/',
                codeLink: 'code:/'
            },
            {
                id: 504,
                title: 'Bakery Shop',
                displaying: true,
                techs: ['all', 'redux', 'css'],
                imgSrc: bakeryShopImg,
                discription: 'Helping Friend to do simple Layout on his shop',
                gitLink: 'http://93.85.88.35/',
                codeLink: 'https://github.com/ice-ivanov/DjangoPizzaShop',
            },
            {
                id: 605,
                title: 'Dog-Game',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: dogGameImg,
                discription: 'Moving simple html game to react, redux and thunk',
                gitLink: 'http:/',
                codeLink: 'https://github.com/Benedikt89/dog-game',
            },
            {
                id: 706,
                displaying: true,
                title: 'Counter',
                techs: ['all', 'react', 'redux'],
                imgSrc: counterSrverImg,
                discription: 'Task to create simple asynch counter using redux and thunk',
                gitLink: 'https://benedikt89.github.io/counter',
                codeLink: 'https://github.com/Benedikt89/counter',
            },
        ],
        selectedFilter: 'all',

    };

    filterSelect = (filter) => {
        let displayingCards = this.state.worksItems.map( wi => {
            if (wi.techs.includes(filter)) {
                return {...wi, displaying: true}
            } else {
                return {...wi, displaying: false}
            }
        });
        this.setState({selectedFilter: filter, worksItems: displayingCards})
    };

    render() {

        let workItems = this.state.worksItems.map(i =>
            <Fade big collapse when={i.displaying}>
                <div className={style.projectWrapper} key={i.id}>
                    <div style={{
                        backgroundImage: `url(${i.imgSrc})`,
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                    }}  className={style.projectImg}>
                        <span className={style.title}>{i.title}</span>
                    </div>
                    <div className={style.projectContent}>
                        <span> {i.discription}</span>
                        <div className={style.containerLinks}>
                            <a href={i.codeLink} className={style.link}><img src={codeIco}/></a>
                            <a href={i.gitLink} className={style.link}><img src={pageIco}/></a>
                        </div>
                    </div>
                </div>
            </Fade>
            );

        return (
            <div className={style.worksBanner} id={"works"}>
                <div style={{
                    backgroundImage: `url(${BgPict})` }}>
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
