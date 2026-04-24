import { useState } from 'react'
import ChatWindow from './components/ChatWindow'
import './App.css'

const initialChats = [
  {
    id: 1,
    name: 'Aiden Chavez',
    status: 'online',
    lastSeen: 'Última vez hace 2 horas',
    messages: [
      {
        id: 1,
        text: 'Hola, ¿cómo estás?',
        sender: 'user',
        timestamp: new Date(Date.now() - 3600000),
      },
      {
        id: 2,
        text: 'Hola! Todo bien, ¿y vos?',
        sender: 'bot',
        timestamp: new Date(Date.now() - 3540000),
      },
      {
        id: 3,
        text: 'Estoy terminando el proyecto. Quería mostrarte los avances.',
        sender: 'user',
        timestamp: new Date(Date.now() - 3480000),
      },
    ],
  },
  {
    id: 2,
    name: 'Vincent Porter',
    status: 'offline',
    lastSeen: 'Hace 7 mins',
    messages: [
      {
        id: 1,
        text: '¿Vas a la reunión de hoy?',
        sender: 'bot',
        timestamp: new Date(Date.now() - 5400000),
      },
      {
        id: 2,
        text: 'Sí, llegaré en 10 minutos.',
        sender: 'user',
        timestamp: new Date(Date.now() - 5340000),
      },
    ],
  },
  {
    id: 3,
    name: 'Mike Thomas',
    status: 'online',
    lastSeen: 'En línea',
    messages: [
      {
        id: 1,
        text: '¿Ya viste la entrega del proyecto?',
        sender: 'bot',
        timestamp: new Date(Date.now() - 7200000),
      },
      {
        id: 2,
        text: 'Sí, quedó muy bien.',
        sender: 'user',
        timestamp: new Date(Date.now() - 7140000),
      },
    ],
  },
  {
    id: 4,
    name: 'Christian Kelly',
    status: 'offline',
    lastSeen: 'Hace 10 horas',
    messages: [
      {
        id: 1,
        text: 'Te mando el documento que faltaba.',
        sender: 'bot',
        timestamp: new Date(Date.now() - 10800000),
      },
    ],
  },
  {
    id: 5,
    name: 'Monica Ward',
    status: 'online',
    lastSeen: 'En línea',
    messages: [
      {
        id: 1,
        text: '¿Podemos hablar mañana?',
        sender: 'bot',
        timestamp: new Date(Date.now() - 3600000),
      },
    ],
  },
]

function App() {
  const [chats, setChats] = useState(initialChats)
  const [selectedChatId, setSelectedChatId] = useState(initialChats[0].id)
  const [search, setSearch] = useState('')

  const activeChat = chats.find((chat) => chat.id === selectedChatId) || chats[0]
  const visibleChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleSendMessage = (messageText) => {
    setChats((prevChats) =>
      prevChats.map((chat) => {
        if (chat.id !== selectedChatId) return chat

        const newUserMessage = {
          id: chat.messages.length + 1,
          text: messageText,
          sender: 'user',
          timestamp: new Date(),
        }

        return {
          ...chat,
          messages: [...chat.messages, newUserMessage],
        }
      })
    )

    setTimeout(() => {
      setChats((prevChats) =>
        prevChats.map((chat) => {
          if (chat.id !== selectedChatId) return chat

          const botMessage = {
            id: chat.messages.length + 2,
            text: 'Perfecto, gracias por avisar. Estoy revisando los detalles.',
            sender: 'bot',
            timestamp: new Date(),
          }

          return {
            ...chat,
            messages: [...chat.messages, botMessage],
          }
        })
      )
    }, 500)
  }

  return (
    <div className="app">
      <ChatWindow
        chats={visibleChats}
        activeChat={activeChat}
        selectedChatId={selectedChatId}
        onSelectChat={setSelectedChatId}
        search={search}
        onSearchChange={setSearch}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}

export default App
