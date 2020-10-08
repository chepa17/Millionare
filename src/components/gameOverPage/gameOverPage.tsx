import React, {useCallback} from "react";
import { Button } from "../ui/button/button";
import config from '../../config.json'
import { useHistory } from "react-router-dom";
import { ROUTES } from "../../types";

type GameOverPageProps = {
    round: number;
    restartGame: () => void;
}

export const GameOverPage: React.FC<GameOverPageProps> = ({round, restartGame}) => {
    const prize = round > 1 ? config.prizes[round - 2] : '$0'
    const history = useHistory();

    const onClick = useCallback(() => {
        restartGame();
        history.push(ROUTES.HOME);
    }, [restartGame, history]);

    return(
        <div className='start'>
            <div className='start__content max-width'>
                <div className='start__left'>
                    <img src='./hand1.png' alt='hand'/>
                </div>
                <div className='start__right'>
                    <div className='question'>
                        Total score:
                    </div>
                    <div className='headline'>
                        {prize} earned
                    </div>
                    <Button onClick={onClick}>Try Again</Button>
                </div>
            </div>
        </div>
    )
}
