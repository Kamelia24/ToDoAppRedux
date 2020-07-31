let nextTodoId = 0
let nextTodoDescriptionId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})
export const addTodoDescription = text => ({
  type: 'ADD_TODO_DESCRIPTION',
  id: nextTodoDescriptionId++,
  text
})
export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})
export const toggleTodoDescription = id => ({
  type: 'TOGGLE_TODO_DESCRIPTION',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}