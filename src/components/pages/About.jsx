import React from 'react'

function About() {
  return (
    <div className='flex flex-col justify-center items-start gap-4'>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light max-w-xl text-left">
        A React app to search GitHub profiles and see profile details. This project is part of the
        <a href="https://www.udemy.com/course/modern-react-front-to-back/"> React Front To Back</a> Udemy course by
        <strong>
          <a href="https://traversymedia.com"> Brad Traversy</a>
        </strong>
        .
      </p>
      <p className="text-lg">
        Version <span className="text-slate-500">1.0.0</span>
      </p>
      <p className="text-lg">
        Layout By : 
        <a className="text-slate-500 pl-1 leading-none" href="https://twitter.com/hassibmoddasser">
            Hassib Moddasser
        </a>
      </p>
    </div>
  )
}

export default About