import { Link } from "react-router-dom"


function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg">


                

<Link to='/' className='hover:underline'>        
                        <img
                            src="https://i.imgur.com/GvZOAvY.png"
                            alt="Imagem Página Home"
                            className='w-6/6'
                        />
                </Link>
                    <div className='flex gap-4'>
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>  
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>                    
                    <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
