import React from 'react';
import Button from '../components/elements/Button';
// import sections
import '../lessonTwo.css'
import Practice1 from '../assets/images/Session2.pdf'
// import Practice2 from '../assets/images/Session3.PDF'


const PracticeConfident = () => {

  return (
    <>
      <div className='Web-Chart'>
      <iframe src={Practice1} width="100%" height="1000px"></iframe>
      {/* <iframe src={Practice2} width="100%" height="1000px"></iframe> */}
      </div>
    </>
  );
}

export default PracticeConfident;