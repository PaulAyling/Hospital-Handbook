import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import BookCover from '../layout/book-cover'

export default function(props) {
  const bookData = props.bookData;
  console.log(" "+JSON.stringify(bookData))
  return (
    <Fragment>
      <BookCover
        bookData = {bookData}
      />
     
    </Fragment>
  );
}
