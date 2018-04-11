import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import * as animationData from './data.json'


class App extends React.Component {
  state = {
    isStopped: false,
    isPaused: false
  };

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    renderer: 'canvas'
  };

  play = () => this.setState({isStopped: false, isPaused: false});
  stop = () => this.setState({isStopped: true});
  pause = () => this.setState({isPaused: !this.state.isPaused});

  render() {
    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    };

    return <div>
      <Lottie
        options={this.defaultOptions}
        width={600}
        isStopped={this.state.isStopped}
        isPaused={this.state.isPaused}
      />
      <button style={buttonStyle} onClick={this.stop}>停止</button>
      <button style={buttonStyle} onClick={this.play}>播放</button>
      <button style={buttonStyle} onClick={this.pause}>暂停</button>
    </div>
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
