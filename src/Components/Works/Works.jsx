import React from 'react';
import style from './Works.module.css';
import codeIco from "../../assets/ico/code.svg";
import pageIco from "../../assets/ico/page.svg";
import {Fade} from "react-reveal";
import TransitionGroup from 'react-transition-group/TransitionGroup';
import sotialWorkImg from "./../../assets/images/sotialWorkImg.png";
import organizerWorkImg from "./../../assets/images/work5.jpg";
import counterSrverImg from "./../../assets/images/counterSrverImg.png";
import bakeryShopImg from "./../../assets/images/bakeryShopImg.png";
import dogGameImg from "./../../assets/images/dog-centre.jpg";
import ticTacImg from "./../../assets/images/tic-tac-toe.png";

class Works extends React.Component {

    state = {
        worksItems: [
            {
                id: 403,
                title: 'Pizza-shop on react',
                displaying: true,
                techs: ['all', 'redux', 'react', 'css'],
                imgSrc: bakeryShopImg,
                discription: 'Helping client to rebuild site of his shop using react-redux and API',
                gitLink: 'https://benedikt89.github.io/react-pizza-shop',
                codeLink: 'https://github.com/Benedikt89/react-pizza-shop'
            },
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
                techs: ['all', 'react', 'redux'],
                imgSrc: organizerWorkImg,
                discription: 'Studying task to create online organizer with API',
                gitLink: 'https://benedikt89.github.io/Todolist-home-station',
                codeLink: 'https://github.com/Benedikt89/Todolist-home-station',
            },
            {
                id: 504,
                title: 'Tic Tac Toe',
                displaying: true,
                techs: ['all', 'css'],
                imgSrc: ticTacImg,
                discription: 'Tic Tac Toe game with random AI and API',
                gitLink: 'https://benedikt89.github.io/tic-tac-toe',
                codeLink: 'https://github.com/Benedikt89/tic-tak-toe',
            },
            {
                id: 605,
                title: 'Dog-Game',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: dogGameImg,
                discription: 'Moving simple html game to react, redux and thunk',
                gitLink: 'https://benedikt89.github.io/dog-game/',
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
        sotialWorkImg: null,
        organizerWorkImg: null,
        nodeSrverImg: null,
        bakeryShopImg: null,
        dogGameImg: null,
        counterSrverImg: null,

        bgPict: null,
        selectedFilter: 'all',
        fetching: false,
    };

    filterSelect = (filter) => {

        new Promise((resolve) => {
            this.setState({fetching: true});
            setTimeout(() => {
                let displayingCards = [];
                this.state.worksItems.forEach(wi => {
                    if (wi.techs.some(el => el === filter)) {
                        displayingCards.unshift({...wi, displaying: true})
                    } else {
                        displayingCards.push({...wi, displaying: false})
                    }
                });
                resolve(displayingCards);
            }, 1200);
        }).then((displayingCards) => {
            this.setState({
                selectedFilter: filter,
                worksItems: displayingCards,
                fetching: false
            })
        })
    };

    render() {
        let workItems = this.state.worksItems
            .filter( i => i.displaying)
            .map(i =>
            <Fade key={i.id} collapse bottom>
                <div className={style.projectWrapper}>
                    <div style={{
                        backgroundImage: `url(${i.imgSrc})`,
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                    }} className={style.projectImg}>
                        <span className={style.title}>{i.title}</span>
                        <div className={style.projectContent}>
                            <div className={style.linkWrap}>
                                <span>Watch Code</span>
                                <a href={i.codeLink} className={style.link}>
                                    <img alt='codeIco' src={codeIco}/>
                                </a>
                            </div>
                            {i.gitLink &&
                            <div className={style.linkWrap}>
                                <span>Watch Template</span>
                                <a href={i.gitLink} className={style.link}>
                                    <img alt='pageIco' src={pageIco}/>
                                </a>
                            </div>}
                        </div>
                        <div className={style.projectDescription}>
                            <span> {i.discription}</span>
                        </div>
                    </div>
                </div>
            </Fade>
        );

        return (
            <div className={style.worksBanner} id={"works"}>
                <div style={{
                    backgroundColor: `rgb(6, 6, 6)`,
                }}>
                    <div className={style.worksContent}>
                        <div>
                            <h2>LATEST WORKS</h2>
                        </div>
                        <div className={style.line}> </div>
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



                            <TransitionGroup className={style.container} enter={true} exit={true}>
                                {workItems}
                            </TransitionGroup>


                    </div>
                </div>
            </div>
        );
    }
}

export default Works;
