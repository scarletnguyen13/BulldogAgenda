const INITIAL_STATE = {
  calendar: [
    {date: "01-04-2019", day: 'Day 1', events: ['School Re-Opens']},
    {date: "02-04-2019", day: 'Day 2'},
    {date: "03-04-2019", day: 'Day 1'},
    {date: "04-04-2019", day: 'Day 2', events: ['Euclid Math Competition']},
    {date: "05-04-2019", day: 'Day 1'},

    {date: "06-04-2019", day: 'Weekend'},
    {date: "07-04-2019", day: 'Weekend'},

    {date: "08-04-2019", day: 'Day 2'},
    {date: "09-04-2019", day: 'Day 1', events: ['Collab / Flex', 'Gr.8 Assembly 1:50 PM in Auditorium']},
    {date: "10-04-2019", day: 'Day 2'},
    {date: "11-04-2019", day: 'Day 1', events: ['FGH Math Competition']},
    {date: "12-04-2019", day: 'Day 2'},

    {date: "13-04-2019", day: 'Weekend'},
    {date: "14-04-2019", day: 'Weekend'},

    {date: "15-04-2019", day: 'Day 1'},
    {date: "16-04-2019", day: 'Day 2'},
    {date: "17-04-2019", day: 'Day 1', events: ['Rotation #4 —— 4321']},
    {date: "18-04-2019", day: 'Day 2', events: ['Grad Breakfast 8:40 — 10:00 AM in Cafeteria', 'Vedictorian Speeches']},
    {date: "19-04-2019", day: 'Day Off', events: ['Holiday: Good Friday']},

    {date: "20-04-2019", day: 'Weekend'},
    {date: "21-04-2019", day: 'Weekend'},

    {date: "22-04-2019", day: 'Day Off', events: ['Holiday: Easter Friday']},
    {date: "23-04-2019", day: 'Day 1'},
    {date: "24-04-2019", day: 'Day 2'},
    {date: "25-04-2019", day: 'Day 1'},
    {date: "26-04-2019", day: 'Day 2', events: ['Exec Council Speeches at Lunch in Auditorium', 'Grade Rep Application Due']},
    
    {date: "27-04-2019", day: 'Weekend'},
    {date: "28-04-2019", day: 'Weekend'},

    {date: "29-04-2019", day: 'Day Off', events: ['PRO-D DAY']},
    {date: "30-04-2019", day: 'Day 1'},
    {date: "01-05-2019", day: 'Day 2', events: ['Immunization Clinic in Cafeteria']},
    {date: "02-05-2019", day: 'Day 1', events: ['Big One at 2:00 PM', 'Earthquake Drill']},
    {date: "03-05-2019", day: 'Day 2'},

    {date: "04-05-2019", day: 'Weekend'},
    {date: "05-05-2019", day: 'Weekend'},
    
    {date: "06-05-2019", day: 'Day 1', events: ['Spring Play Matinee 1:30 PM in Auditorium', 'IB Exams in GYM']},
    {date: "07-05-2019", day: 'Day 2', events: ['Collab / Flex', 'Spring Play Matinee 7:00 PM in Auditorium']},
    {date: "08-05-2019", day: 'Day 1', events: ['Spring Play Matinee 7:00 PM in Auditorium']},
    {date: "09-05-2019", day: 'Day 2', events: ['Spring Play Matinee 7:00 PM in Auditorium']},
    {date: "10-05-2019", day: 'Day 1', events: ['Gr.8 Outdoor Track Meet in the Morning', 'Spring Play Matinee 7:00 PM in Auditorium']},

    {date: "11-05-2019", day: 'Weekend'},
    {date: "12-05-2019", day: 'Weekend'},

    {date: "13-05-2019", day: 'Day 2'},
    {date: "14-05-2019", day: 'Day 1'},
    {date: "15-05-2019", day: 'Day 2'},
    {date: "16-05-2019", day: 'Day 1', events: ['GAUSS Math Competition']},
    {date: "17-05-2019", day: 'Day Off', events: ['PRO-D DAY']},

    {date: "18-05-2019", day: 'Weekend'},
    {date: "19-05-2019", day: 'Weekend'},

    {date: "20-05-2019", day: 'Day Off', events: ['Holiday: Victoria Day']},
    {date: "21-05-2019", day: 'Day 2'},
    {date: "22-05-2019", day: 'Day 1', events: ['Dance Show 1:30 PM in Auditorium', 'Spring Play Matinee 7:00 PM in Auditorium']},
    {date: "23-05-2019", day: 'Day 2'},
    {date: "24-05-2019", day: 'Day 1', events: ['Last Day IB Exams', 'Altered Schedule', 'Spring Carnival']},

    {date: "25-05-2019", day: 'Weekend'},
    {date: "26-05-2019", day: 'Weekend'},

    {date: "27-05-2019", day: 'Day 2'},
    {date: "28-05-2019", day: 'Day 1'},
    {date: "29-05-2019", day: 'Day 2', events: ['Junior Spring Concert 7:00 PM in Auditorium']},
    {date: "30-05-2019", day: 'Day 1', events: ['Senior Spring Concert 7:00 PM in Auditorium']},
    {date: "31-05-2019", day: 'Day 2', events: ['ELL Year-End Ceremony in Cafeteria']},

    {date: "01-06-2019", day: 'Weekend'},
    {date: "02-06-2019", day: 'Weekend'},

    {date: "03-06-2019", day: 'Day 1'},
    {date: "04-06-2019", day: 'Day 2'},
    {date: "05-06-2019", day: 'Day 1', events: ['Collab / Flex']},
    {date: "06-06-2019", day: 'Day 2', events: ['Early Dismissal 2:00 PM', 'Graduation Ceremony 6:00 PM at Queen Elizabeth Theatre']},
    {date: "07-06-2019", day: 'Day 1'},

    {date: "08-06-2019", day: 'Weekend'},
    {date: "09-06-2019", day: 'Weekend'},
    
    {date: "10-06-2019", day: 'Day 2'},
    {date: "11-06-2019", day: 'Day 1', events: ['Athletic Banguet']},
    {date: "12-06-2019", day: 'Day 2'},
    {date: "13-06-2019", day: 'Day 1', events: ['Grad Dinner / Dance']},
    {date: "14-06-2019", day: 'Day 2'},

    {date: "15-06-2019", day: 'Weekend'},
    {date: "16-06-2019", day: 'Weekend'},

    {date: "17-06-2019", day: 'Day 1'},
    {date: "18-06-2019", day: 'Day 2'},
    {date: "19-06-2019", day: 'Day 1'},
    {date: "20-06-2019", day: 'Day 2', events: ['Term 3 Ends']},
    {date: "21-06-2019", day: 'Day 1', events: ['Gr.10 Numeracy Assessment']},

    {date: "22-06-2019", day: 'Weekend'},
    {date: "23-06-2019", day: 'Weekend'},

    {date: "24-06-2019", day: 3, events: ['English 12 Provincials Exam 9:00 — 12:00 PM']},
    {date: "25-06-2019", day: 3, events: ['FRAL 12 Provincials Exam 1:00 — 4:00 PM']},
    {date: "26-06-2019", day: 3, events: ['Com 12 Provincials Exam 9:00 — 12:00 PM']},
    {date: "27-06-2019", day: 3, events: ['Term 3 Report Card Available Online']}
]}

export default blockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

