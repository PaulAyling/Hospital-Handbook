import React, { Component } from 'react';
const DairyData = {
  data: [
    {
      id: '1',
      bookSection: 'Diary',
      pageHeader: 'Daily Diary',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diary Section </h1>

          <p className='chapter-sub-text'>
            Everything you need to log your stay in hospital
          </p>
          <h2 className='text-subheading'>Timeline Summary</h2>
          <p className='text-subheading'>
            Intended for you to summarise the main events during your illness to
            make it easier to communicate with staff about what has happened.
          </p>
          <h2 className='text-subheading'>The Daily Diary</h2>
          <p className='text-subheading'>
            This is a one page per day diary, there is enough pages for 30 days.
            It can be useful to gain perspective on your experience or help if
            there are difficulties in treatment or diagnosis. For each day there
            is also a space for the Doctors meeting notes for questions and
            answers for the doctor.
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
          {' '}
          <p class='pageHeading'>Timeline Summary </p>
          <p>Summarise the main events during your illness here.</p>
          <section class='table-flex-row'>
            <div class=' table-column-1'>
              <div class='table-header-row table-header-row-left  dark-gray'>
                <h2>DATE</h2>
              </div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
 

            </div>
            <div class='table-column-2'>
              <div class='table-header-row table-header-row-right  dark-gray'>
                <h2>ITEM</h2>
              </div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
              <div class='table-row'></div>
              <div class='table-row-section'></div>
  

            </div>
          </section>
        </section>
      )
    },

    {
      id: '3',
      bookSection: 'Diary',
      pageHeader: 'Daily Diary Notes',
      htmlContent: (
        <section id='content' class='contents-table'>
          {' '}
          <p className='pageHeading'>Diary Log</p>
          <p className=''>
            A space for your thoughts for the day
          </p>
          <section class='table-flex-col'>
            <div className='table-flex-row'>
              <div class=' table-column-1'>
                <div class='table-header-row table-header-row-left dark-gray border-bottom-gray'>
                  <h2>DATE</h2>
                </div>
              </div>
              <div class='table-column-2'>
                <div class='table-header-row table-header-row-right border-gray'></div>
              </div>
            </div>

            <div class='table-row'><p className='table-text'>Questions:</p></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row-section'></div>
            <div class='table-row'><p className='table-text'>Thoughts of the day: </p></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row-section'></div>

          </section>
        </section>
      )
    },
    {
      id: '4',
      bookSection: 'Diary',
      pageHeader: 'Doctor Meeting Notes',
      htmlContent: (
        <section id='content' class='contents-table'>
          {' '}
          <section class='table-flex-col'>
            <div className='table-flex-row'>

              <div class='table-column-2'>
                <div class='table-header-single'><p className='table-text'>About the Day:</p></div>
              </div>
            </div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row'></div>
            <div class='table-row-section'></div>

          </section>
        </section>
      )
    }
  ]
};

export default DairyData;
