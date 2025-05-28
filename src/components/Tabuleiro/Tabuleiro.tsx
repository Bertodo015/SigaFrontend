import { useState } from "react";
import Celula from "../Celula/Celula.tsx";
import "./Tabuleiro.scss";

export default function Tabuleiro() {
    //celulas  =documento.querySelectorAll(".celula");
    const [celulas, setCelulas] = useState<(string | null)[]>([null, null, null, null, null, null, null, null, null]);
    const [vezX, setVezX] = useState(true);
    const [vitoria, setVitoria] = useState(false);  //pode usar o 'let' na criação da variável
    const [mensagem, setMensagem] = useState("Vez do Xis");

    function joga(i: number) {

        if (celulas[i] !== null || vitoria == true) {
            return;
        }
        //let novoTabuleiro = [celulas[0], celulas[1], celulas[2], celulas[3], celulas[4], celulas[5], celulas[6], celulas[7], celulas[8]];
        const novoTabuleiro = [...celulas];

        if (vezX == true) {
            novoTabuleiro[i] = "xis"
            setMensagem("Vez do Círculo")
            setVezX(false)
        } else {
            novoTabuleiro[i] = "circulo"
            setMensagem("Vez do Xis")
            setVezX(true)
        }

        setCelulas(novoTabuleiro);
        verificaVitoria(novoTabuleiro);
        
            
        
    }

    function verificaEmpate(estadoTabuleiro: (string | null)[]) {
        if (vitoria !== true && (estadoTabuleiro[0] != null && 
            estadoTabuleiro[1] != null && 
            estadoTabuleiro[2] != null && 
            estadoTabuleiro[3] != null && 
            estadoTabuleiro[4] != null && 
            estadoTabuleiro[5] != null && 
            estadoTabuleiro[6] != null && 
            estadoTabuleiro[7] != null && 
            estadoTabuleiro[8] != null) ){
            setMensagem("Empate!")
        } 
    
    }

    function verificaVitoria(estadoTabuleiro: (string | null)[]) {
        //vencedor na primeira linha
        if ((estadoTabuleiro[0] !== null &&
            estadoTabuleiro[0] == estadoTabuleiro[1] &&
            estadoTabuleiro[1] == estadoTabuleiro[2])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;
        }

        //vencedor na segunda linha
        if ((estadoTabuleiro[3] !== null &&
            estadoTabuleiro[3] == estadoTabuleiro[4] &&
            estadoTabuleiro[4] == estadoTabuleiro[5])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na terceira linha
        if ((estadoTabuleiro[6] !== null &&
            estadoTabuleiro[6] == estadoTabuleiro[7] &&
            estadoTabuleiro[7] == estadoTabuleiro[8])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na primeira coluna
        if ((estadoTabuleiro[0] !== null &&
            estadoTabuleiro[0] == estadoTabuleiro[3] &&
            estadoTabuleiro[3] == estadoTabuleiro[6])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na segunda coluna
        if ((estadoTabuleiro[1] !== null &&
            estadoTabuleiro[1] == estadoTabuleiro[4] &&
            estadoTabuleiro[4] == estadoTabuleiro[7])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na terceira coluna
        if ((estadoTabuleiro[2] !== null &&
            estadoTabuleiro[2] == estadoTabuleiro[5] &&
            estadoTabuleiro[5] == estadoTabuleiro[8])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na diagonal principal
        if ((estadoTabuleiro[0] !== null &&
            estadoTabuleiro[0] == estadoTabuleiro[4] &&
            estadoTabuleiro[4] == estadoTabuleiro[8])) {
            setVitoria(true);
            if (vezX == true) {
                setMensagem("Jogador Xis ganhou!")
                } else {
                    setMensagem("Jogador Círculo ganhou!")
                }
                return;

        }

        //vencedor na diagonal secundária
        if ((estadoTabuleiro[2] !== null &&
            estadoTabuleiro[2] == estadoTabuleiro[4] &&
            estadoTabuleiro[4] == estadoTabuleiro[6])) {
            setVitoria(true);
            
            if (vezX == true) {
            setMensagem("Jogador Xis ganhou!")
            } else {
                setMensagem("Jogador Círculo ganhou!")
            }
            return;

        }
        verificaEmpate(estadoTabuleiro);
    }

    return (
        <>
            <div className="tabuleiro">
                <Celula nomeClasse={celulas[0]} vezDoXis={vezX} onClick={() => { joga(0); }} />
                <Celula nomeClasse={celulas[1]} vezDoXis={vezX} onClick={function () { joga(1); }} />
                <Celula nomeClasse={celulas[2]} vezDoXis={vezX} onClick={function () { joga(2); }} />
                <Celula nomeClasse={celulas[3]} vezDoXis={vezX} onClick={function () { joga(3); }} />
                <Celula nomeClasse={celulas[4]} vezDoXis={vezX} onClick={function () { joga(4); }} />
                <Celula nomeClasse={celulas[5]} vezDoXis={vezX} onClick={function () { joga(5); }} />
                <Celula nomeClasse={celulas[6]} vezDoXis={vezX} onClick={function () { joga(6); }} />
                <Celula nomeClasse={celulas[7]} vezDoXis={vezX} onClick={function () { joga(7); }} />
                <Celula nomeClasse={celulas[8]} vezDoXis={vezX} onClick={function () { joga(8); }} />
            </div>

            <h1>{mensagem}</h1>

           {/* <BotaoReiniciar /> */}
        </>
    );
}