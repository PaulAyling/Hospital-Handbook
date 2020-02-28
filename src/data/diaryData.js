import React, { Component } from 'react';
const DairyData = {
  data: [
    {
      id: '1',
      bookSection: 'Diary',
      pageHeader: 'Daily Diary',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diary </h1>
          <h1>About Timeline Summary</h1>
          <p>
          This is intended for you to summarise the main events to make it easier to communicate with staff about what has happened.
          </p>
          <h1>About the Daily Diary</h1>
          <p>This section is a one page per day diary, there is enough pages for 30 days. It can be useful to gain perspective on your experience or help if there are difficulties in treatment or diagnosis.</p>
          <h1>About doctor meetings in hospital</h1>
          <p>
          Doctors in Hospital are very busy so if you have  items you want to raise it can be helpful to prepare beforehand. You can use the "Doctor Meeting Notes" section to write down the questions and answers so you don’t forget them.
          </p>
          

        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Logs',
      pageHeader: 'EVENT TIMELINE',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column timeline-column-1'>
              <div class='timeline-header-row timeline-header-row-left'>
                <h2>DATE</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
 
            </div>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>ITEM</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '3',
      bookSection: 'Diary',
      pageHeader: 'vdsvcxzvcxzvcxz',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>EXTRA DETAILS</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
      
            </div>
          </div>
        </section>
      )
    },
    {
      id: '4',
      bookSection: 'Logs',
      pageHeader: 'EVENT TIMELINE',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column timeline-column-1'>
              <div class='timeline-header-row timeline-header-row-left'>
                <h2>DATE</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
 
            </div>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>ITEM</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '5',
      bookSection: 'Timeline',
      pageHeader: 'vdsvcxzvcxzvcxz',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>EXTRA DETAILS</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
      
            </div>
          </div>
        </section>
      )
    },



    {
      id: '6',
      bookSection: 'Diary',
      pageHeader: 'Daily Diary Notes',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='container-diary-content'>
            <header class='diary-header-container'>
              <div class='diary-header-label'>
                <h1>DATE</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '7',
      bookSection: 'Diary',
      pageHeader: 'Doctor Meeting Notes',
      htmlContent: (
        <section id='content'>
          <div class='container-meeting'>
            <header class='meeting-header-container'>
              <div class='meeting-header-label'>
                <h1>Doctor Questions</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
          <div class='container-meeting'>
            <header class='meeting-header-container'>
              <div class='meeting-header-label'>
                <h1>Doctors Answers</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    }
  ]
};

export default DairyData;
