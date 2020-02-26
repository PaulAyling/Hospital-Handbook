import React from 'react';
import './App.css';
import './components/layout/layouts.css';
import './components/sections/section.css';
import './utilities/utilityStyles.css';

import PrequelData from './data/prequelData';
import IntroData from '../src/data/introData';
import Day1Data from '../src/data/day1Data';
import DiaryData from '../src/data/diaryData';
import TimelineData from '../src/data/timelineData';
import DiagnosisData from '../src/data/diagnosisData';
import ReleaseData from '../src/data/releaseData';
import ExtraData from '../src/data/extraData';
import BackCoverData from '../src/data/backCoverData';

import Prequel from './components/sections/prequel';
import Contents from './components/sections/contents';
import Intro from './components/sections/intro';
import Day1 from './components/sections/day1';
import Diagnosis from './components/sections/diagnosis';
import Diary from './components/sections/diary';
import Release from './components/sections/release';

import Appendix from './components/sections/appendix';
import BackCover from './components/sections/backCover';

function App() {
  const prequel = PrequelData.data;
  const introData = IntroData.data;
  const day1Data = Day1Data.data;
  const diaryData = DiaryData.data;
  const releaseData = ReleaseData.data;
  const diagnosisData = DiagnosisData.data;
  const extraData = ExtraData.data;
  const backCoverData = BackCoverData.data;

  /* Calculate the page numbers */
  const introSectionStart = 1;
  const day1SectionStart = 4;
  const diarySectionStart = 10;
  const timelineSectionStart = 71;
  const diagnosisSectionStart = 77;
  const extraSectionStart = 89;

  return (
    <div className='App'>
       <Prequel bookData={prequel} />
      <Contents
        introSectionStart={introSectionStart}
        day1SectionStart={day1SectionStart}
        diarySectionStart={diarySectionStart}
        timelineSectionStart={timelineSectionStart}
        diagnosisSectionStart={diagnosisSectionStart}
        extraSectionStart={extraSectionStart}
      />
      <Intro bookData={introData} pageStart={introSectionStart} />
      <Day1 bookData={day1Data} pageStart={day1SectionStart} />
      <Diary bookData={diaryData} pageStart={diarySectionStart} />
      <Diagnosis bookData={diagnosisData} pageStart={diagnosisSectionStart} />
      <Release bookData={releaseData} pageStart={diagnosisSectionStart}/>  
      <Appendix bookData={extraData}      pageStart={extraSectionStart}/>
      <BackCover   bookData={backCoverData}  />
    </div>
  );
}

export default App;
