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
            Congratulations it looks like you are past the critical part of your condition and a doctor has made the decision to have you leave hospital. When this happens it is common for people to leave and then wish they had asked other questions at the time. In this section I expolain what the release process often looks like and  what are some of the best things to do and watch for when you are being released.
          </p>
<h1>The release process</h1>
<p>It normally goes something like this</p>
<ul>
  <li>You have a meeting with a senior doctor or specialist and that person tells you about the condition and what they found and why you are free to go. </li>
  <li>Paperwork is then filled in</li>
  <li>You pick up paper work</li>
  <li>You make your way home</li>
</ul>


          <p>
            A good way of providing updates is a group text, email or whatsapp
            message sent out daily. You should also let at least one person know
            how they can contact the hospital ward directly to get updates if
            you are unavailable.
          </p>

          <p>
            A better way, if you can, is to have someone else handle the
            communication and send out daily updates on your behalf.{' '}
          </p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Release',
      pageHeader: 'Reelase: jjj',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content' class='contents-table'>
          <p>
            During your stay there are two key tasks you will have to manage.
          </p>

          <h1>Updates with relatives and family</h1>
          <p>
            Depending on your location and who needs updating providing updates
            on your condition can be hard work. If you are unclear or incorrect
            it can lead to a lot of extra time and stress clarifying things. For
            everyones well being it is important that this is done quickly and
            effectively.
          </p>

          <p>
            A good way of providing updates is a group text, email or whatsapp
            message sent out daily. You should also let at least one person know
            how they can contact the hospital ward directly to get updates if
            you are unavailable.
          </p>

          <p>
            A better way, if you can, is to have someone else handle the
            communication and send out daily updates on your behalf.{' '}
          </p>
        </section>
      )
    }
  ]
};

export default TimelineData;
