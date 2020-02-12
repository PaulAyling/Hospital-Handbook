import React from 'react';

export default function(props) {
  return (
    <page class='page'>
      <div class='page-container-left'>
        <header class='page-header'>
        <p class="header-text"></p>
        </header>
        <div class='main-content'>
        <h1> {props.pageHeader}</h1>
          <section id='content'>
          {props.htmlContent }
          </section>
        </div>
        <footer>
          Page {props.pageNumber}
        </footer>
      </div>

    </page>
  );
}
