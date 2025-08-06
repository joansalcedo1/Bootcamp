import NavBar from "./components/NavBar"
import Libros from "./components/Libros"
import OurServices from "./components/Services"
import Comprometidos from "./components/Comprometidos"
import Parallax from "./components/Parallax"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
function App() {
  return (
    <>
      <NavBar />
      <Hero/>
      <Libros />  
      <Comprometidos/>
      <OurServices/>
      <Footer/>

    </>
  )
}

export default App
