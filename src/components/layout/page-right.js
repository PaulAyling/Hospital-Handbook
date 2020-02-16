import React from 'react';
import TabBar from './tabbar'
import Footer from './footer.js'

export default function(props) {
  const bookData = props.bookData;
  return (
    <page class="page">
      <div class="page-container-left">
        <header class="page-header"></header>
        <div class="main-content">
        <h1>{props.pageHeader}</h1>
          <section class="page-content" id="content">
            {props.htmlContent}
          </section>
        </div>  
        <Footer pageStart={props.pageStart}/>
      </div>
      <div class="page-container-right">
       <TabBar bookSection={props.bookSection}/>
      </div>
    </page>

  );
}
