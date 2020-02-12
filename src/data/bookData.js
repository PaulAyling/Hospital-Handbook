import React, { Component } from 'react';
const BookData = {
  data: [
    {
      id: '1',
      bookSection: 'Cover',
      pageHeader: 'front',
      htmlContent:
        'http://paulayling.me/wp-content/uploads/2019/02/HospitalHandbook-cover.png',
      definePrototypes: '',
      exportComponent: 'export default App;'
    },
    {
      id: '2',
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
    },
    {
      id: '4',
      bookSection: 'Symptoms',
      pageHeader: 'Symptoms - FRONT',
      htmlContent: (
        <section id='content'>
          <div class='container-img'>
            <img
              class='img-body'
              src='http://paulayling.me/wp-content/uploads/2019/02/Screen-Shot-2020-01-18-at-10.20.43-am.png'
              alt='Body'
            />
          </div>
        </section>
      ),
      definePrototypes: '',
      exportComponent: 'export default App;'
    },
    {
      id: '5',
      bookSection: 'Symptom',
      pageHeader: 'FRONT',
      htmlContent: (
        <section id='content'>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>A.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>B.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>C.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>D.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )
    },
    {
      id: '6',
      bookSection: 'Symptom',
      pageHeader: 'Symptoms - BACK',
      htmlContent: (
        <section id='content'>
          <div class='container-img'>
            <img
              class='img-body'
              src='http://paulayling.me/wp-content/uploads/2019/02/Screen-Shot-2020-01-18-at-10.20.43-am.png'
              alt='Body'
            />
          </div>
        </section>
      ),
      definePrototypes: '',
      exportComponent: 'export default App;'
    },
    {
      id: '7',
      bookSection: 'Symptom',
      pageHeader: 'Symptoms',
      htmlContent: (
        <section id='content'>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>E.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>F.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>G.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>H.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p>Symptom:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p>Details:</p>
                  </div>
                </row>
                <row>
                  <div></div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )
    },
    {
      id: '8',
      bookSection: 'Diary',
      pageHeader: 'DIARY BY DAY',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='container-diary-content'>
            <header class='diary-header-container'>
              <div class='diary-header-label'>
                <h1>DATE</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '9',
      bookSection: 'Diary',
      pageHeader: 'Doctor Notes',
      htmlContent: (
        <section id='content'>
          <div class='container-meeting'>
            <header class='meeting-header-container'>
              <div class='meeting-header-label'>
                <h1>Doctor Questions</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
          <div class='container-meeting'>
            <header class='meeting-header-container'>
              <div class='meeting-header-label'>
                <h1>Doctors Answers</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '10',
      bookSection: 'Logs',
      pageHeader: '',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='container-diary-content'>
            <header class='diary-header-container'>
              <div class='unusual-header-label'>
                <h2>Unusual activities, places etc</h2>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '11',
      bookSection: 'Logs',
      pageHeader: 'Drug Log',
      htmlContent: (
        <section id='content'>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>A.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>B.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>C.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>D.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
         
        </section>
      )
    },
    {
      id: '12',
      bookSection: 'Logs',
      pageHeader: 'Drug Log',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='container-diary-content'>
            <header class='diary-header-container'>
              <div class='diary-header-label'>
                <h1>DATE</h1>
              </div>
            </header>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '13',
      bookSection: 'Logs',
      pageHeader: '',
      htmlContent: (
        <section id='content'>
          <article class='symptom-container'>
            <div class='circle'>
              <h2>E.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>  <article class='symptom-container'>
            <div class='circle'>
              <h2>F.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>  <article class='symptom-container'>
            <div class='circle'>
              <h2>G.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>  <article class='symptom-container'>
            <div class='circle'>
              <h2>H.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className="drug-log-headers">Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className="drug-log-headers">Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )
    },
    {
      id: '14',
      bookSection: 'Logs',
      pageHeader: 'EVENT TIMELINE',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column timeline-column-1'>
              <div class='timeline-header-row timeline-header-row-left'>
                <h2>DATE</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div> <div class='timeline-row'></div>{' '}
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
            </div>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>ITEM</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '15',
      bookSection: 'Timeline',
      pageHeader: 'vdsvcxzvcxzvcxz',
      htmlContent: (
        <section id='content'>
          <div class='timeline-table'>
            <div class='timeline-column  timeline-column-2'>
              <div class='timeline-header-row'>
                <h2>EXTRA DETAILS</h2>
              </div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
              <div class='timeline-row'></div>
            </div>
          </div>
        </section>
      )
    },
    {
      id: '16',
      bookSection: 'Symptom',
      pageHeader: 'Diagnosis',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diagnosis</h1>
          <p class='section-intro-text'>
            Use this section to summarize your symptoms and proffesional
            diagnosis
          </p>
          <ul>
            <li>Your Symptoms</li>
            <li>Diagnosis</li>
          </ul>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '17',
      bookSection: 'Diary',
      pageHeader: 'Diary',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diary</h1>
          <p class='section-intro-text'>
            Use this section to record your recovery, day by day
          </p>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '18',
      bookSection: 'Intro',
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
      id: '19',
      bookSection: 'Timeline',
      pageHeader: 'Timeline',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Timeline</h1>
          <p class='section-intro-text'>
            An overview of they key events in order
          </p>
          <p>Use this to present an overview of what has happened so far</p>
          <p>Please leave gaps between each entry so you can add more if you need to later</p>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '20',
      bookSection: 'Logs',
      pageHeader: 'Logs',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Logs</h1>
          <p class='section-intro-text'>Additional logs that may be useful</p>
          <ul>
            <li>Drug Log</li>
            <li>Any Unusual activities?</li>
            <li>anything else</li>
          </ul>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '21',
      bookSection: 'Appendix',
      pageHeader: 'Appendix',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Appendix</h1>
          <p class='section-intro-text'>Reference Materials</p>
          <ul>
            <li>stuff here</li>
            <li>Any Unusual activities?</li>
            <li>Contact the Authour - freebies</li>
          </ul>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    }
  ]
};

export default BookData;
