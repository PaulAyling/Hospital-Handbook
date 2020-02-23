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
        pageHeader={bookData[5].pageHeader}
        htmlContent={bookData[5].htmlContent}
        bookSection={bookData[5].bookSection}
      />
      <PageRight
        pageStart={pageStart + 1}
        pageHeader={bookData[6].pageHeader}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
    </Fragment>
  );
}
