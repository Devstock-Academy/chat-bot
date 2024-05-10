import Header from '@/components/Header'
import ChatMessage from '@/components/ChatMessage'
import Input from '@/components/Input'

const MOCK_DATA = [
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
  {
    role: 'user',
    content:
      'Write code (HTML, CSS and JS) for a simple welcome page and form with 3 input fields and a dropdown with 2 buttons, cancel and send, then run test with my Codepen project.',
  },
  {
    role: 'assistant',
    content: `It seems like you mentioned "Discord." Discord is a popular communication platform designed for creating communities, hosting discussions, and interacting with others through text, voice, and video. It's commonly used by gamers, but its versatility has led to adoption in various other fields as well, such as education, professional teams, hobbyist groups, and more.`,
  },
]

export default function Home() {
  return (
    <main>
      <Header />
      <div className='h-chat overflow-auto'>
        {MOCK_DATA.map(({ role, content }) => (
          <ChatMessage role={role}>{content}</ChatMessage>
        ))}
      </div>
      <Input />
    </main>
  )
}
