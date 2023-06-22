import React from 'react';
import MidNav from '../Components/MidNav';
import AboutCard from '../Components/AboutCard';
import Footer from '../Layout/Footer';

export default function About() {
  const details = {
    msg1: 'We’re On A Mission',
    msg2: '',
    cardtopic1: 'Vision',
    cardbody1: 'To provide quality educational system, strategies and methodologies which support and influence lifelong learning and development.',
    cardtopic2: 'Mission',
    cardbody2: 'To be the most sought after school academically, morally, mentally, socially, and spiritually. To raise scholars that are champions in the 21st century and beyond.',
    cardtopic3: 'Core Values',
    cardbody3: ['Team Work', 'Concern', 'Godliness', 'Creativity', 'Excellence'],
  }
  return (
    <div className='About'>

      <MidNav msg1={details.msg1} msg2={details.msg2} />

      <div className='about-text'>
        <h1>Brief History Of The Cradle High School</h1>
        <h3>The Cradle High School is a Christian School founded on and governed by the  Word of God and the teachings of the Bible,

The cradle high school was officially commissioned by Rev. Tom Aimiekhenan (Member Central Executive Council) Love World Inc. on 4th September 2020. <br/><br/>

The school started off with 15 staff (11 teaching and 4 non-teaching staff) 31 students comprising of 27 year 7 students and 4 year 8 students. <br/><br/>

Like a mustard seed
 the school population 
 has increased to more 
 than 100% becoming the
  best school within a very
   short period and has maintained
    a track record of excellence and
     outstanding performance.</h3>
      </div>
      
      {/* <AboutCard/> */}

      <div style={{ display: 'flex', width:'80%', margin:'7% auto 7% auto'}} className="the-cards">
        <AboutCard topic={details.cardtopic1} body={details.cardbody1} />
        <AboutCard topic={details.cardtopic2} body={details.cardbody2} />
        <AboutCard topic={details.cardtopic3} body={details.cardbody3.map((item, index) => <li key={index}>{item}</li>)} />
      </div>

    <Footer/>
     
    </div>
  )
}
