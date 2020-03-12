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
      <page class='page'>
        <div class=' text-area'>
          <div class='main-content'>
            <p className="contents-heading">Contents</p>
            <section id='content' className='container-contents'>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                  <p className="subHeading2">Introduction</p>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>1</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                <p className="subHeading2">Things to do now</p>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{day1SectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                <p className="subHeading2">Diary Log</p>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diarySectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                <p className="subHeading2">Diagnosis Log</p>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diagnosisSectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                <p className="subHeading2">Hospital Release Checklist</p>
                </div>
                <div className='contents-item'>
                  <p className='textalign-right'>{diagnosisSectionStart}</p>
                </div>
              </article>
              <article className='row-2 contents-row'>
                <div className='contents-item'>
                <p className="subHeading2">Extras</p>
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
