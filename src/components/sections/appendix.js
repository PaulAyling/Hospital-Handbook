import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';

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
     
    </Fragment>
  );
}
