import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart
  return (
    <Fragment>
      <PageLeftDivider  />
     

      <PageRight
        pageStart={pageStart}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />

<PageLeft id="Diary"
      pageStart={parseInt(pageStart)+1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
      />
      <PageRight id="Doctor Notes"
      pageStart={parseInt(pageStart)+2}
        pageHeader={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
    </Fragment>
  );
}
