const changeName = (block, name) => (
  {
    type: 'CHANGE_NAME',
    payload: { block, name }
  }
);

const changeRoom = (block, room) => (
  {
    type: 'CHANGE_ROOM',
    payload: { block, room }
  }
);

const changeTeacher = (block, teacher) => (
  {
    type: 'CHANGE_TEACHER',
    payload: { block, teacher }
  }
);

const changeColor = (block, color) => (
  {
    type: 'CHANGE_COLOR',
    payload: { block, color }
  }
);

const changeNotes = (block, notes) => (
  {
    type: 'CHANGE_NOTES',
    payload: { block, notes }
  }
);

export {
  changeName,
  changeRoom,
  changeTeacher,
  changeColor,
  changeNotes
};
