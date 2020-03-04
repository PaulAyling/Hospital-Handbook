import React, { Component } from 'react';
const ExtraData = {
  data: [
    {
      id: '1',
      bookSection: 'Extra',
      pageHeader: 'Appendix',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Extra Section</h1>
          <p class='section-intro-text'>Extra Materials and Links</p>
          <p>
            There are some additional that are not essential but you may find
            useful. There are also links to external resources here as well
          </p>

          <ul>
            <li>
              Extra Sections
              <ul>
                <li>Unusual Activity Log</li>
                <li>Drug Log</li>
                <li>Other Resources</li>
              </ul>
            </li>
          </ul>
        </section>
      )
    },

    {
      id: '2',
      bookSection: 'Extra',
      pageHeader: 'Extra: Events Log',
      pageName: 'logUnusualActivities',
      htmlContent: (
        <section id='content' class='contents-table'>
          <p>
            If diagnosis is becoming difficult it can be useful to log anything
            unusual you did or saw prior to your symptoms. This log is for that.
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
      id: '3',
      bookSection: 'Extra',
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
          </div>
        </section>
      )
    },
    {
      id: '4',
      bookSection: 'Extra',
      pageHeader: 'Extra: Drug Log',
      htmlContent: (
        <section id='content'>
          <p>
            Sometimes you can leave hospital and not know what drugs you have
            taken. This log is somewhere for you to record this.
          </p>
          <section id='Container-Drugboxes' className='container-flex-column'>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
          </section>
        </section>
      )
    },
    {
      id: '5',
      bookSection: 'Extra',
      pageHeader: '',
      htmlContent: (
        <section id='content'>
          <section id='Container-Drugboxes' className='container-flex-column'>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
            {/* Drugbox  */}
            <div
              id='drugbox'
              className='container-flex-column border-gray margin-bottom3px'>
              <div className='container-flex-row width1 border-bottom '>
                <div className='gray width4 text-header-inline '>
                  Drug Name:
                </div>
                <div className=''></div>
              </div>{' '}
              <div className='container-flex-row width1 border-bottom h-4rem'>
                <div className='gray width4  text-header-inline'>
                  Drug Purpose:
                </div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>Dosage:</div>
                <div className=''></div>
              </div>
              <div className='container-flex-row width1 border-bottom   '>
                <div className='gray width4  text-header-inline'>
                  Frequency:
                </div>
                <div className=''></div>
              </div>
            </div>
          </section>
        </section>
      )
    },
    {
      id: '6',
      bookSection: 'Extra',
      pageHeader: 'Appendix',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Thank You!</h1>
          
          <p>
            I would love to hear any feedback or suggestions so I can imporve the next verion of this please visit our website HospitalHelper.com and you can contact me personally.
          </p>

         
        </section>
      )
    },
    {
      id: '7',
      bookSection: 'Extra',
      pageHeader: 'Appendix',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'>Thank You!</h1>
          <p class='section-intro-text'>I hope this has helped</p>
          <p>
            I would love to hear any feedback or suggestions so I can imporove the next version of this please visit our website HospitalHelper.com
          </p>

          <ul>
            <li>
              Extra Sections
              <ul>
                <li>More to be added here</li>
  
              </ul>
            </li>
          </ul>
        </section>
      )
    },
  ]
};

export default ExtraData;
