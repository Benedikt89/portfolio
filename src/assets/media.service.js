import BgPict from './images/home.jpg';
import sotialWorkImg from "./images/sotialWorkImg.png";
import organizerWorkImg from "./images/work5.jpg";
import counterSrverImg from "./images/counterSrverImg.png";
import nodeSrverImg from "./images/work4.jpg";
import bakeryShopImg from "./images/bakeryShopImg.png";
import dogGameImg from "./images/dog-centre.jpg";

export const getHomePageBg = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(BgPict);
        }, 50);
    })
};
export const getWorksImages = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ sotialWorkImg, organizerWorkImg, counterSrverImg, nodeSrverImg, bakeryShopImg, dogGameImg});
        }, 1150);
    })
};