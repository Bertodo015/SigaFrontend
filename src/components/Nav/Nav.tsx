import { Link } from 'react-router-dom';
import perfil from '../../img/perfil.png';
import './Nav.css';

export default function Nav(props: { logado: boolean }) {
    if (props.logado == false) {
        return (
            <nav>
                <ul>
                    <li><a href="http://www.ifms.edu.br/">Site do IFMS</a></li>
                </ul>
            </nav>
        )
    }
    return (
        
        <nav>
            <div className="perfil">
                <img src={perfil} alt="foto Perfil" /><br />
                <Link to="/conta">conta</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link to="/">sair</Link>
            </div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/Biblioteca">Biblioteca</Link></li>
                <li><Link to="/disciplinas">Disciplinas</Link></li>
                <li><Link to="/boletim">Boletim</Link></li>
                <li><Link to="/jogo">Jogar</Link></li>
            </ul>
        </nav>
    )
}