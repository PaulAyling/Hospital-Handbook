import React from 'react';
import './App.css';

import BookData from '../src/data/bookData';
import PrequelData from './data/prequelData';
import IntroData from '../src/data/introData';

import Intro from './components/sections/intro';
import Prequel from './components/sections/prequel';
import Symptoms from './components/sections/symptoms';
import Diary from './components/sections/diary';
import Timeline from './components/sections/timeline';
import Logs from './components/sections/logs';
import Appendix from './components/sections/appendix';

function App() {
  const bookData = BookData.data;
  const prequel =  PrequelData.data;
  console.log(JSON.stringify(prequel))
  const introData = IntroData.data;


  return (
    <div className='App'>
      <Prequel bookData={prequel} />
      <Intro bookData={introData} />
      <Diary bookData={bookData} />
      <Timeline bookData={bookData} />
      <Symptoms bookData={bookData} />
      <Logs bookData={bookData} />
      <Appendix bookData={bookData} />
    </div>
  );
}

export default App;
