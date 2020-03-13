import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

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
            <h2 className='contents-heading'>Contents</h2>
            <section class=''>
              <ul>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h3 className='contents-item'>Section 1</h3>
                    </div>
                    <div>
                      <h3 className='contents-page-number'></h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div>
                      <h4 className='contents-item'>
                        It Started in an Ambulance
                      </h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div>
                      <h4 className='contents-item'>About this book</h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Purpose of this book</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Whats in the book</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>How to use this book</h5>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div>
                      <h4 className='contents-item'>
                        Advice for your Hospital Stay
                      </h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Things to bring</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Managing People</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Hospital Release</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
              </ul>

              <ul>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h3 className='contents-item'>Section 2</h3>
                    </div>
                    <div>
                      <h3 className='contents-page-number'></h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div>
                      <h4 className='contents-item'>Your Information</h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div>
                      <h4 className='contents-item'>Logs</h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Timeline Summary</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Daily Diary</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Diagnosis</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Drug Log</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row'>
                    <div>
                      <h5 className='contents-item'>Event Log</h5>
                    </div>
                    <div>
                      <h5 className='contents-page-number'>1</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div class='container-flex-row bdr-bottom-gray'>
                    <div className=''>
                      <h4 className='contents-item'>Thanks</h4>
                    </div>
                    <div>
                      <h4 className='contents-page-number'>1</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </page>
    </Fragment>
  );
}
