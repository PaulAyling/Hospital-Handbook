import React from 'react';

export default function(props) {
  const bookData = props.bookData;
  console.log("book-cover  "+JSON.stringify(bookData))

  return (

    <page size="FictionBook" class="page">
      <section id="content">
        <div class="container-img">
          <img
          class="img-cover"
          src={bookData[0].image}
          alt="Hospital Handbook Cover33"
        />
        </div>
      </section>
    </page>     
  );
}
