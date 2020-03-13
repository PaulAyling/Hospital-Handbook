import React from 'react';

export default function(props) {
  const bookData = props.bookData;

  return (
    <div className='page-content page'>
           <section  id='content'>
        {props.htmlContent}
        </section>
      </div>
  );
}
