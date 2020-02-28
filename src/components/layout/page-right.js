import React from 'react';
import TabBar from './tabbar'
import Footer from './footer.js'

export default function(props) {
  const bookData = props.bookData;
  return (
    <page class="page">
      <div class="page-container-left">
          <section class="page-content" id="content">
            {props.htmlContent}
          </section>
        <Footer pageStart={props.pageStart}/>
      </div>
      <div class="page-container-right">
       <TabBar bookSection={props.bookSection}/>
      </div>
    </page>

  );
}
