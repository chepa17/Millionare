import React, { useState, useEffect, useCallback } from "react";
import { Option } from '../option/option'
import config from '../../../config.json'

import './question.css'

export type OptionType = {
    id: string;
    leter: string;
    option: string;
}

type QuestionProps = {
    question: {
        id: string;
        question: string;
        options: OptionType[];
    } | undefined,
    onAnswer: (result: boolean) => void;
}

enum OPTION_STATUS {
    INACTIVE = 'inactive',
    SELECTED = 'selected',
    WRONG = 'wrong',
    CORRECT = 'correct'
}

export const Question : React.FC<QuestionProps> = ({question, onAnswer}) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [status, setStatus] = useState(OPTION_STATUS.INACTIVE);
    const answer = config.answers.find(item => item.id === question?.id);

    useEffect(() => {
        if (selected === null) {
            return;
        }
        
        let selectedTimeout: any;
        let correctOrWrongTimeout: any;

        if (status === OPTION_STATUS.SELECTED) {
            selectedTimeout = setTimeout(() => {
                if (answer?.answer.includes(selected)) {
                    setStatus(OPTION_STATUS.CORRECT);
                } else {
                    setStatus(OPTION_STATUS.WRONG);
                }
            }, 1000);
        }

        if (status === OPTION_STATUS.CORRECT || status === OPTION_STATUS.WRONG) {
            correctOrWrongTimeout = setTimeout(()=>{
                onAnswer(status === OPTION_STATUS.CORRECT);
                setSelected(null);
                setStatus(OPTION_STATUS.INACTIVE);
            }, 2000);
        }

        return () => {
            clearTimeout(selectedTimeout);
            clearTimeout(correctOrWrongTimeout);
        };
    }, [selected, status, onAnswer, question, answer]);

    const onClick = useCallback((id: string) => {
        setSelected(id);
        setStatus(OPTION_STATUS.SELECTED);
    }, []);

    return(
        <div className='question-field'>
            <div className='question-field__question question'>{question!.question}</div>
            <div className='question-field__options'>
                {question!.options
                    .map(option => (
                        <Option 
                            option={option} 
                            onClick={onClick} 
                            selected={selected} 
                            status={status} 
                            key={option.id}
                        />
                    ))}
            </div>
        </div>
    )
}
