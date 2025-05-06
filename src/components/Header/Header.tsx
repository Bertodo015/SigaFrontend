import './Header.css';

type HeaderProps = {
    titulo: string;
    login: boolean;
}

export default function Header({titulo, login}: HeaderProps) {
    if (login == false) {
        return(
            <header>
                <h1>Sistema Acadêmico - {titulo}</h1>
                
                <form id="login" action="/home">
                    <input type="email" placeholder="e-mail" name="email" required />
                    <input type="password" placeholder="senha" id="senha3" name="senha" required />
                    <button type="submit">Logar</button>
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