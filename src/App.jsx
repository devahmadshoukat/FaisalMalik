import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";

import { Achievement, Contact, Content, Education, Experience, Footer, Hero, Navbar, Profile, Project, StarsCanvas, Tech } from "./components";

const App = () => {

  return (
    <div>
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Education />
        <Project />
        <Experience />
        <Achievement />
        <Profile/>
        <Tech />
        <div className='relative z-0'>
          <Contact />
          <Suspense fallback={<div className="w-full h-full bg-tertiary rounded-2xl" />}>
            <StarsCanvas />
          </Suspense>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
