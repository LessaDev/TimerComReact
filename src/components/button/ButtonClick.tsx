import React from "react";
import style from "./ButtonClickStyle.module.scss";

export class ButtonClick extends React.Component<{
    children?: React.ReactNode
}>{
    render() {
        return(
            <div>
                <button className={style.botao}>
                    {this.props.children}
                </button>
            </div>
    )
    }
}