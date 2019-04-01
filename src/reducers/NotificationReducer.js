import Images from '../../assets/images/index';

function randomNumGenerator() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const INITIAL_STATE = {
  latestNotificationCount: 8,
  notificationsList: [
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 7, 9, 36, 48),
      action: 'posted a new status',
      content: 'SFU Sustainable Energy Engineering (SEE) program, a great program if you are interested in the hard science of making the world greener, will be holding an information session at their Surrey Campus, in Rm 3090, 5:30 - 6:30 PM on Thurs, Jan 17 2019',
      link: ''
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 7, 10, 14, 35),
      action: 'updated a new reminder',
      content: 'Hey grads! Happy New Year and hope you\'ve had a great holiday! Just a quick reminder that your grad write-ups/baby photos are due today!!! (January 7)!! Please get them in SAP. Here is the link: ',
      link: 'https://goo.gl/forms/rMj8W6Cya8mbDpyt1'
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Churchill',
        avatar: Images.avatar.churchill_avatar
      },
      sentAt: new Date(2019, 0, 7, 15, 5, 0),
      action: 'updated a new reminder',
      content: 'Tues, Jan 8 is Collab/Flex Day. School in session at 10:15 AM. Flex time at 1:50 PM.',
      link: ''
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 9, 9, 42, 32),
      action: 'posted a new status',
      content: 'Interested or applying to Sauder. Read the attached PDF for details about information upcoming sessions.',
      link: 'http://bit.ly/2CYI8jI'
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 10, 8, 35, 27),
      action: 'posted a new status',
      content: 'The YMCA is offering free Mindfulness Groups for youth interested in learning how to better cope with low mood and manage stress. For more information see the oisters outside Ms. Salter\'s Office in the counselling suite. Intake sessions in March.',
      link: ''
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Grad Committee',
        avatar: ''
      },
      sentAt: new Date(2019, 0, 10, 15, 32, 48),
      action: 'posted a new status',
      content: 'Attention Grad Committee!! First meeting of the New Year is tomorrow at lunch in Mr. Hauck\'s room. See you there!!! Please be there and on time. Decisions need to be made and your input is required.',
      link: ''
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 14, 13, 51, 55),
      action: 'posted a new status',
      content: 'Hello folks. All grade 12 students are eligible to attend the Trades training programs after graduation. This is a fantastic opportunity. See the attachment for more information: ',
      link: 'http://bit.ly/2TJYGS0'
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 15, 10, 21, 8),
      action: 'posted a new status',
      content: 'Vancouver Fire & Rescue - Youth Outreach Academy - April 23-27, 2019 Application deadline MARCH 15 - A very cool opportunity for grades 11 and 12.',
      link: 'http://vancouver.ca/youthacademy'
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 15, 14, 44, 47),
      action: 'posted a new status',
      content: 'Any gr 12 students who did not write the Numeracy Assessment last year (including those students new to SWC this year), must see Ms. Fenton in the office to get the time and location when they will write on Jan.21st. This exam is a grad requirement!',
      link: ''
    },
    { id: randomNumGenerator(),
      user: {
        id: randomNumGenerator(),        
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 16, 9, 22, 40),
      action: 'posted a new status',
      content: 'Applying SFU! SFU, and ONLY SFU, requires ALL gr.11 online classes, not just gr.12, to be completed by Jan. 31st. Some of you may have been told that gr.11 courses only require a June completion date. This requirement does not apply not UBC.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 16, 15, 24, 43),
      action: 'posted a new status',
      content: 'Attention gr.11-12 student. The Vancouver Firefighters Youth Academy (Apr.23-27) is now accepting applications. Download application at: ',
      link: 'http://vancouver.ca/youthacademy'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Committee',
        avatar: ''
      },
      sentAt: new Date(2019, 0, 16, 15, 26, 2),
      action: 'posted a new status',
      content: 'There will be a Grad Committee meeting this Friday in Mr. Lam\'s room (Rm. 316) at lunch. Let get some stuff done:)',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 18, 14, 49, 44),
      action: 'posted a new status',
      content: 'Grad clothing is available to order until Jan 31st. Just order through the same website you pay your school fees. The more you order, the better you\'ll look! Get all your friends to order as well!',
      link: 'http://bit.ly/2Dk4sEB'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Churchill',
        avatar: Images.avatar.churchill_avatar
      },
      sentAt: new Date(2019, 0, 18, 15, 13, 25),
      action: 'posted a new status',
      content: 'Matchmaker Questionnaire Link: ',
      link: 'http://surveymonkey.com/r/mm18155c'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 18, 15, 55, 25),
      action: 'posted a new status',
      content: 'This is an announcement to any grade 12 student who still needs to write the Provincial Numeracy Assessment. You must write it Mon. Jan. 21st at 12:00 in the MacLab. Please try o arrive 15 minutes before to ensure your computer is working properly.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Committee',
        avatar: ''
      },
      sentAt: new Date(2019, 0, 22, 14, 37, 28),
      action: 'posted a new status',
      content: 'Grad Committee meeting this Friday in Mr. Lam\'s room, 316, at lunch. Be there or be square.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 23, 10, 43, 25),
      action: 'posted a new status',
      content: 'Any Gr.12\'s who have not been measured for their Grad gowns need to see either Mr. Pratt or Mr. Johnston asap to get this done. You want to look good at Grad!!',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 0, 30, 8, 8, 16),
      action: 'posted a new status',
      content: 'Attention all grads! The very LAST day to submit your grad write ups/baby photos is January 30, 11:59pm.Please meet the deadline!!! Message Janice Chen or email swcyearbook2019@gmail.com for any questions.',
      link: 'https://goo.gl/forms/fSF5KvaxyPBBUOOQ2'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 0, 30, 8, 23, 38),
      action: 'posted a new status',
      content: 'BCIT would like to invite students to join them at Big Info on Wednesday, February 20 at 4:30-7:30 pm at the BCIT Burnaby Campus. Check it out.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 1, 5, 9, 17, 36),
      action: 'posted a new status',
      content: 'Ms. Blair would like to remind you that the second assignment for Grad Transitions is due on Feb. 28th. If you haven\'t completed your 1st assignment you can still do so.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 1, 6, 9, 40, 30),
      action: 'posted a new status',
      content: 'All grads are eligible to join the grad choir and perform at the Grad Ceremony! If you are interested in this cool opportunity see either Ms. Dionne or Mr. Johnston.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 1, 6, 10, 21, 10),
      action: 'posted a new status',
      content: 'Self-Defense Workshop February 26th 3:30-5:00 - If interested see your grade counsellor ASAP!',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 1, 6, 15, 48, 36),
      action: 'posted a new status',
      content: 'Vancouver Fire & Rescue Service Youth Outreach Academy. Experience the life of a Vancouver Firefighter. April 23-27. For grades 11 and 12 only Applications due: March 15. Application attached: ',
      link: 'http://bit.ly/2SfDmrz'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 1, 6, 15, 54, 16),
      action: 'posted a new status',
      content: 'CS 11 student required for 1-3 PE. If you are an athletic type with good leadership skills and consider yourself a good role model and would like to CS in 1-3, please see Ms. Salter in the counselling suite.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 1, 15, 9, 28, 27),
      action: 'posted a new status',
      content: 'Grads,Grad committee has already sent out this information, but to repeat, if you have paid for your name to be on your Grad clothing you must fill in the form that is posted on the Facebook page. Deadline to do so is Feb 28th. Then the order goes in.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Churchill',
        avatar: Images.avatar.churchill_avatar
      },
      sentAt: new Date(2019, 1, 21, 15, 4, 33),
      action: 'posted a new status',
      content: 'Churchillians! The Mental Health Network is hosting presentations in the Auditorium Fri. Feb.22n at lunch. Come have a seat and enjoy hearing inspirational stories and help raise awareness and break down the stigma associated with mental health.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 1, 25, 10, 57, 4),
      action: 'posted a new status',
      content: 'Grads! The VSB Youth In Trades programs are available to you for FREE even after graduation. If you are interested in trades this is an excellent opportunity. See the attached link and document for more info!',
      link: 'http://bit.ly/2D2ApRF'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 1, 25, 13, 43, 8),
      action: 'posted a new status',
      content: 'UofT is looking for some help, $avail. If you have applied to UofT and will be in Vancouver March 26th or 27th,see attached. They are looking for both Humanities and STEM applicants to interview. See Mr. Johnston if interested. Deadline is Feb 27th.',
      link: 'http://bit.ly/2EmY8f9'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 1, 27, 9, 50, 38),
      action: 'posted a new status',
      content: 'Tomorrow is your last day to order your grad clothing !!! The order goes in on Friday!!! Go to your school fees acct and order now!! If you cannot log in to your acct come and see Mr. Johnston and we will problem solve!',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Program Opportunity',
        avatar: Images.avatar.program_opportunity_avatar
      },
      sentAt: new Date(2019, 2, 1, 10, 29, 36),
      action: 'posted a new status',
      content: 'FYI: FREE Prom Beauty Make-up Workshop at Curlique on Saturday, March 16th. Space is limited, so registration is REQUIRED. Link: ',
      link: 'http://tinyurl.com/y5htgpbq'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 2, 5, 12, 57, 21),
      action: 'posted a new status',
      content: 'BCIT Engineering Info Session Date: Wednesday, March 13, 2019 Time: 5:30 p.m. – 7:30 p.m. Location: BCIT Burnaby Campus, Building SE2, Room 212A/B',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Grad Opportunity',
        avatar: Images.avatar.grad_opportunity_avatar
      },
      sentAt: new Date(2019, 2, 5, 15, 48, 15),
      action: 'posted a new status',
      content: 'Hey Grads, see the attachment for an interesting opportunity to get know about what research is really like at post-secondary, particularly UBC.',
      link: 'http://bit.ly/2Ti2jTM'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 11, 11, 12, 26),
      action: 'updated a new reminder',
      content: 'Reminder that District Scholarship applications are DUE THIS THURSDAY (March 14th) to the office! Worth $1,250! Apply! Application can be found here: ',
      link: 'http://go.vsb.bc.ca/schools/churchill/Students/scholarshipbursary/Pages/default.aspx'
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 11, 13, 13, 35),
      action: 'posted a new status',
      content: 'Gr.12s! If you haven\'t logged into your MyBluePrint acct within the past week please do so asap. There was an issue with the system and Ms. Blair needs you to log in so that she can ensure that your assignments are tracked. See the office with issues.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 11, 13, 15, 22),
      action: 'posted a new status',
      content: 'If you haven\'t already, please get your oneliners into Mr. J or Mr. Pratt. 2nd term is over, Grad is approaching and the more onliners we have the better the ceremony. Sheets are available in the counselling suite.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 11, 13, 18, 17),
      action: 'posted a new status',
      content: 'Gr12\'s not taking EN12 at Churchill. You need to submit a scholarship resume to Mr. Johnston if you are planning on applying for any District Dogwood or Churchill scholarships. Templates for this resume are available from Mr. Johnston.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 13, 11, 48, 49),
      action: 'posted a new status',
      content: 'ATTENTION ALL GRADE 12S WHO PURCHASED A SPRING FORMAL TICKET: GRAD COMMITTEE IS GIVING OUT REFUNDS RIGHT NOW IN THE COUNSELLING SUITE.! THANKS.',
      link: ''
    },
    { id: randomNumGenerator(), 
      user: {
        id: randomNumGenerator(),
        name: 'Class of 2019',
        avatar: Images.avatar.class_of_2019_avatar
      },
      sentAt: new Date(2019, 2, 15, 14, 8, 13),
      action: 'updated a new reminder',
      content: 'A reminder to Grads who have not yet submitted a resume to your English teacher for scholarship purposes: Get your resume in to Ms. Yee in Room 317 by Friday, April 5th for consideration for Churchill scholarships!',
      link: ''
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

