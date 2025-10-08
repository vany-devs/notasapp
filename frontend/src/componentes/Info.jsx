function Informacion() {
    return ( 
        <>
            <h2 className="text-2xl font-semibold mb-2">
            Hola, bienvenido a{" "}
            <span className="bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">
              Notas App
            </span>
          </h2>
          <p className="py-2">
            Fue creado con la idea de presentarlo como proyecto para mi
            portafolio como desarrollador, así como para resolver un problema
            personal: crear notas de manera sencilla y rápida. Muchas
            aplicaciones en celular tienen anuncios o requieren comprar la
            versión completa para evitarlos; en otros casos no hay anuncios,
            pero no ofrecen opciones para usarlas en la PC.
          </p>
          <p className="py-2">
            Existen alternativas como Notion o Evernote, que son rápidas de
            entender, pero no siempre son muy amigables o tienen limitaciones.
            De esta manera nació <b>Notas App</b>, un proyecto que irá creciendo
            poco a poco, sin anuncios y de manera continua.
          </p>
          <h3 className="py-2">
            Con <b>Notas App</b>, podrás:
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Crear <b>notas públicas</b>, que solo se verán en el equipo de
              creación.
            </li>
            <li>
              Crear <b>notas privadas</b>, que podrás llevar a cualquier equipo.
            </li>
            <li>
              Crear un usuario, iniciar sesión, ver y editar tus notas, y
              sincronizarlas entre dispositivos.
            </li>
          </ul>
          <p className="py-2">
            Este proyecto ha contado con la ayuda de <span className="font-semibold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">Perla Green</span>, quien
            contribuyó con el diseño y desarrollo. El código y la
            infraestructura han sido desarrollados por mí, <span className="font-semibold bg-gradient-to-r from-sky-500 to-purple-500 text-transparent bg-clip-text">Vany-devs</span>, y todos los costos de alojamiento corren por mi cuenta, por lo que los datos
            no se comparten con terceros. Además, las notas privadas cuentan con
            una encriptación básica.
          </p>
          <p>
            Si deseas conocer más sobre el proyecto o contactarnos, tendrás la
            opción de ver el repositorio.
          </p>
        </>
     );
}

export default Informacion;