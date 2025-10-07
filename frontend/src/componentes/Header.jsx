function Header() {
    return ( 
        <>
        {/* HEADER */}
        <header className="max-w-5xl mx-auto flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-b-lg shadow-md transition-colors">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
            Notas App
          </h1>
          <nav className="flex gap-6 text-gray-600 dark:text-gray-300 font-medium transition-colors">
            <a
              href="#"
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#"
              className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              Notas
            </a>
            <a
              href="#"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              Crear Notas
            </a>
          </nav>
        </header>
        </>
     );
}

export default Header;