import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Productos from "../src/components/productos/Productos"
import Categorias from './components/categorias/Categorias'
import Ayuda from "./components/ayuda/Ayuda"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Categorias/>
      <Productos/>
      <Ayuda/>
      <Footer/>
    </>
  )
}

export default App
