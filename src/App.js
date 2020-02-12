import React from 'react';
import './App.css';
import PageLeft from './components/layout/page-left';
import PageRight from './components/layout/page-right';
import BookData from '../src/data/bookData';
import Cover from './components/layout/cover';
import Intro from './components/sections/intro';
import Symptoms from './components/sections/symptoms';
import Diary from './components/sections/diary';
import Timeline from './components/sections/timeline';
import Logs from './components/sections/logs';
import Appendix from './components/sections/appendix';

function App() {
  const bookData = BookData.data;

  return (
    <div className='App'>
      <Cover bookData={bookData} />
      <Intro bookData={bookData} />
      <Diary bookData={bookData} />
      <Timeline bookData={bookData} />
      <Symptoms bookData={bookData} />
      <Logs bookData={bookData} />
      <Appendix bookData={bookData} />
    </div>
  );
}

export default App;
