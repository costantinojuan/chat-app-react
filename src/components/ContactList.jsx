import './ContactList.css'

function ContactList({ chats, selectedChatId, onSelectChat, search, onSearchChange, onCreateChat }) {
  return (
    <aside className="chat-sidebar">
      <div className="sidebar-top">
        <div>
          <h2>Chats</h2>
          <p>Busca o selecciona una conversación</p>
        </div>
        <button type="button" className="new-chat-button" onClick={onCreateChat}>
          + Nuevo chat
        </button>
      </div>

      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="contact-list">
        {chats.length === 0 ? (
          <div className="empty-sidebar">No se encontraron chats</div>
        ) : (
          chats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1]
            return (
              <button
                key={chat.id}
                type="button"
                className={`contact-item ${selectedChatId === chat.id ? 'selected' : ''}`}
                onClick={() => onSelectChat(chat.id)}
              >
                <div className="contact-avatar">{chat.name.charAt(0)}</div>
                <div className="contact-body">
                  <div className="contact-name">{chat.name}</div>
                  <div className="contact-preview">{lastMessage?.text}</div>
                </div>
                <div className="contact-meta">
                  <span className={`status-indicator ${chat.status === 'online' ? 'online' : 'offline'}`} />
                  <span className="contact-status">{chat.status}</span>
                </div>
              </button>
            )
          })
        )}
      </div>
    </aside>
  )
}

export default ContactList
