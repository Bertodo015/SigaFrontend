import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
    return(
        <main>
            <h2>Olá</h2>
            <p>Prezado(a),</p>
            <p>A partir de agora você passará a ter acesso aos seus dados no Sistema Acadêmico do IFMS.</p>
            <p>
                Essa é a segunda de várias etapas que virão. A primeira foi o acesso ao boletim, agora, nesta fase você
                poderá consultar em tempo real quais as unidades que está matriculado no semestre, ver horários de aula
                e permanência, bem como acessar notas e faltas, além do boletim.
            </p>
            <p>
                Se você está fazendo mais de um curso no IFMS poderá alternar entre suas diferentes matrículas no canto
                superior esquerdo da tela, abaixo do texto “Sistema Acadêmico”.
            </p>
            <p>
                No menu "<Link to="/disciplinas">Disciplinas</Link>" você verá a relação de todas as unidades
                que está matriculado no semestre atual. Clicando sobre o nome de cada uma, você verá os horários de
                permanência do(a) professor(a) e os horários e locais de aula.</p>
            <p>
                No menu "<Link to="/boletim">Notas</Link>" você conseguirá visualizar todas as notas já lançadas,
                tanto das unidades atuais quanto daquelas de semestres anteriores e a quantidade de faltas em cada uma
                delas
            </p>
            <p>
                Já em "<Link to="/boletim">Boletim</Link>" você conseguirá verificar, além de sua nota, o número
                de faltas e o percentual que elas representam. Lembre-se que deve ter pelo menos 75% de frequência.
            </p>
            <p>Em um futuro próximo, novas funcionalidades serão disponibilizadas na Área do Estudante, como solicitação
                de rematrícula, acesso ao plano de ensino do professor, à matriz curricular do curso, gerar atestado de
                matrícula, acesso ao histórico escolar, entre outras.</p>
            <p>Fique à vontade para dar sugestões para melhoria desse espaço.</p>
            <p>Aproveitem!</p>
            <p>Pró-Reitoria de Ensino e Reitoria</p>
        </main>
    )
}