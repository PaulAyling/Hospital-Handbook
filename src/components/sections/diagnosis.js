import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
      <PageLeftDivider />
      <PageRight
        header={bookData[0].pageHeader}
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
        header={bookData[2].pageHeader}
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
        header={bookData[4].pageHeader}
        pageNumber={bookData[4].id}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
      <PageLeft
        id='Contents'
        pageHeader={bookData[5].pageHeader}
        pageNumber={bookData[5].id}
        htmlContent={bookData[5].htmlContent}
      />

      <PageRight
        id='Introduction'
        header={bookData[6].pageHeader}
        pageNumber={bookData[6].id}
        htmlContent={bookData[6].htmlContent}
        bookSection={bookData[6].bookSection}
      />
      <PageLeft
        id='Contents'
        pageHeader={bookData[7].pageHeader}
        pageNumber={bookData[7].id}
        htmlContent={bookData[7].htmlContent}
      />

      <PageRight
        id='Introduction'
        header={bookData[8].pageHeader}
        pageNumber={bookData[8].id}
        htmlContent={bookData[8].htmlContent}
        bookSection={bookData[8].bookSection}
      />

      <PageLeft
        id='Contents'
        pageHeader={bookData[9].pageHeader}
        pageNumber={bookData[9].id}
        htmlContent={bookData[9].htmlContent}
      />

      <PageRight
        id='Introduction'
        header={bookData[10].pageHeader}
        pageNumber={bookData[10].id}
        htmlContent={bookData[10].htmlContent}
        bookSection={bookData[10].bookSection}
      /> 
    </Fragment>
  );
}
