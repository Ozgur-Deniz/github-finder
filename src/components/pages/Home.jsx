import React from 'react'
import UserSearch from '../users/UserSearch'
import UserResults from '../users/UserResults'
function Home() {
  return (
    <div className='w-[80%]'>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home