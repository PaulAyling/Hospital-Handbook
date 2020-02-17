import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart
  return (
    <Fragment>
      <PageLeftDivider    pageStart={props.pageStart}/>
      <PageRight
      pageStart={parseInt(props.pageStart)+parseInt(bookData[0].id)}
        pageHeader=''
        pageNumber={bookData[0].id}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />
      <PageLeft
      pageStart={parseInt(props.pageStart)+parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        pageNumber={bookData[1].id}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
      <PageRight
            pageStart={parseInt(props.pageStart)+parseInt(bookData[2].id)}
        pageHeader={bookData[2].pageHeader}
        pageNumber={bookData[2].id}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
            pageStart={parseInt(props.pageStart)+parseInt(bookData[3].id)}
        pageHeader={bookData[3].pageHeader}
        pageNumber={bookData[3].id}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      />
      <PageRight
            pageStart={parseInt(props.pageStart)+parseInt(bookData[4].id)}
        pageHeader={bookData[4].pageHeader}
        pageNumber={bookData[4].id}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
      <PageLeft
            pageStart={parseInt(props.pageStart)+parseInt(bookData[5].id)}
        pageHeader={bookData[5].pageHeader}
        pageNumber={bookData[5].id}
        htmlContent={bookData[5].htmlContent}
        bookSection={bookData[5].bookSection}
      />
      <PageRight
            pageStart={parseInt(props.pageStart)+parseInt(bookData[6].id)}
        pageHeader={bookData[6].pageHeader}
        pageNumber={bookData[6].id}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
    </Fragment>
  );
}
