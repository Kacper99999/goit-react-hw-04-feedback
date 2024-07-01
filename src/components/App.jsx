import React, { useState } from 'react';
import Statistics from '/src/components/Statistics';
import FeedbackOptions from '/src/components/FeedbackOptions';
import Notification from '/src/components/Notification';
import Section from '/src/components/Section'


export default function App() {

const [feedback, setFeedback] = useState({
  Good : 0,
  Neutral : 0,
  Bad : 0
});


const handleClick = (option) => {
  setFeedback((prevState) => ({
      ...prevState,
      [option]: prevState[option] + 1,
  }));
};

const countTotalFeedback = () =>{
  const {Good, Neutral, Bad} = feedback;
     return Good + Neutral + Bad;
};


const countPositiveFeedbackPercentage = () =>{
    const {Good} = feedback;
    const Total = countTotalFeedback()
    
    return Total === 0 ? 0 : ((Good / total) * 100).toFixed(0);
};

const total = countTotalFeedback();
const notificationClass = total === 0 ? '' : 'hidden';

      return (
        <>
          <Section title = "Please leave feedback">
            
            <FeedbackOptions
            options = {["Good", "Neutral", "Bad"]}
            onLeaveFeedback = {handleClick}/>
          </Section>

          <Section title = "Statistics">
            <Statistics 
            good = {feedback.Good}
            neutral = {feedback.Neutral}
            bad = {feedback.Bad}
            total = {countTotalFeedback()}
            positivePercentage = {countPositiveFeedbackPercentage()}
            />
          </Section>

          <div className={notificationClass}>
          <Notification 
          message = "There is no feedback"
          />
          </div>
          
        </>
      );
    
  };

  