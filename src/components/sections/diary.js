import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';
import DiaryByDay from '../molecules/diary-day';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;


// Create Diary HTML
  const dayByDayPageOffset = pageStart + 6
console.log(dayByDayPageOffset)

  const myLoop = (loopNumber, dayByDayPageOffset) => {
    return [...new Array(loopNumber)].map((i, index) => (
      <DiaryByDay
        key={i}
        bookData={bookData}
        loop={i}
        pageStart={2 * index + dayByDayPageOffset}
      />
    ));
  };
// Create pages render
  const dayByDayPages = myLoop(30, dayByDayPageOffset);
  const dayByDayReturn = (
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
        pageStart={parseInt(pageStart) + parseInt(bookData[2].id)}
        header={bookData[2].pageHeader}
        htmlContent={bookData[2].htmlContent}
        bookSection={bookData[2].bookSection}
      />
      <PageLeft
        pageStart={parseInt(pageStart) + parseInt(bookData[3].id)}
        pageHeader={bookData[3].pageHeader + ' Page 2'}
        htmlContent={bookData[3].htmlContent}
        bookSection={bookData[3].bookSection}
      />
      <PageRight
        pageStart={parseInt(pageStart) + parseInt(bookData[4].id)}
        header={bookData[4].pageHeader}
        htmlContent={bookData[4].htmlContent}
        bookSection={bookData[4].bookSection}
      />
      {/* Input Diary pages here */}
      {dayByDayPages}
    </Fragment>
  );
  return dayByDayReturn;
}
