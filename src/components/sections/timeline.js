import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left'
import PageRight from '../layout/page-right'
import PageLeftDivider from '../layout/page-leftDivider'

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;

  return (
    <Fragment>

<PageLeftDivider pageStart={pageStart}
      />
      <PageRight
            pageStart={parseInt(pageStart)+parseInt(bookData[0].id)}
  header={bookData[0].pageHeader}
  htmlContent={bookData[0].htmlContent}
  bookSection={bookData[0].bookSection}
      />
      <PageLeft
            pageStart={parseInt(pageStart)+parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
            pageStart={parseInt(pageStart)+parseInt(bookData[2].id)}
        header={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
            pageStart={parseInt(pageStart)+parseInt(bookData[3].id)}
        pageHeader={bookData[3].pageHeader+' Page 2'}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      />
      <PageRight
            pageStart={parseInt(pageStart)+parseInt(bookData[4].id)}
        header={bookData[4].pageHeader}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
    </Fragment>
  );
}