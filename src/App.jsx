import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/Service/Service';
import Resume from './components/resume/Resume';
import Portfolio from './components/Portfolio/Portfolio'; 
import Pricing from './components/pricing/Pricing';
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Squares from './components/background/Squares';
import TextCursor from './components/cursor/Textcursour';
import ClickSpark from './components/cursor/ClickSpark';



function App() {

  return (
    <>
  
            <ClickSpark
            sparkColor='red'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={10}
            duration={600}
           className="bg-dark" 
           style={{position:'relative',zIndex:9999}}>
            {/* Your content here */}
    

        {/* <TextCursor
          text="Hello! I'm Arun"
          delay={0.01}
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
          zIndex={1000}
        /> */}
      <Sidebar/>
      
      <main className="main">
     
        <Home/>
        <About/>
        <Service/>
        <Resume/>
        <Portfolio/>
        {/* <Pricing/> */}
        {/* <Testimonial/>   */}
        {/* <Blog/> */}
        <Contact/>
        {/* <Squares
speed={0.5} 
squareSize={56}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
        
        <Squares
speed={0.5} 
squareSize={56}
direction='diagonal' // up, down, left, right, diagonal
borderColor='#fff'
hoverFillColor='#222'
/>
         */}
      </main>

  </ClickSpark>
    
    </>
  )
}

export default App
