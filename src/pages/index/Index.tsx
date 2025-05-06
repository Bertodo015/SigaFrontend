import './Index.css';

export default function Index() {
    return (
        <main>
            <h2 className="outstanding-title">Cadastre-se</h2>
            <form method="post" action={"/home"} >
                <p>
                    Cadastre-se como
                    <select name="perfil" >
                        <option value="estudante">Estudante</option>
                        <option value="professor">Professor</option>
                    </select>
                </p>
                
                <p>
                    Nome: 
                    <input type="text" name="name" placeholder='nome' required />
                </p>
                
                <p>
                    E-mail:
                    <input type="text" name="email" placeholder='email' required />
                </p>

                <p>
                    Senha:
                    <input type="password" name="senha" placeholder='senha' required />
                </p>

                <p>
                    Repita a senha:
                    <input type="password" name="senha" placeholder='senha' required />
                </p>

                <p>
                    Foto:
                    <input type="file" name="foto" required />
                </p>

                <p>
                    CPF (somente números):
                    <input type="tel" name="cpf" placeholder='CPF' required />
                </p>

                <p>
                    Data de nascimento (dd/mm/aaaa)
                    <input type="date" name="dataNasc" required />
                </p>

                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}