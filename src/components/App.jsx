import React from 'react';
import { Section } from "./Section"; 

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
 };

  countTotalFeedback = () => { 
    return Object.values(this.state).reduce((a, b) => {  return a + b})}; 
  
  countPositiveFeedbackPercentage = () => { 
    if (this.state.good) { return Math.round((this.state.good *100 / this.countTotalFeedback()))}
  };
  
  leaveFeedback = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1, };
    });

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
       >
         <Section title="" state={this.state} onLeaveFeedback={this.leaveFeedback} total={this.countTotalFeedback} positivePercentage={ this.countPositiveFeedbackPercentage}></Section>
    </div>
  );}
  
};

export default App;