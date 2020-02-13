import React, { Component } from 'react';
const DairyData = {
  data: [
    {
      id: '17',
      bookSection: 'Diary',
      pageHeader: 'Diary',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diary</h1>
          <p class='section-intro-text'>
            Use this section to record your recovery, day by day
          </p>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '8',
      bookSection: 'Diary',
      pageHeader: 'DIARY BY DAY',
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
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '9',
      bookSection: 'Diary',
      pageHeader: 'Doctor Notes',
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
