import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <div>
              <h1>Home page</h1>
              <div class="about_me"></div>
              <a href="/page2.html">Go to Page2 </a> |
              <a href="/page3.html">Go to Page3</a>
          </div>
    </>
  )
}

export default App
