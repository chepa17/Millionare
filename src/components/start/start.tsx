import React from "react";
import { Button } from "../ui/button/button";
import './start.css';

export function Start() {
    const onNextStep = () => {
        return true
    }

    return(
        <div className='start'>
            <div className='start-bottom'/>
            <div className='start__content max-width'>
                <div className='start__left'>
                    <img src='./hand1.png' alt='hand'/>
                </div>
                <div className='start__right'>
                    <div className='headline'>
                        Who wants to be a millionaire?
                    </div>
                    <Button onClick={onNextStep}>Start</Button>
                </div>
            </div>
        </div>
    )
}