CinePoster AI

Descripción

CinePoster AI es una SPA desarrollada con React + Vite que permite buscar películas y visualizar sus posters junto con información obtenida desde una API externa.

El proyecto está pensado para seguir agregando nuevas funcionalidades en futuras versiones.


Cliente y problemática

Cliente: MovieHub (ficticio).

El problema identificado es que los usuarios deben buscar posters de películas en distintas páginas, donde la calidad e información puede variar.

La solución busca juntar la búsqueda de posters e información de películas en una sola aplicación.


Funcionalidades

- Buscar películas por nombre.
- Mostrar poster de la película.
- Mostrar descripción e información.
- Ver poster en alta calidad.
- Mensaje cuando no existen resultados.


Futuras mejoras

Se planea agregar funcionalidades CRUD:

- Crear colecciones de posters.
- Ver posters guardados.
- Modificar colecciones.
- Eliminar posters.


Tecnologías utilizadas

- React + Vite
- JavaScript
- CSS
- API TMDb
- Git y GitHub


Estructura

src/

components/
- Navbar
- SearchBar
- MovieCard
- Footer

pages/
- Home

services/
- tmdb


Uso de IA

Se utilizó inteligencia artificial como apoyo durante el desarrollo para resolver dudas y mejorar la estructura del proyecto.

Los prompts utilizados se encuentran en el archivo PROMPTS_IA.md.


Avance

Primera versión del proyecto con componentes React, manejo de estado, consumo de API externa y estructura preparada para futuras mejoras.