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
    <div>
      <input type="text" onChange={handleOnChange} value={value} placeholder="Text here" className="todo-field"/>
      <button className= 'btn' onClick={handleAdd}>Create Task</button>
    </div>
  )
}

export default connect(null, { addTodo })(AddTodo)
