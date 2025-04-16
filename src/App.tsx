import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
    <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias/>} />
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