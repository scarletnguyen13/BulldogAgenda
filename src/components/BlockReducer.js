import { combineReducers } from 'redux';

const INITIAL_STATE = {
  block1_1: {
    courseBlock: '1 - 1', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block1_2: {
    courseBlock: '1 - 2', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block1_3: {
    courseBlock: '1 - 3', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block1_4: {
    courseBlock: '1 - 4', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block2_1: {
    courseBlock: '2 - 1', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block2_2: {
    courseBlock: '2 - 2', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block2_3: {
    courseBlock: '2 - 3', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  },
  block2_4: {
    courseBlock: '2 - 4', courseName: '', courseRoom: '', 
    courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
  }
};

const blockReducer = (state = INITIAL_STATE, action) => {
  const stateKeys = Object.keys(state);
  const values = Object.values(state);
  const newState = {};

  switch (action.type) {
    case 'CHANGE_NAME': {
      const {block, name} = action.payload;
      values.forEach(blockObj => {
        if(blockObj.courseBlock === block) blockObj.courseName = name;
      });
      for (let i = 0; i < values.length; i++) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_ROOM': {
      const {block, room} = action.payload;
      values.forEach(blockObj => {
        if(blockObj.courseBlock === block) blockObj.courseRoom = room;
      });
      for (let i = 0; i < values.length; i++) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_TEACHER': {
      const {block, teacher} = action.payload;
      values.forEach(blockObj => {
        if(blockObj.courseBlock === block) blockObj.courseTeacher = teacher;
      });
      for (let i = 0; i < values.length; i++) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_COLOR': {
      const {block, color} = action.payload;
      values.forEach(blockObj => {
        if(blockObj.courseBlock === block) blockObj.courseColor = color;
      });
      for (let i = 0; i < values.length; i++) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_NOTES': {
      const {block, notes} = action.payload;
      values.forEach(blockObj => {
        if(blockObj.courseBlock === block) blockObj.courseNotes = notes;
      });
      for (let i = 0; i < values.length; i++) newState[stateKeys[i]] = values[i];
      return newState;
    }
    default:
      return state
  }
};

export default combineReducers({
  blocks: blockReducer,
});