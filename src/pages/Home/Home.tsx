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
        date="Thu Jul 02 2020 20:40:44"
        user={userExample}
        isMe={true}
      />
      <Message
        avatar="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Hello! Nice to meet you. "
        date="Thu Jul 02 2020 20:40:44"
        user={userExample}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&people,face,portrait',
          },
        ]}
      />
      <Message
        avatar="https://images.pexels.com/photos/1855582/pexels-photo-1855582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        text="Yeap!"
        date="Thu Jul 02 2020 20:40:44"
        user={userExample}
        isMe={true}
        isRead={true}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=1&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=2&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=3&people,face,portrait',
          },
        ]}
      />
    </section>
  )
}

export default Home
