import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/addTodo'
import TodoList from './components/todoList'
import VisibilityFilter from './components/visibilityFilter'
import { Provider } from 'react-redux'
import store from './redux/store'

const filters = ['All', 'Completed', 'ncomplete']
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Todo List</h1>
          <AddTodo/>
          <VisibilityFilter filters={filters}/>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
