import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import Footer from './components/footer/Footer'
import ListaCategorias from './components/categoria/listacategoria/ListaCategoria'
import Navbar from './components/navbar/Navbar'
import FormCategoria from './components/categoria/formtema/FormCategoria'
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria'


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoriaa" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria/>} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App