import React from 'react';

export default function(props) {
  return (

        <footer>
          {props.pageStart ? "Page "+  JSON.stringify(props.pageStart) :""}
        </footer>

  );
}
