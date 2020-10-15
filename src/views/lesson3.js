import React from 'react';
import Button from '../components/elements/Button';
// import sections
import '../lessonTwo.css'


const Lesson3 = () => {

  return (
    <>
      <div className='container4'>
        <h1>Note-Taking Lesson 3</h1>
        <p>Listen closely to the speaker's presentation and answer the following questions.</p>
        <form  className='Note-Taking' onSubmit={() => window.alert("For Demo purposes this information is not being stored")}>
            <input type='text' placeholder="Speaker's Name"/>
            <input type='text' placeholder="Career Goal or Present Career"/>
            <textarea placeholder="What special training or education is needed for this career?" rows="4" cols="50"/>
            <textarea placeholder="With what roadblocks or problems did the speaker have to deal?" rows="4" cols="50"/>
            <textarea placeholder="What do you think was the most interesting thing the speaker said?" rows="4" cols="50"/>
            <input type='submit'/> 
        </form>
        <Button tag="a" color="primary" wideMobile href="/GuestSpeaker">Email Guest Speaker</Button>
      
      <br/>
      <br/>
      <Button tag="a" color="primary" wideMobile href="/Lesson2">Prev Lesson</Button>
      </div>
            

    </>
  );
}

export default Lesson3;