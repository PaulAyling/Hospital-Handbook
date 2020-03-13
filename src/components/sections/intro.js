import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import Page from '../layout/page';
import Section from '../layout/section';
import BookCover from '../layout/book-cover';
import PageLeftDivider from '../layout/page-leftDivider';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;
  return (
    <Fragment>
      <Section
        pageStart={pageStart}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />

      <Page
        id=''
        pageStart={parseInt(pageStart) + 1}
        pageHeader={bookData[1].pageHeader}
        htmlContent={bookData[1].htmlContent}
      />
      <Page
        id=''
        pageStart={parseInt(pageStart) + 2}
        pageHeader={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <Page
        id=''
        pageStart={parseInt(pageStart) + 3}
        pageHeader={bookData[3].pageHeader}
        htmlContent={bookData[3].htmlContent}
      />
      <Page
        id=''
        pageStart={parseInt(pageStart) + 4}
        pageHeader={bookData[4].pageHeader}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
     
    </Fragment>
  );
}
