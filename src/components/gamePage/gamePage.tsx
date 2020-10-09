import React, { useState, useCallback, useEffect } from "react";
import config from '../../config.json';
import { Prizes } from "./prizes/prizes";
import { Question } from "./question/question";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import './gamePage.css'
import { ROUTES } from "../../types";

type GamePageProps = {
    onNextRound : () => void,
    restartGame : () => void,
    round: number
}

export const GamePage: React.FC<GamePageProps> = ({round, onNextRound, restartGame}) => {
    const {questions} = config;
    const history = useHistory();
    const question = questions.find(item => item.id === String(round)) ??
        questions[questions.length - 1]

    const [showQuestion, setShowQuestion] = useState(true);

    useEffect(() => {
        restartGame();
    }, [restartGame])

    const handleBurger = useCallback(() => {
        setShowQuestion(!showQuestion)
    }, [showQuestion, setShowQuestion]);

    const onAnswer = useCallback((result: boolean) => {
        if (result) {
            onNextRound();
            if (round >= config.questions.length) {
                history.push(ROUTES.GAME_OVER);
            }
        } else {
            history.push(ROUTES.GAME_OVER);
        }
    }, [history, onNextRound, round]);
    
    return (
        <div className='game-wrapper'>
            <div className='game-wrapper__left'/>
            <div className={classNames('game', 'max-width', {'show-question': showQuestion}, {'show-prizes': !showQuestion})}>
            <div className='burger' onClick={handleBurger}>
                {
                    showQuestion ? 
                        <img src='./burger.svg' alt='burger' /> : 
                        <img src='./cross.svg' alt='cross' />
                }
            </div>
            <Question 
                question={question} 
                onAnswer={onAnswer}
            />
            <Prizes currentQuestion={round}/>
        </div>
        </div>
        
    )
}
