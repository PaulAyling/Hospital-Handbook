import React from 'react';
import TabBar from './tabbar'

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
        <footer>
        <p>Page {props.pageNumber}</p>
        </footer>
      </div>
      <div class="page-container-right">
       <TabBar bookSection={props.bookSection}/>
      </div>
    </page>

  );
}
