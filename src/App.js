import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import OverlayButtons from './OverlayButtons/OverlayButtons';
import { Component } from 'react';

class App extends Component {

  state = {
    isVideoEnd: false,
  }

  showFeedbackForm = () => {
       this.setState({
        isVideoEnd: true
       }) 
  }

  submitFeedback = (value) => {
    alert("Feedback: "+value);
    this.setState({
      isVideoEnd: false
    }) 
  }

  setCurrentTime = (seconds) => {
    const vid = document.getElementsByTagName('video')[0];
    vid.currentTime = seconds;
    this.setState({
      isVideoEnd: false
    }) 
}

  render(){
    return (
      <div className="App">
        <h2>Assignment - Princetonhive</h2>
        <div className="videoContainer">
           <VideoPlayer showFeedbackForm={this.showFeedbackForm}/>
           <OverlayButtons 
              isVideoEnd={this.state.isVideoEnd}
              submitFeedback={this.submitFeedback}
              setCurrentTime={this.setCurrentTime}/>
        </div>
      </div>
    );
  }
}

export default App;
