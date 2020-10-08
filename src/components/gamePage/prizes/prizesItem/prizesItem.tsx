import React from "react";
import classNames from "classnames";

import './prizesItem.css'

type Props = {
    currentQuestion: number;
    children: string;
    index: number;
}

export const PrizesItem:  React.FC<Props> = ({ currentQuestion, children, index}) => {
    return (
    <div className={ classNames(
            'prizes__item-wrapper', 
            {'-current': currentQuestion === index},
            {'-done': currentQuestion > index},
            {'-coming': currentQuestion < index}
    )}>
        <div className='prizes__item option'>{children}</div>
    </div>
    )
}