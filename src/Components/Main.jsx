import React, {Component} from 'react';
import '../App.css';
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import Skills from "./Skills/Skills";
import Works from "./Works/Works";
import Header from "./Header/Header";
import Contacts from "./Contacts/Contacts";
import About from "./About/About";

class Main extends Component {
    render() {
        return (
            <div>

                <Header/>
                <Home/>
                <About/>
                <Skills/>
                <Works/>
                <Contacts/>

                <Footer/>

            </div>
        );
    }
}

export default Main;
