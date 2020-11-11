import React, {useCallback, useState} from "react";
import classNames from "classnames";
import './button.css';

type ButtonProps = {
    onClick: () => void,
    children: React.ReactNode,
}

export const Button: React.FC<ButtonProps> = ({children, onClick}) => {
    const [pressed, setPressed] = useState(false);

    const handleOnClick = useCallback(() => {
        setPressed(true);
        onClick();
    }, [setPressed, onClick]);

    return (
        <button type='button' 
            className={classNames('button', {'pressed': pressed})} 
            onClick={handleOnClick}
        >
            {children}
        </button>
    )
}
