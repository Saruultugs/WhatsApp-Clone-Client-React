import * as React from 'react'
import ChatsNavbar from './ChatsNavbar'
import ChatsList from './ChatsList'

const ChatsListScreen = (props) => (
  <div>
    <ChatsNavbar />
    <ChatsList {...props} />
  </div>
)

export default ChatsListScreen
