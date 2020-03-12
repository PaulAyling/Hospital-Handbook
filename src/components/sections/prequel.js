import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import BookCover from '../layout/book-cover';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
      <BookCover bookData={bookData} />
      {/* <PageLeftDivider />

      <PageLeft
        pageHeader=''
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
        pageHeader=''
        pageNumber={bookData[3].id}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      /> */}
    </Fragment>
  );
}
