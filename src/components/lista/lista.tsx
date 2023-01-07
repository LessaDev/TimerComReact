
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
    }]
    return(
        <aside>
            |<h2>Preparos do dia</h2>
            <ul>{preparos.map((item, index) => (
                <li key={index}>
                    <h3> {item.preparo} </h3>
                    <span> {item.tempo}</span>
                </li>
            ))}
            </ul>
        </aside>
    )
}

export default Lista;