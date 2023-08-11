import React, { Component } from "react";

export class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      onClickGood = () => {
        this.setState(prevState => ({
            console.log(this.state.good);
          good: prevState.good + 1
        }));
      }
    

    render(){  return(
        <>
        <h2>Please leave feedback</h2>
        <button type = 'button' onClick={this.onClickGood} >Good</button>
        <button onClick={this.onClickGood} >Neutral</button>
        <button onClick={this.onClickGood} >bad</button>
        <h2>Statistics</h2>
        <ul>
            <li>Good:</li>
            <li>Bad:</li>
            <li>Neutral:</li>
        </ul>
        
        </>
        
    )}


  
}