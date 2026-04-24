import { useState } from 'react'
import './InputBox.css'

function InputBox({ onSendMessage }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSendMessage(input)
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <textarea
        className="message-input"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        rows="1"
      />
      <button
        className="send-button"
        type="submit"
        disabled={!input.trim()}
        title="Enviar mensaje"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </form>
  )
}

export default InputBox
