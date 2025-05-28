import './Boletim.scss';

export default function Boletim() {
    return(
        <main>

            <table>
                <tbody>
                    <tr>
                        <th>Estudante:</th>
                        <td>Camila</td>
                        <th>RA:</th>
                        <td>5555</td>
                    </tr>

                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <th>Unidade Curricular</th>
                        <th>CH</th>
                        <th>Aulas</th>
                        <th>Total Faltas</th>
                        <th>% Faltas</th>
                        <th>N1</th>
                        <th>N2</th>
                        <th>Média</th>
                        <th>Situação</th>
                        <th>Opções</th>
                    </tr>
                                        <tr>
                        <td>EXEMPLO Dispositivos Móveis<small>Túlio</small></td>
                        <td>80</td>
                        <td>100</td>
                        <td>25</td>
                        <td>25%</td>
                        <td>5</td>
                        <td>5</td>
                        <td>5</td>
                        <td>REPROVADO</td>
                    </tr>

                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <small><strong>Legenda:</strong>
                                <small><strong>CH/Aulas: </strong>Carga horária da Unidade Curricular em horas /
                                    Quantidade de aulas ou encontros presenciais previstos.</small></small>
                            <p>*Esses registros podem sofrer alterações até o final do periodo letivo.</p>
                        </td>
                    </tr>

                </tfoot>
            </table>

        </main>
    )
}