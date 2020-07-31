import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { addTodoDescription } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input
    let descr
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    if (!descr.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value,descr.value))
                    dispatch(addTodoDescription(descr.value))
                    input.value = ''
                    descr.value = ''
                }}
            >
                <input ref={node => (input = node)} />
                <input ref={node => (descr = node)} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)