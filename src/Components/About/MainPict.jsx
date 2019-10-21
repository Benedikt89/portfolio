import React, {Component} from 'react';
import '../../App.css';
import style from './About.module.css'
import mainPict from './../../assets/images/avtar-01.jpg'

class MainPict extends Component {

    state = {
        x: 0,
        y: 0,
    };

    onMove =()=> {
        this.setState({
            x: (this.props.position.x / 300 / 2).toFixed(2),
            y: (this.props.position.y / 225 / 2).toFixed(2),
        });
    };
    render() {

        return (

            <div style={{perspective: '55px'}} className={style.container}>
                <div style = {{
                    transform: `rotateX( ${ this.state.x } deg) rotateY( ${ this.state.y } deg)`,
                    WebkitTransform: `rotateX( ${ this.state.x } deg) rotateY( ${ this.state.y } deg)`,
                    MozTransform: `rotateX( ${ this.state.x } deg) rotateY( ${ this.state.y } deg)`,
                    msTransform: `rotateX( ${ this.state.x } deg) rotateY( ${ this.state.y } deg)`,
                    OTransform: `rotateX( ${ this.state.x } deg) rotateY( ${ this.state.y } deg)`,
                }} className={style.mainPict} onMouseMove={this.onMove}>
                    <img src={mainPict}/>
                </div>
                {/*<span>y={this.state.y}</span>*/}
                {/*<span>x={this.state.x}</span>*/}
            </div>

        );
    }
}

export default MainPict;
