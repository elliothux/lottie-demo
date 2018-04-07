
import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import * as animationData from './data.json'



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };
    }

    render() {
        const buttonStyle = {
            display: 'block',
            margin: '10px auto'
        };

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'canvas'
        };

        return <div>
            <Lottie
                options={defaultOptions}
                width={600}
                isStopped={this.state.isStopped}
                isPaused={this.state.isPaused}
            />
            <button style={buttonStyle} onClick={() => this.setState({isStopped: true})}>stop</button>
            <button style={buttonStyle} onClick={() => this.setState({isStopped: false})}>play</button>
            <button style={buttonStyle} onClick={() => this.setState({isPaused: !this.state.isPaused})}>pause</button>
        </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
