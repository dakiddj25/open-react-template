import React from 'react';
import Button from '../components/elements/Button';
// import sections
import '../lessonTwo.css'


const Lesson2 = () => {

  return (
    <>
      <div className='Web-Chart'>
      <h1>Positive & Negative Futures!</h1>
            <div className='web-grid'>
                
                <div className='positive-future'><iframe sandbox='allow-scripts allow-same-origin allow-presentation' allowfullscreen='false' allowtransparency='true' frameborder='0' height='315' src='https://www.mentimeter.com/embed/cf5e2f34437bb619f28ad084e82ab92a/8f0f754c5977'  width='420'></iframe></div>
                 <button className='positive-button' onClick={()=>window.open('https://www.menti.com/oj31awjmht','_blank')}>Submit Answers</button>
                
                <div className='negative-future'><iframe sandbox='allow-scripts allow-same-origin allow-presentation' allowfullscreen='false' allowtransparency='true' frameborder='0' height='315' src='https://www.mentimeter.com/s/f5c1f8b9234ee6f5fc0130ab5a2c3123/8a52b149e74f'  width='420'></iframe></div>
                 <button className='negative-button' onClick={()=>window.open('https://www.menti.com/x3ycfrwvcn','_blank')}>Submit Answers</button>
            </div>

            <Button tag="a" color="primary" wideMobile href="/BuildingSelfConfidence">
            Practices for building Self-Confidence 
                    </Button>
            {/* <button onClick={() => }>Practices for building Self-Confidence -></button> */}
            <br/>
            <br/>
            <Button tag="a" color="primary" wideMobile href="/Lesson1">Prev Lesson</Button>
            &nbsp; 
            <Button tag="a" color="primary" wideMobile href="/Lesson3">Next Lesson</Button>

      </div>
    </>
  );
}

export default Lesson2;