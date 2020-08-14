import React from 'react';

import './styles.css'

/**
 * Here every question is loaded and here are the buttons to chose the answer
 */

const QuestionAll = ({
    handleAnswer,
    data : {question, correct_answer,incorrect_answers,category}, }) => {
        return(
            <div>
                <div className="card">
                    <div>
                        <h1 className="headtext">{category}</h1>
                    </div>
                    <br/>
                    <div className="footcard">
                        <h3 className="bodytext" dangerouslySetInnerHTML={{ __html: question}}/>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <button className='btn btnT panbut' onClick={() => {handleAnswer("True")}} answer="True">True <i class="fa fa-check-circle"></i></button>
                    <button className='btn btnF panbut' onClick={() => {handleAnswer("False")}} answer="False">False <i class="fa fa-times-circle"></i></button> 
                </div>
            </div>
    );
};

export default QuestionAll;

