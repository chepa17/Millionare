import React, { useState, useCallback } from "react";
import config from '../../config.json';
import { Prizes } from "./prizes/prizes";
import { Question } from "./question/question";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import './gamePage.css'

type Props = {
    onNextRound : () => void,
    round: number
}

export const GamePage: React.FC<Props> = ({round, onNextRound}) => {
    const history = useHistory();
    
    const handleOnNextRound = useCallback(() => {
        onNextRound();
    }, [onNextRound]);

    const [showQuestion, setShowQuestion] = useState(true);

    const handleBurger = () => {
        setShowQuestion(!showQuestion)
    }

    const onAnswer = (result: boolean) => {
        if (result) {
            handleOnNextRound();
            console.log(round)
            if (round >= config.questions.length) {
                history.push('/over');
            }
        } else {
            history.push('/over');
        }
    }
    
    return (
        <div className={classNames('game', 'max-width', {'show-question': showQuestion}, {'show-prizes': !showQuestion})}>
            <div className='burger' onClick={handleBurger}>
                {showQuestion ? <img src='./burger.svg'/> : <img src='./cross.svg'/>}
            </div>
            <Question question={config.questions.find(question=>question.id === round.toString()) || config.questions[config.questions.length - 1]} onAnswer={onAnswer}/>
            <Prizes currentQuestion={round}/>
        </div>
    )
}