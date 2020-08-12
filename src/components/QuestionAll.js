import React from 'react';

import './styles.css'
/*
const Button = ({ answer, className }) => (
<button className={`${className}`} onClick={() => {handleAnswer(answer)}}>{answer}</button>
);*/


const QuestionAll = ({
    handleAnswer,
    data : {question, correct_answer,incorrect_answers}, }) => {
        //const PossAnswer = [correct_answer, ...incorrect_answers].sort(()=> Math.random() - 0.5);
        return(
    <div>
        <div>
            <h3 dangerouslySetInnerHTML={{ __html: question}}/>
        </div>
        <div>
            <button className={`${correct_answer === "True" ? 'correctAns' : '' }`} onClick={() => {handleAnswer("True")}} answer="True">True</button>
            <button className={`${correct_answer === "False" ? 'correctAns' : '' }`} onClick={() => {handleAnswer("False")}} answer="False">False</button>

            <button className='correctAns' answer="Hello"></button>
        </div>
    </div>
);};

export default QuestionAll;