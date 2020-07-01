import React from 'react'

import { Message } from '../../components/common'

import './Home.scss'

const Home = () => {
  const userExample = {
    fullname: 'Alice',
  }
  return (
    <section className="home">
      <Message
        avatar="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Hi everyone!"
        date="Sun Apr-21 2020 21:30:31"
        user={userExample}
      />
    </section>
  )
}

export default Home
