import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart
  return (
    <Fragment>
<PageLeftDivider pageStart={pageStart}
      />
      <PageRight
       pageStart={parseInt(pageStart) + 1}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />
       <PageLeft
            pageStart={parseInt(props.pageStart)+parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
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
        htmlContent={bookData[5].htmlContent}
        bookSection={bookData[5].bookSection}
      />

     
    </Fragment>
  );
}
