import React from 'react';
const IntroData = {
  data: [
    {
      id: '1',
      bookSection: 'Intro',
      pageHeader: 'Contents',
      htmlContent: (
        <div class='content-row'>
          <div class='content-row-left'>
            <h1>1</h1>
          </div>
          <div class='content-row-middle'>
            <p>
              ................................................................................................
            </p>
          </div>
        </div>
      )
    },
    {
      id: '2',
      bookSection: 'Intro',
      pageType: 'SectionIntroduction',
      pageHeader: 'Introduction',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Introduction</h1>
          <p class='section-intro-text'>
            Helping you be sensible when its difficult
          </p>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '3',
      bookSection: 'Intro',
      pageHeader: 'Introduction',
      htmlContent: (
        <article id='Introduction'>
          <h1>Why this book?</h1>
          <p>My story here</p>

          <h1>How to use this book</h1>
          <p>
            This book is intended to make the task of managing you stay in
            hospital easier. I have taken the key parts to my stay and set this
            book out to allow you to capture everything you need to so you can
            have sensible conversations with medical practitioners.
          </p>
        </article>
      )
    }
  ]
};

export default IntroData;
