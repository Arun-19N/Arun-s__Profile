import React from 'react';
import './About.css';
import img from '../home/jerry.jpeg'
import AboutBox from './AboutBox';
import Squares from '../background/Squares';
import Arunresume from '../../../Arunresume.pdf'; // Ensure the path is correct

const About = () => {

  // const handleDownload = () => {
  //   const data = Arunresume;
  //   const blob = new Blob([Arunresume], { type: "text/plain" });
  //   const url = window.URL.createObjectURL(blob);

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = Arunresume;
  //   link.click();

  //   // Cleanup
  //   window.URL.revokeObjectURL(Arunresume);
  // };



  return (
    <>
      <section className="about container section" id='about'>

        <h2 className="section__title">About Me</h2>

        <div className="about__container grid">
      
          <img src={img} alt="" className='about__img' width={'200px'} height={'200px'} style={{borderRadius:"50%"}} />



          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description"> I am a dedicated software developer with expertise in frontend development. I have
 6 months of experience in frontend development and am currently doing an
 apprenticeship in backend development at Vizweb Solutions. I hold a MERN Stack
 certification from Profenaa Technologies and am building my skills in Node.js,
 Express, and MongoDB to enhance my full-stack abilities.</p>
              <a href={Arunresume} download={Arunresume} className="btn">Download CV</a>

              
            </div>
            <div className="about__skills grid">

                <div className="skills__data"> 
                  <div className="skills__titles">
                    <h3 className="skills__name">Frontend</h3>
                      <span className="skills__number ">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage development"></span>
                  </div>

                </div>


                <div className="skills__data"> 
                  <div className="skills__titles">
                    <h3 className="skills__name">Backend</h3>
                      <span className="skills__number ">50%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage api"></span>
                  </div>

                </div>


                {/* <div className="skills__data"> 
                  <div className="skills__titles">
                    <h3 className="skills__name">Developement</h3>
                      <span className="skills__number developement">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage"></span>
                  </div>

                </div> */}

              </div>

          </div>
        </div>
        

        <AboutBox/>

      </section>

   
    </>
  )
}

export default About
