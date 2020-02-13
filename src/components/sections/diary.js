import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left'
import PageRight from '../layout/page-right'
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
     <PageLeftDivider
      />
      <PageRight
  header={bookData[0].pageHeader}
  pageNumber={bookData[0].id}
  htmlContent={bookData[0].htmlContent}
  bookSection={bookData[0].bookSection}
      />

      <PageLeft id="Diary"
        pageHeader={bookData[1].pageHeader}
        pageNumber={bookData[1].id}
        htmlContent={bookData[1].htmlContent}
      />
      <PageRight id="Doctor Notes"
        header={bookData[2].pageHeader}
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
    </Fragment>
  );
}
