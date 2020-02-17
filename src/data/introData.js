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
          <p class='section-intro-text'>
            Being sick can be alot to manage!
          </p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Intro',
      pageHeader: 'Background',
      htmlContent: (
        <article id='Introduction'>
        <h1>It started in an Ambulance in Thailand... </h1>
          <p>
          Recently I found myself in an ambulance travelling across  Thailand with a suspected heart attack. This was just the beginning of a journey which took me to three hospitals in three countries. At the same time my uncle was about to be released from hospital with a dangerous condition that only through his management of the situation was prevented.</p>

          <p>I was prepared to feel sick and scared about my illness but was not prepared for a host of other difficulties I would experience while in hospital. After speaking with my uncle and others I could see that the problems I experienced were shared by many. </p>

<p>The last thing I wanted to do was think through problems and create solutions while I was in hospital but eventually I started to figure things out and get organised, as I progressed in setting up systems and managing things management of my stay became much easier.</p>

<p>Now I have done the work at least I know that next time my stay  will much easier to manage. I hope others can benefit from my work as well. This is the reason I wrote this book.</p>

        </article>
      )
    },
    {
      id: '3',
      bookSection: 'Intro',
      pageHeader: 'About the Book',
      htmlContent: (
        <article id='Introduction'>
               <h1>The Purpose of this book</h1>
          <p>The purpose of this book is to reduce the amount of things you need to remember or manage when you are in hospital so you can focus on rest whilst feeling your recovery is moving in the right direction.</p>
<h1>What is this book?</h1>
<p>The book design is based on my experience and with feedback from patients and healthcare professionals. It is designed to be;</p>
<p><strong>Simple: </strong> It should take 10 mins or less of simple reading before you can get started. 
</p>
<p><strong>An Organizer: </strong>All you need is a pen to start managing things more effectivily.</p>
<h1>What is it not?</h1>
<ul><li className="text">A reference book or information source</li>
<li className="text">A guide to health care or a medical document.</li>
</ul>
        </article>
      )
    }
  ]
};

export default IntroData;
