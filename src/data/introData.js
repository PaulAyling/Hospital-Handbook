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
          Recently I found myself in an ambulance travelling across the country in Thailand with a suspected heart attack. This was just the beginning of a journey which took me to three hospitals in three countries. At the same time my uncle was about to be released from hospital with a dangerous condition that only through his management of the situation was prevented.</p>

          <p>I was expecting to feel sick and sometimes scared but was not prepared for the admininstration I would need to do to ensure that my stay was effective. After speaking with my uncle and others I could see that the problems I experienced were shared by many. I thought if I could help solve some of these I could help a lot of people </p>

          <p>My time in hospital was difficult but eventually I started to figure things out and get organized as I progressed setting things up and getting organized and managing things started to become much easier. I realized if there was a way of helping people
         To make it easier it has to be really easy to use so the aim of this book is to be extreemly straightforeward to use to make it easy for you to do the right thing. </p>

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
<p>It is an organizer designed to allow you to better manage your time in hospital. The design is based on my experience and with feedback from patients and healthcare professionals. If you follow it through you it will lighten the mental load during this time and be more confident that you are doing what you can to help and understand the the medical professionals whilst making your stay as pleasant as you can.</p>
<h1>What is it not?</h1>
<p>Although there is some information in the book it is primarily not an information source, it is not a guide to private health care or a medical document.</p>
        </article>
      )
    }
  ]
};

export default IntroData;
