import React, { Fragment } from 'react';
import Page from '../layout/page';
import PageRight from '../layout/page-right';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;
  const loop = props.loop;

  return (
    <Fragment>
      <Page
        pageStart={pageStart}
        pageHeader={bookData[5].pageHeader}
        htmlContent={bookData[5].htmlContent}
        bookSection={bookData[5].bookSection}
      />
      <Page
        pageStart={pageStart + 1}
        pageHeader={bookData[6].pageHeader}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
    </Fragment>
  );
}
