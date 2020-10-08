import React, { useCallback } from "react";
import classNames from "classnames";

import './option.css';
import { OptionType } from "../question/question";

type Props = {
    option: OptionType;
    onClick: (id: string)=>void;
    selected: string | null;
    status: string;
}

export const Option: React.FC<Props> = ({option, onClick, selected, status}) => {
    const handleOnClick = useCallback(() => {
        if (selected !== null) {
            return
        }
        onClick(option.id);
    }, [onClick, option, selected])

    return (
        <div className={classNames('option-wrapper', selected === option.id ? status : 'inactive')}>
            <div className='option' onClick={handleOnClick}><span>{option.leter}</span>{option.option}</div>
        </div>
    
    )
}