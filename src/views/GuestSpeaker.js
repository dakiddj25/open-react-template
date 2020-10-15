import React from 'react';
import Button from '../components/elements/Button';
// import sections
import '../lessonTwo.css'


const GuestSpeaker = () => {

  return (
    <>
      <div className='email'>
      <h1>Sending an email</h1>
      <p>Tell the Guest Speaker thank the speaker for taking the time to come to speak to us. Write what interested you most about the presentation or carrer. Also mention something about yourself!</p>
      <p>Don't forget to thank the speaker for taking the time to come to speak to us</p>
        <form  className='Email' onSubmit={() => window.alert("For Demo purposes this information is not being stored")}>
            <input type='text' placeholder="Email address:"/>
            <input type='text' placeholder="Subject:"/>
            <textarea placeholder="Yor message (what you want to ask or say) goes here" rows="4" cols="50"/>
            <button >Send</button>
        </form>
      
      </div>
     
    </>
  );
}

export default GuestSpeaker;