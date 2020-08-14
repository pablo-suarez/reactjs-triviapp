import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { QuestionAll } from './components';
import { EndPage } from './components'
import { HomePage } from './components'
/**
 * API from where I get json
*/
const API = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
/**
 * const quest Constant where I save my JSON data
 * currQuest Constant where I have the number of question which I am
 * score Where I add 1 everytime the correct answer is equal to the user's answer
 * gameState control the game's flow
 * total It gets the question, the user's answer and the real answer to create a JSON and send it to the results page (Endpage)
*/
function App() {
    const [quest, setQuest] = useState([]);
    const [currQuest, setCurrQuest] = useState(0)
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState(1);
    const [total, addTotal] = useState([]);
    
/**
 * useEffect gets the JSON data to save it in quest
 */
    useEffect(()=>{
        fetch(API)
            .then((res)=>res.json())
            .then((data)=>{
                setQuest(data.results);
                
            });
    },[]);

/**
 * handleAnswer gets the answer the user choses and process it
 */

    const handleAnswer = (answer) => {
    const newCurr = currQuest + 1
/**
 * total.push creates a JSON with the answers information
 */
        total.push({
            "id" : currQuest,
            "question"    : quest[currQuest].question,
            "correct_ans"  : quest[currQuest].correct_answer,
            "my_ans"    : answer 
        });
        /**
         * addTotal updates the list of questions answered in JSON
         */
        addTotal(total);
        /**
         * setCurrQuest updates the total of questions answered
         */
        setCurrQuest(newCurr);
        /**
         * Add 1 to score every time the correct answer is equal to the user's answer
         */
        if(answer === quest[currQuest].correct_answer){
            setScore(score + 1);
        }
        /**
         * Send me to the results page
         */
        if(newCurr >= quest.length){
            setGameState(2);
        }
    };
/**
 * 
 * @param {*} opt let me control the screen where I am from Home or results page
 */
    const restartGame = (opt) =>{
        if(opt===0){
            setGameState(0);
        }
        if(opt===1){
            setGameState(1);
            addTotal([]);
            setCurrQuest(0);
            setScore(0);
        }
    };
/**
 * gameState Controls the screen where I am
 */
    return gameState === 1 ? (
        <div className="App">
            <HomePage restartGame={restartGame}/>  
        </div>
    ) : ( gameState === 2 ? (
    <div className="App">
        <EndPage data={{currQuest,score,total}} restartGame={restartGame}/>
    </div>
    ) : quest.length > 0 ? (
    <div className="App">
        <QuestionAll className="niidea" data={quest[currQuest]} handleAnswer={handleAnswer}/>
    </div>
    ) : (
        <h1>Cargando pregunta</h1>
    ));
}

export default App;
