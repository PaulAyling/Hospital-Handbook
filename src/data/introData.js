import React from 'react';
const IntroData = {
  data: [
    {
      id: '1',
      bookSection: 'Intro',
      pageType: 'SectionIntroduction',
      pageHeader: 'Introduction',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Introduction</h1>
          <p class='section-intro-text'>Being sick can be a lot to manage!</p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Intro',
      pageHeader: 'Background',
      htmlContent: (
        <article id='Introduction'>
        <h1 class=''>It started in an Ambulance... </h1>
     
          <p>
            Recently I found myself in an ambulance travelling across Thailand
            with a suspected heart attack. This was just the beginning of a
            journey which took me to three hospitals in three countries. At the
            same time my uncle was about to be released from hospital with a
            dangerous condition that only through his management of the
            situation was prevented.
          </p>

          <p>
            I was prepared to feel sick and scared about my illness, but was not
            prepared for a host of other difficulties I would experience while
            in hospital. After speaking with my uncle and others, I could see
            that the problems I experienced were shared by many.{' '}
          </p>

          <p>
            The last thing I wanted to do was think through problems and create
            solutions while I was in hospital, but eventually I started to
            figure things out and get organised. As I progressed in setting up
            systems and managing things, management of my stay became much
            easier.
          </p>

        </article>
      )
    },
    {
      id: '3',
      bookSection: 'Intro',
      pageHeader: 'About the Book',
      htmlContent: (
        <article id='Introduction'>
         <p>
            Now I have done the work, at least I know that next time my stay
            will much easier to manage. I hope others can benefit from my work
            as well. This is the reason I wrote this book.
          </p>
          <h1>The Purpose of this book</h1>
          <p>
            The purpose of this book is to reduce the amount of things you need
            to remember or manage when you are in hospital. That way you can
            focus on rest whilst feeling your recovery is moving in the right
            direction.
          </p>
          <h1>What is this book?</h1>
          <p>
            The book design is based on my experience and feedback from patients
            and healthcare professionals. It is designed to be;
          </p>
          <p>
            <strong>Simple: </strong> It should take 10 mins or less of simple
            reading before you can get started.
          </p>
          <p>
            <strong>An Organiser: </strong>All you need is a pen to start
            managing things more effectively.
          </p>
          <h1>What is it not?</h1>
          <ul>
            <li className='text'>A reference book or information source</li>
            <li className='text'>
              A guide to health care or a medical document.
            </li>
          </ul>
        </article>
      )
    },
    {
      id: '4',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          <h1 class='section-header'>How to use this book</h1>
          <p>
            The book is split into sections. The sections contain worksheets
            and guides you to walk you through what you have to do to make organising your
            time in hospital as easy as possible.
          </p>

          <p>
            The sections are below;
          </p>
          <ul>
            <li>Start</li>
            <li>Diary</li>
            <li>Diagnosis</li>
            <li>Release</li>
            <li>Extras</li>
          </ul>
          
          <p>
            The sections are marked on the right tabs to make it easy to find. 
          </p>
         
        </article>
      )
    },
    {
      id: '5',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
        <h1>Start Section</h1>
          <p>
            This contains;
          </p>
          <ul>
            <li>Some handy items to make your stay easier.</li>
            <li>
              Some information to write down to prevent repeating yourself.
            </li>
            <li>
              Some tips on how to update friends and family and manage
              doctors meetings.
            </li>
          </ul>
          <h1>Diary Section</h1>
          <p>
            This contains everything you need to document your stay in hospital,
            it contains the following sections;
          </p>
          <h2 className='text-subheading'>Timeline Summary</h2>
          <p className='text-subheading'>
            Intended for you to summarise the main events during your illness to make it
            easier to communicate with staff about what has happened.
          </p>
          <h2 className='text-subheading'>The Daily Diary</h2>
          <p className='text-subheading'>
            This is a one page per day diary, there is enough pages for
            30 days. It can be useful to gain perspective on your experience or
            help if there are difficulties in treatment or diagnosis.
          </p>
          <h2 className='text-subheading'>Doctor Meeting Notes </h2>
          <p className='text-subheading'>
            Each day i the daily diary has a section for questions and answers for the doctor
            meetings so you don’t forget them.
          </p>
         
          
        </article>
      )
    },
    {
      id: '6',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          <h1>Diagnosis Section</h1>
          <p>
            This section is most useful if your condition is not clear or
            your symptoms change. If that is the case then you can build a
            comprehensive record here which may make diagnosis easier.
          </p>
          <h1>Release Section</h1>
          <p>This includes advice on how to best manage your release from hospital</p>
          <h1>Extras Section</h1>
          <p>
            Additional worksheets and resources that you might also find useful{' '}
          </p>
          <ul>
            <li>Drug Log</li>
            <li>Events Prior to Illness log</li>
            <li>Internet resources</li>
          </ul>
        </article>
      )
    },
    {
      id: '6',
      bookSection: 'Intro',
      pageHeader: '',
      htmlContent: (
        <article id='Introduction'>
          
         
        </article>
      )
    }
   
  ]
};

export default IntroData;
