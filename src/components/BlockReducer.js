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
  switch (action.type) {
    case 'CHANGE_COLOR':
      const {block, color} = action.payload;

      const values = Object.values(state);
      values.forEach(function(blockObj) {
        if(blockObj.courseBlock === block) {
          blockObj.courseColor = color;
        }
      });

      const newState = {};
      for (let i = 0; i < values.length; i++) {
        newState[Object.keys(state)[i]] = values[i];
      }

      return newState;

    default:
      return state
  }
};

export default combineReducers({
  blocks: blockReducer,
});