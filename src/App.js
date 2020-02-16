import React from 'react';
import './App.css';

import PrequelData from './data/prequelData';
import IntroData from '../src/data/introData';
import Day1Data from '../src/data/day1Data';
import DiaryData from '../src/data/diaryData';
import TimelineData from '../src/data/timelineData';
import DiagnosisData from '../src/data/diagnosisData';
import ExtraData from '../src/data/extraData';

import Prequel from './components/sections/prequel';
import Contents from './components/sections/contents'
import Intro from './components/sections/intro';
import Day1 from './components/sections/day1';
import Diagnosis from './components/sections/diagnosis';
import Diary from './components/sections/diary';
import Timeline from './components/sections/timeline';
import Appendix from './components/sections/appendix';

function App() {
  const prequel = PrequelData.data;
  const introData = IntroData.data;
  const day1Data = Day1Data.data;
  const diaryData = DiaryData.data;
  const timelineData = TimelineData.data;
  const diagnosisData = DiagnosisData.data;
  const extraData = ExtraData.data;

  /* Calculate the page numbers */
  const introSectionStart = 1
  const day1SectionStart = 4
  const diarySectionStart = 10
  const timelineSectionStart = 71
  const diagnosisSectionStart=77
  const extraSectionStart=89

  return (
    <div className='App'>
      <Prequel 
      bookData={prequel}         
      />
      <Contents 
      introSectionStart={introSectionStart}
      day1SectionStart={day1SectionStart}
      diarySectionStart={diarySectionStart}
      timelineSectionStart={timelineSectionStart}
      diagnosisSectionStart={diagnosisSectionStart}
      extraSectionStart={extraSectionStart}
      />
      <Intro bookData={introData}         pageStart={introSectionStart}/>
      <Day1 bookData={day1Data}           pageStart={day1SectionStart}/>
      <Diary bookData={diaryData}         pageStart={diarySectionStart}/>
      <Timeline bookData={timelineData}   pageStart={timelineSectionStart}/>
      <Diagnosis bookData={diagnosisData} pageStart={diagnosisSectionStart}/>
      <Appendix bookData={extraData}      pageStart={extraSectionStart}/>
    </div>
  );
}

export default App;
