import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Categoria from "../../../model/Categorias";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { DNA } from "react-loader-spinner";


function ListaCategorias() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([])

    async function buscarCategoria() {
        try {
            await buscar('/categorias', setCategoria)
        } catch (error: any) {
            
        }
    }
    useEffect(() => {
        buscarCategoria()    
    }, [categoria.length])

    return (
        <>
        {categoria.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
        />
        )}

<div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                       {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaCategorias;