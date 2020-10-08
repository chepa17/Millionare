import React from "react";
import classNames from "classnames";

import './prizesItem.css'

type PrizesItemProps = {
    currentQuestion: number;
    children: string;
    index: number;
}

export const PrizesItem:  React.FC<PrizesItemProps> = 
    ({currentQuestion, children, index}) => (
        <div className={classNames(
                'prizes__item-wrapper', 
                {'-current': currentQuestion === index},
                {'-done': currentQuestion > index},
                {'-coming': currentQuestion < index}
        )}>
            <div className='prizes__item option'>{children}</div>
        </div>
    );
