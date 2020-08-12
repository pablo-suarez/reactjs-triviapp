import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { QuestionAll } from './components';

const API = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

function App() {
    const [quest, setQuest] = useState([]);
    const [currQuest, setCurrQuest] = useState(0)
    const [score, setScore] = useState(0);
    const [gameState, setGameState] = useState(1);
    useEffect(()=>{
        fetch(API)
            .then((res)=>res.json())
            .then((data)=>{
                setQuest(data.results);
                //setCurrQuest(data.results[0])
            });
    },[]);
    const handleAnswer = (answer) => {
        
       const newCurr = currQuest + 1
        setCurrQuest(newCurr);
        if(answer === quest[currQuest].correct_answer){
            setScore(score + 1);
        }
        if(newCurr >= quest.length){
            setGameState(2);
        }
    };
    return gameState === 2 ? (
    <div className="container">Your score was {score}</div>
    ) : quest.length > 0 ? (
    <div className="container">
        
        <QuestionAll data={quest[currQuest]} handleAnswer={handleAnswer}/>
    
    
    </div>
    ) : (
        <h1>Cargando pregunta</h1>
    );
    

}

export default App;
