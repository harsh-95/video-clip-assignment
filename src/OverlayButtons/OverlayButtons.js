import React from 'react';
import { Component } from 'react';
import './OverlayButtons.css';

class OverlayButtons extends Component{

    state = {
        feedbackValue: ""
    }

    onChangeHandler = (e) => {
        this.setState({
            feedbackValue: e.target.value
        })
    }

    onSubmitHandler = () => {
        this.props.submitFeedback(this.state.feedbackValue)
        this.setState({
            feedbackValue: ""
        })
    }

    render(){

        const {feedbackValue} = this.state;
        const {isVideoEnd, setCurrentTime} = this.props;

        return(
            <div className="overlay">
                <button className="btn" onClick={() => setCurrentTime(23)}>Android Speaker</button>
                <button className="btn" onClick={() => setCurrentTime(144)}>Combo Card Reader</button>
                <button className="btn" onClick={() => setCurrentTime(206)}>iPhone Maze Case</button>
                {isVideoEnd
                    ? <div className="feedbackForm">
                        <h3 className="textWhite">How was the video?</h3>
                        <div className="inputDiv">
                            <input type="text" name="feedback" placeholder="Good or Bad" value={feedbackValue} onChange={this.onChangeHandler}/>
                        </div>
                        <div className="submitDiv">
                            <button className="btn" 
                                    onClick={feedbackValue
                                                ?() => this.onSubmitHandler(feedbackValue)
                                                : null}
                            >Submit</button>
                        </div>
                      </div>
                    : null 
                }
                

            </div>
        )
    }
}

export default OverlayButtons;