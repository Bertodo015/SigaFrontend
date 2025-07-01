/*import './Tema.scss';

import React, { useState } from 'react';

const [escuro, setEscuro] = useState<boolean>(false);


export default function Tema() {
    return (
        <div className='temas'>
            <input type="button" value="Claro" />
            <input type="button" value="Escuro" onClick={ setEscuro(true)}/>
            <input type="button" value="Impressão" />
        </div>
    )
}*/

import React, { useState } from 'react';
import './Tema.scss';

type TemaType = 'claro' | 'escuro' | 'impressao';

export default function Tema() {
  const [tema, setTema] = useState<TemaType>('claro');
  const bod =document.body;
  bod.className='app-tema tema-'+tema;



  return (
    <div className={`app-tema tema-${tema}`}>
      <div className="botoes-tema">
        <button
          className={tema === 'claro' ? 'ativo' : ''}
          onClick={() => setTema('claro')}
        >
          Claro
        </button>
        <button
          className={tema === 'escuro' ? 'ativo' : ''}
          onClick={() => setTema('escuro')}
        >
          Escuro
        </button>
        <button
          className={tema === 'impressao' ? 'ativo' : ''}
          onClick={() => setTema('impressao')}
        >
          Impressão
        </button>
      </div>
    </div>
  );
}