import BgPict from './images/home.jpg';
import BgPictWorks from './images/woodBg.jpg'
import sotialWorkImg from "./images/work2.jpg";
import organizerWorkImg from "./images/work3.jpg";
import counterSrverImg from "./images/work5.jpg";
import nodeSrverImg from "./images/work4.jpg";
import bakeryShopImg from "./images/work6.png";
import dogGameImg from "./images/dog-centre.jpg";

export const getHomePageBg = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(BgPict);
        }, 750);
    })
};
export const getWorksImages = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({BgPictWorks, sotialWorkImg, organizerWorkImg, counterSrverImg, nodeSrverImg, bakeryShopImg, dogGameImg});
        }, 50);
    })
};