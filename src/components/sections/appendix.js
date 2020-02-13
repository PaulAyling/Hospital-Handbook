import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  return (
    <Fragment>
<PageLeftDivider
       pageHeader={bookData[19].pageHeader}
      />
      <PageRight
        header={bookData[20].pageHeader}
        pageNumber={bookData[20].id}
        htmlContent={bookData[20].htmlContent}
        bookSection={bookData[20].bookSection}
      />
     
    </Fragment>
  );
}
