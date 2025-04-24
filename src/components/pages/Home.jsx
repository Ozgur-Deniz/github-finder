import React from 'react'
import UserSearch from '../users/UserSearch'
import UserResults from '../users/UserResults'
function Home() {
  return (
    <div>
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home