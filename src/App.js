import React from 'react'
import TodoList from './TodoListComponent'
import Form from './FormComponent'
import { ListItem } from 'material-ui'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [''],
      value: '',
    }
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()

    this.setState({
      list: [...this.state.list, this.state.value],
      value: '',
    })
  }
  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <Form
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoList list={this.state.list} />
      </div>
    )
  }
}

export default App
