import React, {Component} from 'react';
import style from './Works.module.css';
import baseImg from '../../assets/images/work4.jpg';
import codeIco from "../../assets/ico/code.svg";
import pageIco from "../../assets/ico/page.svg";
import {Fade} from "react-reveal";
import {getWorksImages} from "../../assets/media.service";


class Works extends Component {
    state = {
        worksItems: [
            {
                id: 201,
                title: 'Social-Network',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: baseImg,
                discription: 'Studying project, creating Social network using React',
                gitLink: 'https://benedikt89.github.io/Social-Network-Training',
                codeLink: 'https://github.com/Benedikt89/Social-Network-Training'
            },
            {
                id: 302,
                title: 'Organizer Online',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: baseImg,
                discription: 'Studying task to create online organizer with API',
                gitLink: 'https://benedikt89.github.io/Todolist-home-station',
                codeLink: 'https://github.com/Benedikt89/Todolist-home-station',
            },
            // {
            //     id: 403,
            //     title: 'Node server',
            //     displaying: true,
            //     techs: ['all', 'redux'],
            //     imgSrc: nodeSrverImg,
            //     discription: 'asdasdas asd adsf sdf sdf sdf sdf sdfsefwef',
            //     gitLink: 'http:/',
            //     codeLink: 'code:/'
            // },
            {
                id: 504,
                title: 'Bakery Shop',
                displaying: true,
                techs: ['all', 'css'],
                imgSrc: baseImg,
                discription: 'Helping Friend to do simple Layout on his shop',
                gitLink: 'http://93.85.88.35/',
                codeLink: 'https://github.com/ice-ivanov/DjangoPizzaShop',
            },
            {
                id: 605,
                title: 'Dog-Game',
                displaying: true,
                techs: ['all', 'react', 'redux'],
                imgSrc: baseImg,
                discription: 'Moving simple html game to react, redux and thunk',
                gitLink: 'https://benedikt89.github.io/dog-game/',
                codeLink: 'https://github.com/Benedikt89/dog-game',
            },
            {
                id: 706,
                displaying: true,
                title: 'Counter',
                techs: ['all', 'react', 'redux'],
                imgSrc: baseImg,
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

        new Promise((resolve)=> {
            this.setState({fetching : true});
            setTimeout(()=>{
            let displayingCards = [];
                this.state.worksItems.forEach( wi => {
                if (wi.techs.some(el => el === filter)) {
                    displayingCards.unshift({...wi, displaying: true})
                } else {
                    displayingCards.push({...wi, displaying: false})
                }
            });
            resolve(displayingCards);
            }, 1200);
        }).then((displayingCards)=> {
            this.setState({
                selectedFilter: filter,
                worksItems: displayingCards,
                fetching: false
            })
        })
    };

    render() {

        let workItems = this.state.worksItems.map(i =>
            <Fade key={i.id} top opposite when={i.displaying}>
                <div className={style.projectWrapper}>
                    <div style={{
                        backgroundImage: `url(${i.imgSrc})`,
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                    }}  className={style.projectImg}>
                        <span className={style.title}><a href={i.codeLink} >{i.title}</a></span>
                    </div>
                    <div className={style.projectContent}>
                        <span> {i.discription}</span>
                        <div className={style.containerLinks}>
                            <a href={i.codeLink} className={style.link}><img src={codeIco}/></a>
                            {i.gitLink&&<a href={i.gitLink} className={style.link}><img src={pageIco}/></a>}
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
                            <Fade className={style.containerCards}>
                                {workItems}
                            </Fade>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Works;
