/* eslint-disable no-param-reassign */
const INITIAL_STATE = {
  block1_1: {
    courseBlock: '1 - 1',
    courseName: 'Physics 12',
    courseRoom: 'Rm. 209',
    courseTeacher: 'Mr. Klaassen',
    courseColor: '#2196F3',
    courseNotes: ''
  },
  block1_2: {
    courseBlock: '1 - 2',
    courseName: 'Calculus 12',
    courseRoom: 'Rm. 112',
    courseTeacher: 'Mrs. Kobi',
    courseColor: '#FFEB3B',
    courseNotes: ''
  },
  block1_3: {
    courseBlock: '1 - 3',
    courseName: 'Chemistry 12',
    courseRoom: 'Rm. 310A',
    courseTeacher: 'Mr. Benson',
    courseColor: '#9C27B0',
    courseNotes: ''
  },
  block1_4: {
    courseBlock: '1 - 4',
    courseName: 'English 12',
    courseRoom: 'Rm. 203',
    courseTeacher: 'Mr. Hauck',
    courseColor: '#8BC34A',
    courseNotes: ''
  },
  block2_1: {
    courseBlock: '2 - 1',
    courseName: 'Programming 12',
    courseRoom: 'Rm. 102',
    courseTeacher: 'Mrs. Braaten',
    courseColor: '#673AB7',
    courseNotes: ''
  },
  block2_2: {
    courseBlock: '2 - 2',
    courseName: 'Draf & Design 11',
    courseRoom: 'Rm. 215',
    courseTeacher: 'Mr. Olson',
    courseColor: '#FFC107',
    courseNotes: ''
  },
  block2_3: {
    courseBlock: '2 - 3',
    courseName: 'Painting 11',
    courseRoom: 'Rm. 308',
    courseTeacher: 'Mr. Lawrence',
    courseColor: '#E91E63',
    courseNotes: ''
  },
  block2_4: {
    courseBlock: '2 - 4',
    courseName: 'Business 12',
    courseRoom: 'Rm. 100',
    courseTeacher: 'Mr. Kam',
    courseColor: '#00BCD4',
    courseNotes: ''
  }
};

// eslint-disable-next-line no-undef
export default blockReducer = (state = INITIAL_STATE, action) => {
  const stateKeys = Object.keys(state);
  const values = Object.values(state);
  const newState = {};

  switch (action.type) {
    case 'CHANGE_NAME': {
      const { block, name } = action.payload;
      values.forEach((blockObj) => {
        if (blockObj.courseBlock === block) blockObj.courseName = name;
      });
      for (let i = 0; i < values.length; i += 1) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_ROOM': {
      const { block, room } = action.payload;
      values.forEach((blockObj) => {
        if (blockObj.courseBlock === block) blockObj.courseRoom = room;
      });
      for (let i = 0; i < values.length; i += 1) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_TEACHER': {
      const { block, teacher } = action.payload;
      values.forEach((blockObj) => {
        if (blockObj.courseBlock === block) blockObj.courseTeacher = teacher;
      });
      for (let i = 0; i < values.length; i += 1) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_COLOR': {
      const { block, color } = action.payload;
      values.forEach((blockObj) => {
        if (blockObj.courseBlock === block) blockObj.courseColor = color;
      });
      for (let i = 0; i < values.length; i += 1) newState[stateKeys[i]] = values[i];
      return newState;
    }
    case 'CHANGE_NOTES': {
      const { block, notes } = action.payload;
      values.forEach((blockObj) => {
        if (blockObj.courseBlock === block) blockObj.courseNotes = notes;
      });
      for (let i = 0; i < values.length; i += 1) newState[stateKeys[i]] = values[i];
      return newState;
    }
    default:
      return state;
  }
};
