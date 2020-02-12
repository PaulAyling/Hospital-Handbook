import React from 'react';

export default function(props) {
  const active = props.bookSection;
  const intro = (active === "Intro" )? "active" : "";
  const symptoms = (active === "Symptom" )? "active" : "";
  const diary = (active === "Diary" )? "active" : "";
  const logs = (active === "Logs" )? "active" : "";
  const timeline = (active === "Timeline" )? "active" : "";
  const diagnosis = (active === "Diagnosis" )? "active" : "";
  const appendix = (active === "Appendix" )? "active" : "";



  return (
    <aside className='tabs'>
      <div className={"tab rotate "+ intro} >
        <p className="tabbbar-text">Intro</p>
      </div>
      <div className={"tab rotate "+ diary} >
        <p className="tabbbar-text">Diary</p>
      </div>
      <div className={"tab rotate "+ timeline} >
        <p className="tabbbar-text">Timelines</p>
      </div>
      <div className={"tab rotate "+ symptoms} >
        <p className="tabbbar-text">Diagnosis</p>
      </div>
      <div className={"tab rotate "+ logs} >
        <p className="tabbbar-text">Logs</p>
      </div>
      <div className={"tab rotate "+ appendix} >
        <p className="tabbbar-text">Appendix</p>
      </div>
    </aside>
  );
}
