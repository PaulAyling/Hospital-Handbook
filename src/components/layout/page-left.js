import React from 'react';
import Footer from './footer.js'

export default function(props) {
  return (
    <page class="page">
    <div class="page-container-left">
        <section class="page-content" id="content">
          {props.htmlContent}
        </section>
      <Footer pageStart={props.pageStart}/>
    </div>
  </page>
  );
}
