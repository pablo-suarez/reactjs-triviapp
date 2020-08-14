import React from 'react';

/**
 * Here results are shown
 */

const EndPage = ({
    restartGame,
    data : {currQuest,score,total}, }) => {
        return(
            <div >
                <div className="scoreStyle">
                    <h2>Your score was {score} / {currQuest}</h2>
                </div>
        {
            total.map((dynamicData,i)=>
                <div className="totalList" key={dynamicData.id}>
                    <table width="80%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td rowspan="3"><i className={`${dynamicData.correct_ans === dynamicData.my_ans ? 'okay fa fa-thumbs-up fa-2x' : ' notokay fa fa-thumbs-down fa-2x' }`}></i></td>
                            <td colspan="2" dangerouslySetInnerHTML={{ __html: dynamicData.question}}></td>
                        </tr>
                        <tr>
                            <td className={`${dynamicData.correct_ans === dynamicData.my_ans ? 'okay' : ' notokay' }`}>Your answer: {dynamicData.my_ans}</td>
                            <td>Answer: {dynamicData.correct_ans}</td>
                        </tr>
                    </table>
                </div>
            
            )
        }
                <div>
                    <button className='btn btnN panbut' onClick={() => {restartGame(1)}}>Play Again? <i class="fa fa-arrow-circle-left"></i></button>
                </div>
            </div>
    );
};

export default EndPage;
       