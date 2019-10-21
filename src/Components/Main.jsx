import React, {Component} from 'react';
import '../App.css';
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";
import StickyBar from "./StickyBar/StickyBar";
import AdditionalSkills from "./Skills/AdditionalSkills";

class Main extends Component {
    render() {
        return (
            <div>

                <Header/>
                <Home/>

                <body>
                    <StickyBar/>
                    <About/>
                    <Skills/>
                    <AdditionalSkills />
                    <Works/>
                    <Contacts/>

                    <Footer/>
                </body>

            </div>
        );
    }
}

export default Main;
