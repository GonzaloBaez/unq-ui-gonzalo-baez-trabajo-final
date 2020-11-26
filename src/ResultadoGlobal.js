

function ResultadoGlobal({ganadasJugador,ganadasApp}){
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
                        <th scope="row">Jugador</th>
                    <   td>{ganadasJugador}</td>
                    </tr>
                    <tr>
                        <th scope="row">App</th>
                        <td>{ganadasApp}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default ResultadoGlobal;