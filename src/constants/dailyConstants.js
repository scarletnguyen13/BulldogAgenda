/* eslint-disable no-multi-spaces */
const COURSE_DEFAULT_HEIGHT = 106;
const LUNCH_DEFAULT_HEIGHT  = 75;
const BREAK_DEFAULT_HEIGHT  = 55;

const BLOCK_1_START = ' 8:35 AM';
const BLOCK_1_END   = ' 10:00 AM';

const BREAK_START   = ' 10:01 AM';
const BREAK_END     = ' 10:15 AM';

const BLOCK_2_START = ' 10:16 AM';
const BLOCK_2_END   = ' 11:35 AM';

const LUNCH_START   = ' 11:36 AM';
const LUNCH_END     = ' 12:15 PM';

const BLOCK_3_START = ' 12:16 PM';
const BLOCK_3_END   = ' 1:38 PM';

const BLOCK_4_START = ' 1:39 PM';
const BLOCK_4_END   = ' 3:03 PM';

const EMPTY_BLOCK = {
  courseBlock: '', courseName: '', courseRoom: '', courseTeacher: '', courseColor: '#C6C3C3', courseNotes: ''
};

export {
  COURSE_DEFAULT_HEIGHT,
  LUNCH_DEFAULT_HEIGHT,
  BREAK_DEFAULT_HEIGHT,
  BLOCK_1_START, BLOCK_1_END,
  BREAK_START, BREAK_END,
  BLOCK_2_START, BLOCK_2_END,
  LUNCH_START, LUNCH_END,
  BLOCK_3_START, BLOCK_3_END,
  BLOCK_4_START, BLOCK_4_END,
  EMPTY_BLOCK
};
