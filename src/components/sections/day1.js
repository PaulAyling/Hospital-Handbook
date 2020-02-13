import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
      <PageLeftDivider  />
      <PageRight
        pageHeader=''
        pageNumber={bookData[0].id}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />
      <PageLeft
        pageHeader={bookData[1].pageHeader}
        pageNumber={bookData[1].id}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageHeader={bookData[2].pageHeader}
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
        pageHeader={bookData[3].pageHeader}
        pageNumber={bookData[3].id}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      />
      <PageRight
        pageHeader={bookData[4].pageHeader}
        pageNumber={bookData[4].id}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
      <PageLeft
        pageHeader={bookData[5].pageHeader}
        pageNumber={bookData[5].id}
        htmlContent={bookData[5].htmlContent}
        bookSection={bookData[5].bookSection}
      />
      <PageRight
        pageHeader={bookData[6].pageHeader}
        pageNumber={bookData[6].id}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
    </Fragment>
  );
}
