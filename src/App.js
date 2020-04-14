import React from 'react'
import TodoList from './TodoListComponent'
import { ListItem } from 'material-ui'

class App extends React.Component {
  render() {
    const list = ['プログラミング','読書']

    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList list = {list} />
      </div>
    )
  }
}

export default App
