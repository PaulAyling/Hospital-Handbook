import React from 'react';

export default function(props) {
  return (
    <page class='page'>
      <div class='page-container-left-divider'>
        <header class='page-header'>
        <p class="header-text">{props.header}</p>
        </header>
        <div class='main-content'>
        <h1> {props.header}</h1>
          <section id='content'>
          {props.header }
          </section>
        </div>
        <footer>
          Page {props.pageNumber}
        </footer>
      </div>

    </page>
  );
}
