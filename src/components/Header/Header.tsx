import './Header.css';

export default function Header(props: {titulo:string}) {
    return(
        <header>
            <h1>Sistema Acadêmico - {props.titulo}</h1>
        </header>
    )
}