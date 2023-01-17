import style from "../ListaStyle.module.scss";

export default function Item({ preparo, tempo}: {preparo: string, tempo: string}) {
    return (
        <li className={style.item}>
            <h3> {preparo} </h3>
            <span> {tempo}</span>
        </li>
    )
}