import { blockOfText } from '../constants/blockOfText';

const INITIAL_STATE = {
  latestNotificationCount: 0,
  notificationsList: [
    { id: 0, 
      user: {
        id: 1,
        name: 'Bulldog Software Co.',
        avatar: ''
      },
      sentAt: new Date(2019, 1, 20),
      action: 'posted a new status on the wall',
      content: blockOfText
    },
    { id: 0, 
      user: {
        id: 1,
        name: 'Sir Winston Churchill Secondary School',
        avatar: ''
      },
      sentAt: new Date(2019, 2, 15),
      action: 'posted a new status on the wall',
      content: blockOfText
    },
    { id: 0, 
      user: {
        id: 1,
        name: 'Ms. Blair',
        avatar: ''
      },
      sentAt: new Date(2018, 1, 20),
      action: 'posted a new status on the wall',
      content: blockOfText
    },
]}

export default notificationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

