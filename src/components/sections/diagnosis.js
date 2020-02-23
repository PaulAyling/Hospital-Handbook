import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart
  return (
    <Fragment>
 {/* <PageLeftDivider pageStart={pageStart}
       />
      <PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[0].id)}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      /> */}

       <PageLeft
        pageStart={parseInt(pageStart)+parseInt(bookData[1].id)}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
        bookSection={bookData[1].bookSection}
      />
     {/*<PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[2].id)}
        header={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart)+parseInt(bookData[3].id)}
        pageHeader={bookData[3].pageHeader}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[4].id)}
        header={bookData[4].pageHeader}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart)+parseInt(bookData[5].id)}
        pageHeader={bookData[5].pageHeader}
        htmlContent={bookData[5].htmlContent}
      />

      <PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[6].id)}
        header={bookData[6].pageHeader}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart)+parseInt(bookData[7].id)}
        pageHeader={bookData[7].pageHeader}
        htmlContent={bookData[7].htmlContent}
      />

      <PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[8].id)}
        header={bookData[8].pageHeader}
        htmlContent={bookData[8].htmlContent}
        bookSection={bookData[8].bookSection}
      />

      <PageLeft
          pageStart={parseInt(pageStart)+parseInt(bookData[9].id)}
        pageHeader={bookData[9].pageHeader}
        htmlContent={bookData[9].htmlContent}
      />

      <PageRight
        pageStart={parseInt(pageStart)+parseInt(bookData[10].id)}
        header={bookData[10].pageHeader}
        htmlContent={bookData[10].htmlContent}
        bookSection={bookData[10].bookSection}
      />  */}
    </Fragment>
  );
}
