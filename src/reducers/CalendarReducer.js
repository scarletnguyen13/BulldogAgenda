const INITIAL_STATE = {
  calendar: [
    {date: "01-01-2019", day: 'Break'},
    {date: "02-01-2019", day: 'Break'},
    {date: "03-01-2019", day: 'Break'},
    {date: "04-01-2019", day: 'Break'},
    
    {date: "05-01-2019", day: 'Weekend'},
    {date: "06-01-2019", day: 'Weekend'},

    {date: "07-01-2019", day: 'Day 1', events: ['School Re-Opens']},
    {date: "08-01-2019", day: 'Day 2', events: ['Collab / Flex', 'Gr.11 CLE 1:50 PM in Auditorium', 'Gr.9 Career 1:50 PM in Cafeteria']},
    {date: "09-01-2019", day: 'Day 1', events: ['Bulldog Classic']},
    {date: "10-01-2019", day: 'Day 2', events: ['Bulldog Classic', 'P/T Comf - Reg Opens']},
    {date: "11-01-2019", day: 'Day 1', events: ['Bulldog Classic']},
    
    {date: "12-01-2019", day: 'Weekend'},
    {date: "13-01-2019", day: 'Weekend'},

    {date: "14-01-2019", day: 'Day 2'},
    {date: "15-01-2019", day: 'Day 1'},
    {date: "16-01-2019", day: 'Day 2'},
    {date: "17-01-2019", day: 'Day 1', events: ['Early Dismissal 1:30 PM', 'Parent — Teacher Conference']},
    {date: "18-01-2019", day: 'Day 2', events: ['Collab']},

    {date: "19-01-2019", day: 'Weekend'},
    {date: "20-01-2019", day: 'Weekend'},

    {date: "21-01-2019", day: 'Day 1', events: ['Flex Day', 'Assemblies & Tutorials', 'Gr.11 Numeracy Assessment']},
    {date: "22-01-2019", day: 'Day 2', events: ['Evaluation Week', '2 - 34']},
    {date: "23-01-2019", day: 'Day 1', events: ['Evaluation Week', '1 - 34']},
    {date: "24-01-2019", day: 'Day 2', events: ['Evaluation Week', '2 - 12']},
    {date: "25-01-2019", day: 'Day 1', events: ['Evaluation Week', '1 - 12']},

    {date: "26-01-2019", day: 'Weekend'},
    {date: "27-01-2019", day: 'Weekend'},
    
    {date: "28-01-2019", day: 'Day Off', events: ['PRO-D DAY']},
    {date: "29-01-2019", day: 'Day 1', events: ['Rotation #3 —— 2143']},
    {date: "30-01-2019", day: 'Day 2'},
    {date: "31-01-2019", day: 'Day 1'},
    {date: "01-02-2019", day: 'Day 2'},
    
    {date: "02-02-2019", day: 'Weekend'},
    {date: "03-02-2019", day: 'Weekend'},

    {date: "04-02-2019", day: 'Day 1'},
    {date: "05-02-2019", day: 'Day 2', events: ['One Act Plays 7:00 PM in Auditorium']},
    {date: "06-02-2019", day: 'Day 1', events: ['Collab / Flex', '1:50 PM - Gr.8 in Cafeteria, Gr.10 in Auditorium', 'One Act Plays 7:00 PM in Auditorium']},
    {date: "07-02-2019", day: 'Day 2', events: ['American Math Competition 10A', 'One Act Plays 7:00 PM in Auditorium']},
    {date: "08-02-2019", day: 'Day 1', events: ['One Act Plays 7:00 PM in Auditorium']},

    {date: "09-02-2019", day: 'Weekend'},
    {date: "10-02-2019", day: 'Weekend'},

    {date: "11-02-2019", day: 'Day 2'},
    {date: "12-02-2019", day: 'Day 1'},
    {date: "13-02-2019", day: 'Day 2', events: ['American Math Competition 12B']},
    {date: "14-02-2019", day: 'Day 1'},
    {date: "15-02-2019", day: 'Day Off', events: ['PRO-D DAY']},

    {date: "16-02-2019", day: 'Weekend'},
    {date: "17-02-2019", day: 'Weekend'},

    {date: "18-02-2019", day: 'Day Off', events: ['Holiday: Family Day']},
    {date: "19-02-2019", day: 'Day 2', events: ['Cdn. National Math Competition 8']},
    {date: "20-02-2019", day: 'Day 1', events: ['Canadian Computing Competition 8:15 AM in Rm. 109']},
    {date: "21-02-2019", day: 'Day 2'},
    {date: "22-02-2019", day: 'Day 1'},

    {date: "23-02-2019", day: 'Weekend'},
    {date: "24-02-2019", day: 'Weekend'},

    {date: "25-02-2019", day: 'Day 2'},
    {date: "26-02-2019", day: 'Day 1'},
    {date: "27-02-2019", day: 'Day 2', events: ['PCF Math Competition']},
    {date: "28-02-2019", day: 'Day 1', events: ['Jazz Caberet 7:00 PM in Cafeteria']},
    {date: "01-03-2019", day: 'Day 2'},
    
    {date: "02-03-2019", day: 'Weekend'},
    {date: "03-03-2019", day: 'Weekend'},

    {date: "04-03-2019", day: 'Day 1'},
    {date: "05-03-2019", day: 'Day 2', events: ['Collab / Flex', 'Term 2 Ends']},
    {date: "06-03-2019", day: 'Day 1'},
    {date: "07-03-2019", day: 'Day 2'},
    {date: "08-03-2019", day: 'Day 1'},

    {date: "09-03-2019", day: 'Weekend'},
    {date: "10-03-2019", day: 'Weekend'},

    {date: "11-03-2019", day: 'Day 2'},
    {date: "12-03-2019", day: 'Day 1', events: ['District International Choral Festival 6:00 - 8:30 PM in Auditorium']},
    {date: "13-03-2019", day: 'Day 2'},
    {date: "14-03-2019", day: 'Day 1', events: ['Term 2 Report Cards Available Online', 'Gr.12 Assembly Last Half Block 1-3']},
    {date: "15-03-2019", day: 'Day 2', events: ['Last Day before Break']},

    {date: "16-03-2019", day: 'Weekend'},
    {date: "17-03-2019", day: 'Weekend'},

    {date: "18-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "19-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "20-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "21-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "22-03-2019", day: 'Break', events: ['Spring Break']},

    {date: "23-03-2019", day: 'Weekend'},
    {date: "24-03-2019", day: 'Weekend'},
    
    {date: "25-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "26-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "27-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "28-03-2019", day: 'Break', events: ['Spring Break']},
    {date: "29-03-2019", day: 'Break', events: ['Spring Break']},

    {date: "30-03-2019", day: 'Weekend'},
    {date: "31-03-2019", day: 'Weekend'},

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

    {date: "24-06-2019", day: 'Exam', events: ['English 12 Provincials Exam 9:00 — 12:00 PM']},
    {date: "25-06-2019", day: 'Exam', events: ['FRAL 12 Provincials Exam 1:00 — 4:00 PM']},
    {date: "26-06-2019", day: 'Exam', events: ['Com 12 Provincials Exam 9:00 — 12:00 PM']},
    {date: "27-06-2019", day: 'Exam', events: ['Term 3 Report Card Available Online']}
]}

export default blockReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

