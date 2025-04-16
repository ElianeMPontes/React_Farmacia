
function Home() {
    return (
        <>
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-4xl font-bold'>
                            Sejam Bem Vindos!
                        </h2>
                        <p className='text-xl'>
                            Os melhores preços da região estão aqui!
                        </p>

                        
                        
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/GvZOAvY.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home