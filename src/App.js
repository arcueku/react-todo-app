import React from 'react'
import TodoList from './TodoListComponent'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <TodoList />
      </div>
    )
  }
}

export default App
