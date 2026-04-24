import Message from './Message'
import './MessageList.css'

function MessageList({ messages, messagesEndRef }) {
  return (
    <div className="message-list">
      {messages.length === 0 ? (
        <div className="empty-state">
          <p>No hay mensajes aún. ¡Inicia una conversación!</p>
        </div>
      ) : (
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}

export default MessageList
