const addTodo = todo => (
  {
    type: 'ADD_TODO',
    payload: { todo }
  }
);

const removeTodo = id => (
  {
    type: 'REMOVE_TODO',
    payload: { id }
  }
);

const toggleTodo = id => (
  {
    type: 'TOGGLE_TODO',
    payload: { id }
  }
);

export {
  addTodo,
  removeTodo,
  toggleTodo
};
