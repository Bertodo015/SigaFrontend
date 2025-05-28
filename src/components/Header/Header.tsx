import { Link } from 'react-router-dom';
import './Header.scss';

type HeaderProps = {
    titulo: string;
    login: boolean;
}

export default function Header({titulo, login}: HeaderProps) {
    if (login == false) {
        return(
            <header>
                <h1>Sistema Acadêmico - {titulo}</h1>
                
                <form id="login">
                    <input type="email" placeholder="e-mail" />
                    <input type="password" placeholder="senha" />
                    <Link to="/home">
                        <button>Logar</button>
                    </Link>
                </form>
            </header>
        )
    } else {
        return(
            <header>
                <h1>Sistema Acadêmico - {titulo}</h1>
            </header>
        )
    }
}