import React from 'react';
import './App.css';

import BookData from '../src/data/bookData';
import PrequelData from './data/prequelData';
import IntroData from '../src/data/introData';
import Day1Data from '../src/data/day1Data';
import DiaryData from '../src/data/diaryData';
import TimelineData from '../src/data/timelineData';
import DiagnosisData from '../src/data/diagnosisData';

import Prequel from './components/sections/prequel';
import Intro from './components/sections/intro';
import Day1 from './components/sections/day1';
import Diagnosis from './components/sections/diagnosis';
import Diary from './components/sections/diary';
import Timeline from './components/sections/timeline';
import Appendix from './components/sections/appendix';

function App() {
  const bookData = BookData.data;
  const prequel = PrequelData.data;
  const introData = IntroData.data;
  const day1Data = Day1Data.data;
  const diaryData = DiaryData.data;
  const timelineData = TimelineData.data;
  const diagnosisData = DiagnosisData.data;

  return (
    <div className='App'>
      {/* <Prequel bookData={prequel} />
      <Intro bookData={introData} />
      <Day1 bookData={day1Data} />
      <Diary bookData={diaryData} />
      <Timeline bookData={timelineData} /> */}
      <Diagnosis bookData={diagnosisData} />
      {/* <Appendix bookData={bookData} /> */}
    </div>
  );
}

export default App;
