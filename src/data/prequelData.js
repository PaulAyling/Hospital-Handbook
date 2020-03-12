import React from 'react';
const PrequelData = {
  data: [
    {
      id: '1',
      bookSection: 'cover',
      pageHeader: 'front',
      htmlContent:
        'http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png',
      image: 'http://paulayling.me/wp-content/uploads/2019/02/hHandbookCover.png', 
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
      pageType: 'SectionIntroduction',
      pageHeader: 'Introduction',
      htmlContent: (
        <section id='content'>
          <h1>The Hospital Handbook</h1>
          <p class='section-intro-text'>
            by Paul Ayling
          </p>
        </section>
      )
    },
    {
      id: '4',
      bookSection: 'Intro',
      pageType: 'SectionIntroduction',
      pageHeader: 'Introduction',
      htmlContent: (
        <section id='content'>
          <h1 class='section-header'></h1>
          <div>
                      <p >
            Copyright Paul Ayling 2020
          </p>
          <p >
           
          </p>
          </div>

        </section>
      )
    }
  ]
};

export default PrequelData;
