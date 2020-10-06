import React, {useState} from "react";
import classNames from "classnames";
import './button.css';
type Props = {
    onClick: () => void,
    children: string ,
}

export function Button(props: Props) {
    const [pressed, setPressed] = useState(false);
    const onClick = () => {
        setPressed(true);
        props.onClick();
    }
    return (
        <div className={classNames('button', {'pressed': pressed})} onClick={onClick}>{props.children}</div>
    )
}