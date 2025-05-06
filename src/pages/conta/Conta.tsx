import './Conta.css';
import perfil from '../../img/perfil.png';

export default function Conta() {
    return (
        <main>
            <form method="post">
                <div className={'perfil'}>
                    <h2>Editar Conta</h2>
                    <img src={perfil} id='imgFoto' alt="foto Perfil" />
                    
                    <p>Foto:
                        <input type="file" name="foto" id="fileFoto" />
                    </p>

                    <p>Nome:
                        <input type="text" name="nome" placeholder="nome" required />
                    </p>

                    <p>Nome:
                        <input type="text" name="nome" placeholder="nome" required />
                    </p>
                    <p>Email:
                        <input type="email" name="email" placeholder="email" required />
                    </p>
                    <p id="paiSenha1">Senha:
                        <input type="password"  id="senha1" placeholder="senha" name="senha" required />
                    </p>
                    <p id="paiSenha2">Repita a senha:
                        <input type="password" id="senha2" required placeholder="repita a senha" />
                    </p>

                    <p>CPF (somente números):
                        <input type="tel" placeholder="CPF" name="cpf" required />
                    </p>
                    <p>Data de nascimento (dd/mm/aaaa)
                        <input type="date" required name="dataNasc" value="2023-06-15" />
                    </p>

                    <button type="submit">Salvar</button>
                </div>
            </form>
        </main>
    );
}
/*
export default function Conta() {
    return (
        <main>
            <form method="post">
                <div className={'perfil'}>
                    <h2>Editar Conta</h2>
                    <img src="../../img/fotos" id="imgFoto" alt="foto Perfil"><br>

                    <p>Foto:
                        <input type="file" name="foto" id="fileFoto" >
                    </p>
                    <p>Nome:
                        <input type="text" name="nome" placeholder="nome" required>
                    </p>
                    <p>Email:
                        <input type="email" name="email" placeholder="email" required>
                    </p>
                    <p id="paiSenha1">Senha:
                        <input type="password"  id="senha1" placeholder="senha" name="senha" required>
                    </p>
                    <p id="paiSenha2">Repita a senha:
                        <input type="password" id="senha2" required placeholder="repita a senha">
                    </p>

                    <p>CPF (somente números):
                        <input type="tel" placeholder="CPF" name="cpf" required>
                    </p>
                    <p>Data de nascimento (dd/mm/aaaa)
                        <input type="date" required name="dataNasc" value="2023-06-15">
                    </p>

                    <button type="submit">Salvar</button>
                </div>
            </form>
        </main>
    )
}*/