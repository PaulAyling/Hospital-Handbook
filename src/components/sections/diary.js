import React, { Fragment } from 'react';
import PageLeft from '../layout/page-left';
import PageRight from '../layout/page-right';
import PageLeftDivider from '../layout/page-leftDivider';
import DiaryByDay from '../molecules/diary-day';

export default function(props) {
  const bookData = props.bookData;
  const pageStart = props.pageStart;
  // Create Diary HTML
  const myLoop = (loopNumber, pageStart) => {
    let html = '';
    for (let i = 0; i < loopNumber; i++) {
      let singleLoop = `<DiaryByDay loop={${i}} />`;
      html = html + '  ' + singleLoop;
    }
    return html;
  };

const dayByDayPages = myLoop(1, 3);
const DiaryByDay = `<DiaryByDay bookData={bookData} />` ;
const dayByDayReturn = <Fragment>  ${DiaryByDay} </Fragment>

console.log(dayByDayReturn)


  return (
    dayByDayReturn
  );
}
