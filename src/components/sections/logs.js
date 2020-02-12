import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>

<PageLeftDivider
       pageHeader={bookData[19].pageHeader}
      />
      <PageRight
  header={bookData[19].pageHeader}
  pageNumber={bookData[19].id}
  htmlContent={bookData[19].htmlContent}
  bookSection={bookData[19].bookSection}
      />

      <PageLeft
        id='Contents'
        pageHeader={bookData[9].pageHeader}
        pageNumber={bookData[9].id}
        htmlContent={bookData[9].htmlContent}
      />

      <PageRight
        id='Introduction'
        header={bookData[9].pageHeader}
        pageNumber={bookData[9].id}
        htmlContent={bookData[9].htmlContent}
        bookSection={bookData[9].bookSection}
      />
      <PageLeft
        id='Contents'
        pageHeader={bookData[10].pageHeader}
        pageNumber={bookData[10].id}
        htmlContent={bookData[10].htmlContent}
      />

      <PageRight
        id='Introduction'
        header={bookData[10].pageHeader}
        pageNumber={bookData[12].id}
        htmlContent={bookData[12].htmlContent}
        bookSection={bookData[12].bookSection}
      />
    </Fragment>
  );
}
