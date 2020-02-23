import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const day1SectionStart = props.day1SectionStart;
  const diarySectionStart = props.diarySectionStart;
  const timelineSectionStart = props.timelineSectionStart;
  const diagnosisSectionStart = props.diagnosisSectionStart;
  const extraSectionStart = props.extraSectionStart;

  return (
    <Fragment>
      <PageLeftDivider 
      />
      <page class='page'>
        <div class='page-container-left'>
          <div class='main-content'>
            <h1>Contents</h1>
            <section id='content' className='container-contents'>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Introduction</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>1</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Quick things to do on Day 1</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{day1SectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Your Diary</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diarySectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Overview of Timelines</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{timelineSectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Diagnosis</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diagnosisSectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Hospital Release</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diagnosisSectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <h1>Extras</h1>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{extraSectionStart}</p>
                </div>
              </article>
             
            </section>
          </div>
        </div>
      </page>
    </Fragment>
  );
}
