import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left'
import PageRight from '../layout/page-right'
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
       <PageLeftDivider
       pageHeader={bookData[18].pageHeader}
      />
      <PageRight
  header={bookData[18].pageHeader}
  pageNumber={bookData[18].id}
  htmlContent={bookData[18].htmlContent}
  bookSection={bookData[18].bookSection}
      />
      <PageLeft
        pageHeader={bookData[13].pageHeader}
        pageNumber={bookData[13].id}
        htmlContent={bookData[13].htmlContent}
        bookSection={bookData[13].bookSection}
      />
      <PageRight
        header={bookData[14].pageHeader}
        pageNumber={bookData[14].id}
        htmlContent={bookData[14].htmlContent}
        bookSection={bookData[14].bookSection}
      />
      <PageLeft
        pageHeader={bookData[13].pageHeader+" - second Page"}
        pageNumber={bookData[13].id}
        htmlContent={bookData[13].htmlContent}
        bookSection={bookData[13].bookSection}
      />
      <PageRight
        header={bookData[14].pageHeader}
        pageNumber={bookData[14].id}
        htmlContent={bookData[14].htmlContent}
        bookSection={bookData[14].bookSection}
      />

    </Fragment>
  );
}