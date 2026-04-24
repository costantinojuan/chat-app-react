import './Message.css'

function Message({ message }) {
  const formatTime = (date) => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className={`message ${message.sender}`}>
      <div className="message-content">
        <p className="message-text">{message.text}</p>
        <span className="message-time">{formatTime(message.timestamp)}</span>
      </div>
    </div>
  )
}

export default Message
