import React from 'react'

import { Message, DialogItem } from '../../components/common'

import './Home.scss'

const Home = () => {
  const userExample = {
    fullname: 'Alice',
  }

  const user = {
    name: 'Mary Curie',
    avatar: 'https://source.unsplash.com/100x100/?random=20&face',
    isOnline: true,
  }

  const message = {
    text: 'Hi! I am Mary.',
    created_at: 'Thu Jul 05 2020 13:12:44',
  }
  const user2 = {
    name: 'Arnold Girra',
    avatar: 'https://source.unsplash.com/100x100/?random=982&face',
    isOnline: false,
  }

  const message2 = {
    text: 'Hej! Im iron Arny! Nice to meet you (:',
    created_at: 'Thu Jul 05 2020 14:18:44',
  }
  const user3 = {
    name: 'John Smith',
    avatar: 'https://source.unsplash.com/100x100/?random=1142&face',
    isOnline: false,
  }

  const message3 = {
    text: 'I writing to you because I have a deal. Write me back if you are interested.',
    created_at: 'Thu Jul 05 2020 15:49:44',
  }

  return (
    <section className="home">
      <div className="dialogs">
        <DialogItem user={user} message={message} unread={3} />
        <DialogItem user={user2} message={message2} unread={33} />
        <DialogItem user={user3} message={message3} unread={333} />
        <DialogItem user={user3} message={message3} unread={3333} />
      </div>
      {/* <Dialogs
        items={[
          {
            user: {
              name: 'Mary Curie',
              avatar: null,
            },
            message: {
              text: 'The last message of Mary in this dialog.',
              hasRead: false,
              created_at: new Date(),
            },
          },
        ]}
      /> */}
      {/* <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        text="Hi everyone!"
        date="Thu Jul 02 2020 20:40:44"
        user={userExample}
        isMe
      /> */}
      {/*<Message
        avatar="https://source.unsplash.com/100x100/?random=30&face"
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
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        text="Yeap!"
        date="Thu Jul 02 2020 20:40:44"
        user={userExample}
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=4&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=5&people,face,portrait',
          },
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/100x100/?random=6&people,face,portrait',
          },
        ]}
        isMe={true}
        hasRead={true}
      />
      <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        user={userExample}
        date="Thu Jul 05 2020 12:28:22"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/150x150/?random=56&people,face,portrait',
          },
        ]}
        isMe
      />
      <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        user={userExample}
        date="Thu Jul 05 2020 12:22:22"
        attachments={[
          {
            filename: 'image.jpg',
            url: 'https://source.unsplash.com/150x150/?random=4&people,face,portrait',
          },
        ]}
      />
      <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        user={userExample}
        isTyping={true}
      /> */}
    </section>
  )
}

export default Home
