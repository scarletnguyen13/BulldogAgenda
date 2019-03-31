import { blockOfText } from '../constants/blockOfText';

const INITIAL_STATE = {
  latestNotificationCount: 8,
  notificationsList: [
    { id: 0, 
      user: {
        id: 1,
        name: 'Bulldog Software Co.',
        avatar: ''
      },
      sentAt: new Date(2019, 1, 20),
      action: 'posted a new status',
      content: blockOfText
    },
    { id: 0, 
      user: {
        id: 1,
        name: 'Sir Winston Churchill Secondary School',
        avatar: ''
      },
      sentAt: new Date(2019, 2, 15),
      action: 'posted a new status',
      content: blockOfText
    },
    { id: 0, 
      user: {
        id: 1,
        name: 'Ms. Blair',
        avatar: ''
      },
      sentAt: new Date(2018, 10, 20),
      action: 'posted a new status',
      content: blockOfText
    },
].sort(function(a,b){
  return (new Date(b.sentAt) - new Date(a.sentAt));
})}

export default notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HAS_READ': {
      return Object.assign({}, state, {
        ...state,
        latestNotificationCount: 0
      })
    }
    default:
      return state
  }
};

