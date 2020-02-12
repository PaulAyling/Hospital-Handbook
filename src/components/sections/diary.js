import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left'
import PageRight from '../layout/page-right'
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const bookData = props.bookData;
  const pageNumber = bookData[7].id;
  const loopNo = 1
  return (
    <Fragment>
     <PageLeftDivider
       pageHeader={bookData[16].pageHeader}
      />
      <PageRight
  header={bookData[16].pageHeader}
  pageNumber={bookData[16].id}
  htmlContent={bookData[16].htmlContent}
  bookSection={bookData[16].bookSection}
      />

      <PageLeft id="Diary"
        pageHeader={bookData[7].pageHeader}
        pageNumber={bookData[7].id}
        htmlContent={bookData[7].htmlContent}
      />
      <PageRight id="Doctor Notes"
        header={bookData[8].pageHeader}
        pageNumber={bookData[8].id}
        htmlContent={bookData[8].htmlContent}
        bookSection={bookData[8].bookSection}
      />
    </Fragment>
  );
}
