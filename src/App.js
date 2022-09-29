import React, { Component } from 'react';
import { useState } from 'react';
import propTypes from 'prop-types';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import styles from './components/shared/shared.module.css';





export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onChange = e => {
    const { name }  = e.currentTarget;
    console.log(name);
    switch (name) {
      case 'good': setGood(good + 1);
        break;
      case 'neutral': setNeutral(neutral + 1);
        break;
      case 'bad': setBad(bad + 1);
        break;
        degault: return;
      }
    };
  return (
   <div className={styles.container}>
        <Section title="Please leave feadback" />

         <FeedbackOptions
        onChange={onChange}
        
           options={['good', 'neutral', 'bad']}
         />
         {bad > 0 || neutral > 0 || good > 0 ? (
        <Statistics good={good} neutral={neutral} bad={ bad} />
         ) : (
           <p>No feedback given</p>
         )}
       </div>
  )
}




// class App extends Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   static propTypes = {};

//   state = {
//     good: this.props.initialValue,
//     neutral: 0,
//     bad: 0,
//   };
//   onChange = event => {
//     const { name, value } = event.currentTarget;
//     console.log(name, value);
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className={styles.container}>
//         <Section title="Please leave feadback" />

//         <FeedbackOptions
//           onChange={this.onChange}
//           options={['good', 'neutral', 'bad']}
//         />
//         {bad > 0 || neutral > 0 || good > 0 ? (
//           <Statistics state={this.state} />
//         ) : (
//           <p>No feedback given</p>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
