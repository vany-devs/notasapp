import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Recuperar preferencia del usuario al cargar la página
  useEffect(() => {
    const userPrefersDark = localStorage.getItem('darkMode') === 'enabled';
    if (userPrefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Alternar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', !darkMode ? 'enabled' : 'disabled');
  };

  return (
    // CONTENEDOR PRINCIPAL
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      
      {/* BOTÓN PARA CAMBIAR MODO */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md transition-all"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* HEADER */}
      <header className="max-w-5xl mx-auto flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-b-lg shadow-md transition-colors">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
          Notas App
        </h1>
        <nav className="flex gap-6 text-gray-600 dark:text-gray-300 font-medium transition-colors">
          <a href="#" className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors">Inicio</a>
          <a href="#" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">Notas</a>
          <a href="#" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">Crear Notas</a>
        </nav>
      </header>

      {/* MAIN */}
      <main className="max-w-5xl mx-auto p-6 my-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg prose prose-sky dark:prose-invert transition-colors dark:text-gray-300">
        <h2 className='text-2xl font-semibold mb-2'>
          Hola, bienvenido a{' '}
          <span className="bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
            Notas App
          </span>
        </h2>
        <p className='py-2'>
          Fue creado con la idea de presentarlo como proyecto para mi portafolio
          como desarrollador, así como para resolver un problema personal: crear
          notas de manera sencilla y rápida. Muchas aplicaciones en celular tienen
          anuncios o requieren comprar la versión completa para evitarlos; en otros
          casos no hay anuncios, pero no ofrecen opciones para usarlas en la PC.
        </p>
        <p className='py-2'>
          Existen alternativas como Notion o Evernote, que son rápidas de entender,
          pero no siempre son muy amigables o tienen limitaciones. De esta manera
          nació <b>Notas App</b>, un proyecto que irá creciendo poco a poco, sin
          anuncios y de manera continua.
        </p>
        <h3 className='py-2'>Con <b>Notas App</b>, podrás:</h3>
        <ul className="list-disc list-inside">
          <li>Crear <b>notas públicas</b>, que solo se verán en el equipo de creación.</li>
          <li>Crear <b>notas privadas</b>, que podrás llevar a cualquier equipo.</li>
          <li>Crear un usuario, iniciar sesión, ver y editar tus notas, y sincronizarlas entre dispositivos.</li>
        </ul>
        <p className='py-2'>
          Este proyecto ha contado con la ayuda de Perla Green, quien contribuyó con
          el diseño y desarrollo. El código y la infraestructura han sido desarrollados
          por mí, Vany-devs, y todos los costos de alojamiento corren por mi cuenta,
          por lo que los datos no se comparten con terceros. Además, las notas privadas
          cuentan con una encriptación básica.
        </p>
        <p>
          Si deseas conocer más sobre el proyecto o contactarnos, tendrás la opción de
          ver el repositorio.
        </p>
      </main>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 text-center text-gray-500 dark:text-gray-400 rounded-t-lg shadow-inner transition-colors">
        &copy; 2024 Notas App. Todos los derechos reservados.
      </footer>

    </div>
  );
}

export default App;
