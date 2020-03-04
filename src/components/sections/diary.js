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
      let singleLoop = `<DiaryByDay bookData={bookData} pageStart={${pageStart +
        i}} loop={${i}}/>`;
      html = html + '  ' + singleLoop;
    }
    return html;
  };

  const dayByDayPages = myLoop(5, 3);
const sometext="<h1>Hello texty</h1>"
  console.log(myLoop(5, 3));

  return (
    <Fragment>
      <PageLeftDivider pageStart={pageStart} />

      {/* DIARY TITLE PAGE */}
      <PageRight
        pageStart={pageStart}
        header={bookData[0].pageHeader}
        htmlContent={bookData[0].htmlContent}
        bookSection={bookData[0].bookSection}
      />
      {/* TIMELINE   */}
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
      {/* DIARY */}
      <DiaryByDay bookData={bookData} pageStart={someText} />
      

      {/* <DiaryByDay bookData={bookData} pageStart={pageStart+1} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+3} /> */}

      {/* <DiaryByDay bookData={bookData} pageStart={pageStart+5} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+7} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+9} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+11} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+13} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+15} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+17} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+19} />
      
        <DiaryByDay bookData={bookData} pageStart={pageStart+21} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+23} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+25} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+27} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+29} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+31} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+33} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+35} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+37} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+39} />
      
        <DiaryByDay bookData={bookData} pageStart={pageStart+41} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+43} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+45} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+47} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+49} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+51} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+53} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+55} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+57} />
        <DiaryByDay bookData={bookData} pageStart={pageStart+59} /> */}
    </Fragment>
  );
}
