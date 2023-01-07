import React from "react";
import {ButtonClick} from "../button/ButtonClick";

export class Form extends React.Component{
    render() {
        return (
            <>
            <form>
                <div>
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
                    <ButtonClick/>
                </div>
                <div>
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
                    <ButtonClick/>
                </div>
            </form>
            </>
        );
    }

}