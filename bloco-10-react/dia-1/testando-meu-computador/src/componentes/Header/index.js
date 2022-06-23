import React from "react";

const strings = ['Ahri', 'Annie', 'Nami', 'Jinx']

const Task = (value) => {
  return (
    <li className="li-menu">{value}</li>
  )
}

const taskList = () => {
  return (
    strings.map((nome) => {
      return Task(nome)
    })
  )
}

class Header extends React.Component {
    render () {
        return (
            <div className="teste">
            <h1>Conteúdos de Front-End</h1>
            <ol className="ol-menu">
                {taskList()}
            </ol>
            </div>
        )
    }
}

export default Header