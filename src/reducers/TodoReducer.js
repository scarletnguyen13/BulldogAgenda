function randomNumGenerator() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const INITIAL_STATE = {
  todoList: [{
    id: randomNumGenerator(),
    description: 'Lab 20A Write Up',
    dueDate: new Date(2019, 4, 16),
    dueTime: undefined,
    course: 1,
    type: 0,
    priority: 0,
    reminder: 0,
    check: true
  },
  {
    id: randomNumGenerator(),
    description: 'Lab 20A Write Up',
    dueDate: new Date(2019, 8, 16),
    dueTime: undefined,
    course: 0,
    type: 0,
    priority: 0,
    reminder: 0,
    check: true
  },
  {
    id: randomNumGenerator(),
    description: 'Lab 20A Write Up',
    dueDate: new Date(2019, 1, 16),
    dueTime: undefined,
    course: 2,
    type: 0,
    priority: 0,
    reminder: 0,
    check: true
  },
  {
    id: randomNumGenerator(),
    description: 'Lab 20A Write Up',
    dueDate: new Date(2019, 2, 16),
    dueTime: undefined,
    course: 3,
    type: 0,
    priority: 0,
    reminder: 0,
    check: true
  },
].sort(function(a,b){
  return (new Date(b.dueDate) - new Date(a.dueDate)) * -1;
})}

export default todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      return Object.assign({}, state, {
        todoList: 
          state.todoList
          .filter(todo => todo.id !== action.payload.todo.id)
          .concat(action.payload.todo)
          .sort(function(a,b) { return (new Date(b.dueDate) - new Date(a.dueDate)) * -1; })
      });
    } 
    case 'REMOVE_TODO': {
      return Object.assign({}, state, {
        todoList: 
          state.todoList
          .filter(todo => todo.id !== action.payload.id)
          .sort(function(a,b) { return (new Date(b.dueDate) - new Date(a.dueDate)) * -1; })
      });
    } 
    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      return Object.assign({}, state, {
        todoList: 
          state.todoList
            .map(todo => todo.id === id ? {...todo, check: !todo.check} : todo)
            .sort(function(a,b) { return (new Date(b.dueDate) - new Date(a.dueDate)) * -1; })
      });
    }
    default:
      return state
  }
};

