import React from 'react';

export default function(props) {
  const bookData = props.bookData;

  return (

      <section id='cover'>
        <div class='cover-page'>
          <img
            class='img-cover'
            src={bookData[0].image}
            alt='Hospital Handbook Cover33'
          />
        </div>
      </section>

  );
}
