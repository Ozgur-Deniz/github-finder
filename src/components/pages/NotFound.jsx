import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            Oops!
          </h1>
          <p className="text-5xl mb-8">
            404 - Page not found!
          </p>
          <div>
          <Link to='/' className='flex flex-row justify-center items-center g-6 duration-600 hover:text-slate-500  ' >
          <FaHome className='mr-2 text-xl text-blue-900' />
          Back To Home
          </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound