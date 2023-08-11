import React, { Component } from 'react';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onClickGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onClickBad =()=>{
    this.setState(prevState =>({
      bad:prevState.bad+1,
    }))
  };
  onClickNeutral =()=>{
    this.setState(prevState =>({
      neutral:prevState.neutral+1,
    }))
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.onClickGood}>
          Good
        </button>
        <button onClick={this.onClickNeutral}>Neutral</button>
        <button onClick={this.onClickBad}>bad</button>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Neutral:{this.state.neutral}</li>
        </ul>
      </>
    );
  }
}
