import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import FormCategoria from './components/categorias/formtema/FormCategoria'
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria'
import ListaCategorias from './components/categorias/listacategoria/ListaCategorias'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>} />
              <Route path="/cadastrarcategorias" element={<FormCategoria/>} />
              <Route path="/editarcategorias/:id" element={<FormCategoria />} />
              <Route path="/deletarcategorias/:id" element={<DeletarCategoria />} />
              </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App