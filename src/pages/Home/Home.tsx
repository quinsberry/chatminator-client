import React from 'react'

import { Message, DialogItem } from '../../components/common'
import { Dialogs } from '../../components'

import './Home.scss'

const Home = () => {
  const userExample = {
    _id: '134i0i23',
    name: 'Alice',
    isOnline: true,
  }

  return (
    <section className="home">
      <Dialogs
        items={[
          {
            _id: 'd1as21as5d1w6ds5dw4da65s',
            text: 'The last message of Mary in this dialog.',
            created_at: new Date('Thu Jul 02 2020 20:40:44'),
            user: {
              _id: 'd1as21as5d1w6ds5dw4da65s',
              name: 'Mary Curie',
              avatar: undefined,
              isOnline: true,
            },
            unread: 33,
          },
          {
            _id: '2ed1dasd2',
            text: 'The last message of Mary in this dialog.',
            hasRead: false,
            created_at: new Date(),
            user: {
              _id: '2dqsda',
              name: 'MJohn MacLane',
              avatar: 'https://source.unsplash.com/100x100/?random=20&face',
              isOnline: true,
            },
            unread: 0,
          },
          {
            _id: '2dqsda',
            text: 'The last message of Mary in this dialog.',
            hasRead: false,
            created_at: new Date(),
            user: {
              _id: '4ras21as5d1w6ds5dw4da65s',
              name: 'Sara MacLane',
              avatar: undefined,
              isOnline: false,
            },
            unread: 2,
          },
        ]}
        userId="2dqsda"
      />
      {/* <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        text="Hi everyone!"
        date={new Date('Thu Jul 02 2020 20:40:44')}
        user={userExample}
        isMe
      />
      <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        text="Hi everyone!"
        date={new Date('Thu Jul 02 2020 20:40:44')}
        user={userExample}
      />
      <Message
        avatar="https://source.unsplash.com/100x100/?random=30&face"
        audio="https://lyucifer.tv/wp-content/uploads/2019/02/say_hi_devils.mp3"
        date={new Date('Thu Jul 02 2020 20:40:44')}
        user={userExample}
      /> */}
      {/* <Message
        avatar="https://source.unsplash.com/100x100/?random=20&face"
        text="Yeap!"
        date={new Date("Thu Jul 02 2020 20:40:44")}
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
        date={new Date("Thu Jul 05 2020 12:28:22")}
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
        date={new Date("Thu Jul 05 2020 12:22:22")}
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
