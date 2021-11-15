import React, { useEffect, useRef, useState } from 'react'
// import images from './images/logo.jpg';

const Page = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("December 25 2021 00:00:00").getTime();


    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        // stop
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }


    }, 1000);
  }
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  })

  return (
    <>
   

      <section className="timer-container">
      
      
        <section className="timer">
          <div>
            <span className="icon"></span>
            <img src="./images/R (2).jpg"/>
            <h2>coming soon!</h2>
            <p>Our Website is opening soon.
              </p>


          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p><big>Days</big></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p><big>hours</big></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p><big>minutes</big></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p><big>seconds</big></p>
            </section>
          </div>
          
          
         
        </section>
        <div class="right-side">
            <img src="./images/kl.jpg" alt="nikita"/>
          </div>
       
        
      </section>
      
      


          </>
        )
        }

        export default Page
