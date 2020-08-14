import React from 'react';

/**
 * Here I go to the Home page with the button that allows start
 */

const HomePage = ({
    restartGame, }) => {     
        return(
            <div>
                <div className="homecard">
                    <div>
                        <h1 className="headtext">Welcome to the Trivia Challenge</h1>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="bodytext">
                        You will be presented with 10 True of False questions
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div className="bodytext">
                        Can you score 100%?
                    </div>
                </div>
                <div>
                    <button className='btn btnN panbut' onClick={() => {restartGame(0)}}>Begin <i class="fa fa-gamepad"></i></button>
                </div>
            </div>
);};

export default HomePage;
