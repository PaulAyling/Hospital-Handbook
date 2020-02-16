import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;

  return (
    <Fragment>
      <PageLeft
        pageStart={pageStart}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageStart={pageStart + 1}
        pageHeader={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
    </Fragment>
  );
}
