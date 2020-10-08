import React from "react";
import config from '../../../config.json'
import { PrizesItem } from "./prizesItem/prizesItem";

import './prizes.css'

type Props = {
    currentQuestion: number;
}

export const Prizes : React.FC<Props> = ({ currentQuestion }) => {
    const  prizes  = [...config.prizes].reverse();
    return (
        <div className='prizes'>
            {prizes.map((item, index)=> 
                <PrizesItem currentQuestion={currentQuestion} index={prizes.length - index} key={item}>{item}</PrizesItem>
            )}
        </div>
    )
}