function Notas() {
    return ( 
        <>
            <div className=" w-3xl flex flex-col mx-auto text-center p-6 my-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg prose prose-sky dark:prose-invert transition-colors dark:text-gray-300">

                <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">Crear Notas</h2>
                
                <form className="flex flex-col gap-4 mt-4">
                    {/* Solo es una nota pero el label se tendra que hacer un componente aparte así como el boton */}
                
                    <label htmlFor="titleNombre" className="text-lg">Nombre de la Nota</label>
                    <input type="text" id="titleNombre" name="titleNombre" placeholder="Nombre de la nota" className="font-semibold p-2 rounded-2xl border-2 border-gray-50/50 outline-sky-400 outline-2 text-white dark:text-gray-300 " />
                
                    <label htmlFor="contentNota" className="text-lg">Contenido de la Nota</label>
                    <textarea id="contentNota" className="font-semibold p-2 rounded-2xl border-2 border-gray-50/50 outline-sky-400 outline-2 text-white dark:text-gray-300 max-h-120" name="contentNota" placeholder="Escribe tu nota aquí..."></textarea>
                
                    <button type="submit" className="bg-gradient-to-r from-sky-500 to-purple-500 w-2xs mx-auto rounded-2xl py-2 text-white">Guardar Nota</button>
                </form>
            </div>
        </>
     );
}

export default Notas;