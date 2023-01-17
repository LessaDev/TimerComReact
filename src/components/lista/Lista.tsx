import style from './ListaStyle.module.scss'
import Item from "./item/Item";

function Lista() {
    const preparos = [{
        preparo: 'Feijao',
        tempo: '00:30:00'
    },{
        preparo: 'Doce de Leite Condensado',
        tempo: '01:30:00'
    },{
        preparo: 'pudim',
        tempo: '02:00:00'
    },]
    return(
        <aside className={style.listaTarefas}>
            <h2>Preparos do dia</h2>
            <ul>{preparos.map((item) => (
            <Item{...item} />
            ))}
            </ul>
        </aside>
    )
}

export default Lista;