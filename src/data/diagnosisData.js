import React from 'react';
const DiagnosisData = {
  data: [
    {
      id: '1',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis',
      pageName: 'sectionDivider',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Diagnosis</h1>
          <p class='section-intro-text'>
            Use this section to summarize information to make it easier for
            healthcare proffessionals to provide an accurate diagnosis.
          </p>
          <ul>
            <li>Your Symptoms</li>
            <li>Event Log</li>
            <li>Drug Log</li>
            <li>Diagnosis</li>
          </ul>
          <p>IMAGE HERE OF BOOK FILLED IN</p>
        </section>
      )
    },
    {
      id: '2',
      bookSection: 'Symptoms',
      pageHeader: 'Diagnosis: Symptoms - FRONT',
      pageName: 'leftPersonDiagram',
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
      id: '3',
      bookSection: 'Diagnosis',
      pageHeader: 'FRONT',
      pageName: 'rightSymptomsFront',
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
      id: '4',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnossis: Symptoms - BACK',
      pageName: 'leftDiagramBack',
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
      bookSection: 'Diagnosis',
      pageHeader: 'Symptoms',
      pageName: 'rightSymptomsBack',
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
      id: '5',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis: Events Log',
      pageName: 'logUnusualActivities',
      htmlContent: (
        <section id='content' class='contents-table'>
          <p>
            A log for anything unusual you did or saw prior to your symptoms,
            use it only if something comes to mind.
          </p>
          <div class='container-log-content'>
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
          </div>
        </section>
      )
    },
    {
      id: '6',
      bookSection: 'Diagnosis',
      pageHeader: '',
      pageName: 'logUnusualActivities',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='container-diary-content'>
            <header class='diary-header-container'>
              <div class='unusual-header-label'>
                <h2>More notes</h2>
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
            <div class='lined-row'></div>
          </div>
        </section>
      )
    },
    {
      id: '7',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis: Drug Log',
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
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
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
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
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
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
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
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
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
      id: '8',
      bookSection: 'Diagnosis',
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
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>{' '}
          <article class='symptom-container'>
            <div class='circle'>
              <h2>F.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>{' '}
          <article class='symptom-container'>
            <div class='circle'>
              <h2>G.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
                  </div>
                </row>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </article>{' '}
          <article class='symptom-container'>
            <div class='circle'>
              <h2>H.</h2>
            </div>
            <div class='symptom-box'>
              <div>
                <row class='header-section'>
                  <div class='label'>
                    <p className='drug-log-headers'>Item:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Frequency:</p>
                  </div>
                </row>
                <row>
                  <div class='label-details'>
                    <p className='drug-log-headers'>Details:</p>
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
      id: '9',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis: Diagnosis Log',
      htmlContent: (
        <section id='content' class='contents-table'>
          <p>
            Here is where you document the diagnosis. Often diagnosis will
            change over time, for new diagnosis update a new page.
          </p>
          <div class='infobox-container short'>
            <row class='row-inline-headers row-height-header'>
              <div className='width4 row-header-left'>
                <p className='row-header-text'>Name of Diagnoser</p>
              </div>
              <div className='width4 row-header-left-input'>
                <p className=' row-header-text'>n</p>
              </div>
              <div className='width4 row-header'>
                <p className='row-header-text'>Diagnostic Date</p>
              </div>
              <div className='width4-header-left-input'>
                <p className='infobox row-header-text'>Diagnostic Name</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
          </div>
        </section>
      )
    },
    {
      id: '10',
      bookSection: 'Diagnosis',
      pageHeader: 'Diagnosis: Events Log',
      pageName: 'logUnusualActivities',
      htmlContent: (
        <section id='content' class='contents-table'>
          <div class='infobox-container full'>
            <row class='row-inline-headers row-height-header'>
              <div className='width4 row-header-left'>
                <p className='row-header-text'>Name of Diagnoser</p>
              </div>
              <div className='width4 row-header-left-input'>
                <p className=' row-header-text'>n</p>
              </div>
              <div className='width4 row-header'>
                <p className='row-header-text'>Diagnostic Date</p>
              </div>
              <div className='width4-header-left-input'>
                <p className='infobox row-header-text'>Diagnostic Name</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
            <row className='row-empty'></row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Symptoms</p>
              </div>
            </row>
            <row className='row-inline-headers row-height'>
              <div className='row-header'>
                <p className='width4 row-header-text'>Caused By</p>
              </div>
            </row>
          </div>
        </section>
      )
    }
  ]
};

export default DiagnosisData;
