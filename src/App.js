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
    const [total, addTotal] = useState([]);
    useEffect(()=>{
        fetch(API)
            .then((res)=>res.json())
            .then((data)=>{
                setQuest(data.results);
                //setCurrQuest(data.results[0])
            });
    },[]);
    const findata = []
    const mytotal = {}
    const myArray = [];
    const handleAnswer = (answer) => {
        
       const newCurr = currQuest + 1
       //const newTotal = quest[currQuest].question;
        //alert(newTotal);
        
        total.push({
            "id" : currQuest,
            "question"    : quest[currQuest].question,
            "correct_ans"  : quest[currQuest].correct_answer,
            "my_ans"    : answer 
        });
        //const newArray = [currQuest,quest[currQuest].question,quest[currQuest].correct_answer,answer];
        //total.push(newArray);
        addTotal(total);
        console.log(total);

        setCurrQuest(newCurr);
        if(answer === quest[currQuest].correct_answer){
            setScore(score + 1);
        }
        if(newCurr >= quest.length){
            setGameState(2);
            /*mytotal.findata = findata;
            console.log(JSON.stringify(mytotal));*/
            //console.log(myArray);
        }
    };
    return gameState === 2 ? (
    <div className="container">
        <div className="container">Your score was {score}</div>
        {
            total.map((dynamicData,i)=>
            <div key={dynamicData.id}>
                <ul>
            <li >{dynamicData.question}</li>

            </ul>
            </div>
            
            )
        }
        <div>
            <button></button>
        </div>
    </div>
    
    ) : quest.length > 0 ? (
    <div className="container">
        
        <QuestionAll data={quest[currQuest]} handleAnswer={handleAnswer}/>
    
    
    </div>
    ) : (
        <h1>Cargando pregunta</h1>
    );
    

}

export default App;
