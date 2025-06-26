import React from 'react'
import CountUp from './Countup'

const AboutBox = () => {
  return (
    <>
      <h3 className=" text-center " style={{marginTop:'50px',fontSize:'40px'}}>Skills</h3>
      <div className="about__boxes grid bg-dark">
        
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">React</h3>
            <span className="about__subtitle">
            <CountUp
              from={0}
              to={70}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            /> % </span>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Node Js</h3>
            <span className="about__subtitle">
              <CountUp
                from={0}
                to={60}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /> % </span>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Express</h3>
            <span className="about__subtitle">
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /> % </span>
        </div>
        </div>
        <div className="about__box">
        {/* <i className='about__icon'><i className="fa-solid fa-mug-hot"></i></i>     */}
        <div>
            <h3 className="about__title">Mongo DB</h3>
            <span className="about__subtitle">
              <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              /> % </span>
        </div>
        </div>
      </div>
    
    </>
  )
}

export default AboutBox
