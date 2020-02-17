import React, { Component } from 'react';
const DairyData = {
  data: [
    {
      id: '1',
      bookSection: 'Daily Diary',
      pageHeader: 'Daily Diary',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Daily Diary</h1>
          <p class='section-intro-text'>
            This section can accomodate 30 days of diary notes and doctors meetings
          </p>
          <h1>About the Daily Diary</h1>
          <p>Write todays date in the top right and make notes on anything you feel is relavant. It could be useful later for you to gain perspective on your experience and help should there be difficulties in treatment or diagnosis.</p>
          <h1>About doctor meetings in hospital</h1>
          <p>
            In hospital it is common for doctors to see you just once in the day
            as part of their “round”.{' '}
          </p>
          <p>
            For this reason if you have concerns you want answered it can be
            very helpful to know what you are going to say before you see the doctor 
            and have somewhere to write down the answers so you don’t forget
            them.
          </p>

        </section>
      )
    },
    {
      id: '2',
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
      id: '3',
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
