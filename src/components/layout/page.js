import React, { Fragment } from 'react';
import Footer from './footer.js';

export default function(props) {
  return (
    <page className='page-content page'>
      <section className="text-area"  id='content'>
        {props.htmlContent}
      </section>
      {/* <Footer pageStart={props.pageStart} /> */}
    </page>
  );
}
