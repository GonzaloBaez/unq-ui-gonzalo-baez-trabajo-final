

function ResultadoGlobal({ganadasJugador,ganadasApp,nombreJugador1,nombreJugador2}){
    return(
        <>
            <table class="table table-sm table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Ganadas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{nombreJugador1}</th>
                        <td>{ganadasJugador}</td>
                    </tr>
                    <tr>
                        <th scope="row">{nombreJugador2}</th>
                        <td>{ganadasApp}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ResultadoGlobal;