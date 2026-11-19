import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        fate store
      </header>
      <article>
        <Tasks/>
      </article>
      <footer>
        bertok maximillian
      </footer>
    </>
  )
}

export default App
