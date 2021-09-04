import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

function AddTodo({addTodo}) {
  const [value, setValue] = useState('');

  const handleOnChange = (e) => {
    setValue(e.target.value)
  }

  const handleAdd = () => {
    setValue('')
    addTodo(value)
  }

  return (
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <input type="text" onChange={handleOnChange} value={value} className="form-control" name="todo-item" placeholder="Text here" />
      </div>
      <div className='col-md-8 mt-3'>
        <button className= 'btn btn-primary' onClick={handleAdd} style={{width: '99%', marginLeft: '27%'}}>Create Task</button>
      </div>
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo)
