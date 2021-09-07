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
      <div className ='container-fluid wrapper'>
        <div className="row-fluid columns content">
          <div className="card mt-2">
            <div className="card-body">
              <h3 className="card-header">Todo List</h3>
              <Provider store={store}>
                <div className="App">
                  <div className="row mt-4">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className='col-sm-7'>
                            <p className="card-title" style={{fontSize: '21px', fontWeight: 'bold', marginLeft: '25px'}}>Create new task</p>
                          </div>
                            <AddTodo/>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <div className='col-sm-7 offset-md-2'>
                            <p className="card-title" style={{fontSize: '21px', fontWeight: 'bold', marginLeft: '25px'}}>List todo items</p>
                          </div>
                          <VisibilityFilter filters={filters}/>
                          <TodoList />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Provider>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
