import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Informacion from "./Info.jsx";
import Notas from "./Notas.jsx";

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Recuperar preferencia del usuario al cargar la página
  useEffect(() => {
    const userPrefersDark = localStorage.getItem("darkMode") === "enabled";
    if (userPrefersDark) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Alternar modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode ? "enabled" : "disabled");
  };

  return (
    <>
      {/* CONTENEDOR PRINCIPAL */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        
        {/* BOTÓN PARA CAMBIAR MODO */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-md transition-all"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* HEADER */}
        <Header />

        {/* MAIN */}
        {/* Posiblemente lo voy a combertir en un componente aparte */}
        <main className="max-w-5xl mx-auto p-6 my-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg prose prose-sky dark:prose-invert transition-colors dark:text-gray-300">
          <Informacion />
          {/* <Notas /> */}
        </main>

        {/* FOOTER */}
        {/* X2 */}
        <footer className="max-w-5xl mx-auto p-6 bg-gray-50 dark:bg-gray-800 text-center text-gray-500 dark:text-gray-400 rounded-t-lg shadow-inner transition-colors">
          &copy; 2024 Notas App. Todos los derechos reservados.
        </footer>
      </div>
    </>
  );
}

export default Layout;
