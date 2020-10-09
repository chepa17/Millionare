import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../types";
import { Button } from "../ui/button/button";
import './startPage.css';

export const StartPage : React.FC = () => {
    const history = useHistory();

    const onNextStep = useCallback(() => {
        history.push(ROUTES.GAME);
    }, [history]);

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
