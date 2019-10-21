import React, {Component} from 'react';
import style from './Works.module.css';
import BgPict from './../../assets/images/woodBg.jpg'
import sotialWorkImg from "../../assets/images/work2.jpg";
import organizerWorkImg from "../../assets/images/work3.jpg";
import counterSrverImg from "../../assets/images/work5.jpg";
import nodeSrverImg from "../../assets/images/work4.jpg";
import bakeryShopImg from "../../assets/images/work6.png";
import dogGameImg from "../../assets/images/dog-centre.jpg";
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
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/'
            },
            {
                id: 302,
                title: 'Organizer Online',
                displaying: true,
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: organizerWorkImg,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 403,
                title: 'Node server',
                displaying: true,
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: nodeSrverImg,
                discription: 'asdasdas asd adsf sdf sdf sdf sdf sdfsefwef',
                gitLink: 'http:/',
                codeLink: 'code:/'
            },
            {
                id: 504,
                title: 'Bacery Shop',
                displaying: true,
                techs: ['all', 'react', 'redux', 'css'],
                imgSrc: bakeryShopImg,
                discription: 'asdasdas sdf sdfsef sdf sdf',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 605,
                title: 'Dog-Game',
                displaying: true,
                techs: ['all', 'react'],
                imgSrc: dogGameImg,
                discription: 'asdasdas asdjmn asjdn uhasdb hdb fhwdb whdb ywbd fs',
                gitLink: 'http:/',
                codeLink: 'code:/',
            },
            {
                id: 706,
                displaying: true,
                title: 'Counter',
                techs: ['all', 'react', 'redux'],
                imgSrc: counterSrverImg,
                discription: 'asdasdas',
                gitLink: 'http:/',
                codeLink: 'code:/',
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
                        <h4>{i.title}</h4>
                    </div>
                    <div className={style.projectContent}>
                        <span> {i.discription}</span>
                        <div className={style.container}>
                            <span className={style.link}> code </span>
                            <span className={style.link}> project </span>
                        </div>
                    </div>
                </div>
            </Fade>
            );

        return (
            <div className={style.worksBanner}>
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
