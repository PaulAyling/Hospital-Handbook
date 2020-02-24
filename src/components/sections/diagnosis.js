import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;
  return (
    <Fragment>
      <PageLeftDivider pageStart={pageStart} />
      <PageRight
        pageStart={parseInt(pageStart) + parseInt(bookData[0].id)}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />

      <PageLeft
        pageStart={parseInt(pageStart) + parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart) + 1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart) + parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart) + 1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart) + parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart) + 1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart) + parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart) + 1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
    </Fragment>
  );
}
