import React from 'react';

export default function(props) {
  const active = props.bookSection;
  const intro = (active === "Intro" )? "active" : "";
  const day1 = (active === "Day1" )? "active" : "";
  const diagnosis = (active === "Diagnosis" )? "active" : "";
  const diary = (active === "Diary" )? "active" : "";
  const timeline = (active === "Timeline" )? "active" : "";
  const extra = (active === "Extra" )? "active" : "";



  return (
    <aside className='tabs'>
      <div className={"tab rotate "+ intro} >
        <p className="tabbbar-text">Intro</p>
      </div>
      <div className={"tab rotate "+ day1} >
        <p className="tabbbar-text">Day 1</p>
      </div>
      <div className={"tab rotate "+ diary} >
        <p className="tabbbar-text">Diary</p>
      </div>
      <div className={"tab rotate "+ timeline} >
        <p className="tabbbar-text">Timelines</p>
      </div>
      <div className={"tab rotate "+ diagnosis} >
        <p className="tabbbar-text">Diagnosis</p>
      </div>
      <div className={"tab rotate "+ extra} >
        <p className="tabbbar-text">Extra</p>
      </div>
    </aside>
  );
}
