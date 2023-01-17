import React from "react";
import {ButtonClick} from "../button/ButtonClick";
import style from './FormStyle.module.scss'


export class Form extends React.Component{
    render() {
        return (
            <>
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Tarefa
                    </label>
                    <input
                        type="tarefa"
                        name="tarefa"
                        id="tarefa"
                        placeholder="Qual tarefa deseja realizar?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        placeholder="Quanto tempo deseja dedicar a essa tarefa?"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <ButtonClick>Adcionar</ButtonClick>
            </form>
            </>
        );
    }

}