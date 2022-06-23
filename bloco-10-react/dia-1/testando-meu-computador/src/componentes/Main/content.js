import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const elementoHtml = ({ conteudo, bloco, status }) => {
    return (
        <div className="card">
        <p>O conteúdo é: {conteudo}</p>
        <p><b>Bloco:</b> {bloco}</p>
        <p>Status: {status}</p>
        </div>
    )
}

const Texto = () => {
    return (
        conteudos.map(({ conteudo, bloco, status }) => {
            return (
                elementoHtml({conteudo, bloco, status})
            )
        })
    )
}

class Content extends React.Component {
    render () {
        return (
            <div>
            {Texto()}
            </div>
        ) 
    }
}

export default Content