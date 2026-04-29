import { useRef, useEffect } from 'react'
import MessageList from './MessageList'
import InputBox from './InputBox'
import ContactList from './ContactList'
import './ChatWindow.css'

function ChatWindow({
  chats,
  activeChat,
  selectedChatId,
  onSelectChat,
  search,
  onSearchChange,
  onSendMessage,
  onCreateChat,
}) {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [activeChat.messages])

  return (
    <div className="chat-window">
      <ContactList
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={onSelectChat}
        search={search}
        onSearchChange={onSearchChange}
        onCreateChat={onCreateChat}
      />

      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-title-group">
            <div>
              <h1>{activeChat.name}</h1>
              <p>{activeChat.status === 'online' ? 'En línea' : activeChat.lastSeen}</p>
            </div>
          </div>
          <div className="chat-actions">
            <button type="button" title="Llamada">📞</button>
            <button type="button" title="Adjuntar">📎</button>
            <button type="button" title="Más opciones">⋯</button>
          </div>
        </div>

        <MessageList messages={activeChat.messages} messagesEndRef={messagesEndRef} />
        <InputBox onSendMessage={onSendMessage} />
      </div>
    </div>
  )
}

export default ChatWindow
