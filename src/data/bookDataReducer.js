import React, { Component } from 'react';
import BookData from '../data/bookData'

  const CoverData = BookData.data.filter(function(getFile){
    return getFile.bookSection === "Cover"
  });
  const IntroData = BookData.data.filter(function(getFile){
    return getFile.bookSection === "Intro"
  });

export default CoverData
// Other exports
export { 
  IntroData
}
