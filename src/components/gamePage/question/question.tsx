import React, { useState, useEffect, useCallback } from "react";
import { Option } from '../option/option'
import config from '../../../config.json'

import './question.css'

export type OptionType = {
    id: string;
    leter: string;
    option: string;
}

type Props = {
    question: {
        id: string;
        question: string;
        options: OptionType[];
    } | undefined,
    onAnswer: (result: boolean) => void;
}

export const Question : React.FC<Props> = ({question, onAnswer}) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [status, setStatus] = useState('-inactive');

    const handleOnAnswer = useCallback((arg) => {
        onAnswer(arg);
    }, [onAnswer]);

    useEffect(() => {
        if (selected === null) {
            return;
        }
        
        let timer: any;
        let secondTimer: any;
        if (status === 'selected') {
            timer = setTimeout(() => {
                const answer = config.answers.find(item => item.id === question?.id);
                        if (answer?.answer.includes(selected)) {
                            setStatus('correct')
                        } else {
                            setStatus('wrong')
                        }
            }, 1000);
        }

        if (status === 'correct' || status === 'wrong') {
            secondTimer = setTimeout(()=>{
                handleOnAnswer(status==='correct');
                setSelected(null);
                setStatus('inactive');
            },2000);
        }
        return () => {
            clearTimeout(timer)
            clearTimeout(secondTimer)
        };
      }, [selected, status, handleOnAnswer, question]);

    const onClick = (id: string) => {
        setSelected(id);
        setStatus('selected');
    };

    return(
        <div className='question-field'>
            <div className='question-field__question question'>{question!.question}</div>
            <div className='question-field__options'>
                {question!.options.map(option=>(<Option option={option} onClick={onClick} selected={selected} status={status} key={option.id}/>))}
            </div>
        </div>
    )
}