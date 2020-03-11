import React, { Component } from 'react';
const TimelineData = {
  data: [
    {
      id: '1',
      bookSection: 'Release',
      pageHeader: 'Timeline',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Hospital Release</h1>
          <p class='section-intro-text'>
            What should you do when your cleared to leave hospital
          </p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Release',
      pageHeader: 'You are free to go!',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content' class='contents-table'>
          <h1>Managing your release from hospital</h1>
          <p>
            The doctor has made the decision to have you leave hospital. In this
            section I explain what the release process often looks like and what
            are some of the best things to do and watch for when you are being
            released.
          </p>
          <h1>The release process</h1>
          <p>It normally goes something like this</p>
          <ul>
            <li>
              You have a meeting with a senior doctor or specialist (release
              meeting) to cover off questions and explain the reason for
              release.
            </li>
            <li>Paperwork is then filled in</li>
            <li>You pick up paper work</li>
            <li>You make your way home</li>
          </ul>

          <p> </p>
        </section>
      )
    },
    {
      id: '3',
      bookSection: 'Release',
      pageHeader: 'Release: The Release Meeting',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content' class='contents-table'>
          <h1>About after your stay in Hospital</h1>

          <p>
            Depending on your current symptoms and network how you are going to
            manage after hospital can be daunting. If you are concerned this
            should also be discussed in the release meeting.
          </p>

          <p>
            Usually on the day of your release you will have a meeting with a
            doctor. To help you with this is enclosed is a checklist, it may
            also be useful to have another person present in this meeting. Use a
            diary page to write down important questions before the meeting. You
            may or may not be told that this is going to happen so you will need
            to be prepared for it.
          </p>
        </section>
      )
    },
    {
      id: '4',
      bookSection: 'Release',
      pageHeader: 'Release: The Release Meeting',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content' class='contents-table'>
          <h1>Checklists</h1>
          <h1>Prior to Release Meeting</h1>
          <ul>
            <li>
              If you have chosen to have another person attend ensure you both
              know when its is schedules to occur
            </li>
            <li>
              After reading these pages write down all your questions so you are
              prepared for the meeting
            </li>
          </ul>
        </section>
      )
    },
    {
      id: '5',
      bookSection: 'Release',
      pageHeader: 'Release: The Release Meeting',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content' class='contents-table'>
          <h1>The Release Meeting Questions</h1>
          <p><b>Some example questions below</b></p>
          <p>
            
              If you can it is best to ensure your questions are written down
              and then you attempt to write down the answers as you talk to the
              doctor to ensure you don't forget.
            
          </p>
          <ul>
            <li>The causes of symptoms are fully explained</li>
            <li>
              Will I make a full recovery and what will the timeline look like?
            </li>
            <li>What symptoms should I see improving first?</li>
            <li>
              Are there any particular symptoms should I look for and what
              should I do if I see them?
            </li>
            <li>What level of rest is required?</li>
            <li>Is there anything else I can do to improve recovery?</li>
          </ul>
          <ul>
            <li>
              Is there anything further you need to organize with your doctor -
              such as follow up?
            </li>
            <li>What (if any) drugs you need to take and when</li>
            <li>What (if any) any special precuations you need to take</li>

  
          </ul>
        </section>
      )
    }
  ]
};

export default TimelineData;
