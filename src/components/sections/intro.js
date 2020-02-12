import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
      <PageLeft
        id='Contents'
        pageHeader={bookData[1].pageHeader}
        pageNumber={bookData[1].id}
        htmlContent={bookData[1].htmlContent}
      />
      <PageRight
        header={bookData[17].pageHeader}
        pageNumber={bookData[17].id}
        htmlContent={bookData[17].htmlContent}
        bookSection={bookData[17].bookSection}
      />
      <PageLeft
        header={bookData[2].pageHeader}
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />

      <PageRight
        id='Introduction'
        header={bookData[2].pageHeader}
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
    </Fragment>
  );
}
