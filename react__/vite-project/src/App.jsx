import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Features from './components/Features'
import Footer from './components/Footer'
import { useState } from 'react'
function App() {

  const [darkMode, setDarkMode] = useState(false);
  let colorbg = "bg-ligth"
  let colorText = "text-dark"

  const toggleDarkMode  = () => {
    setDarkMode(!darkMode)
    
  }

  if (darkMode) {
    colorbg = "bg-dark"
    colorText = "text-light"
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />
      <Features darkMode={darkMode} />
      <Footer/>
    </>
  )
}

export default App
/*<>
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>*/