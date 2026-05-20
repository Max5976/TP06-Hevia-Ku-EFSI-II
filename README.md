# Trabajo Práctico: Clon web de Instagram con React

Este proyecto es una aplicación web desarrollada en React inspirada en la interfaz de Instagram, utilizando datos provenientes de la API externa **The Cat API** para cargar imágenes en el feed.

## 🏗️ Organización del Proyecto

El proyecto está organizado dentro de la carpeta `src` siguiendo un enfoque modular por características.
* **`/api`**: Contiene la configuración de Axios (`the-cat-api.jsx`) para centralizar la URL base y la inyección de la API Key, manteniendo el código limpio.
* **`/components`**: Contiene subcarpetas para cada parte de la interfaz de usuario. Cada componente cuenta con su propio archivo `.jsx`.

## 🧩 Componentes creados y sus responsabilidades

1. **`App`**: Es el componente contenedor principal. Maneja el estado global de las publicaciones obtenidas de la API, el manejo de errores, y controla qué publicación está seleccionada para visualizar en el modal.
2. **`Header`**: Barra de navegación que contiene elementos simulados como la barra de búsqueda y los íconos de interacción.
3. **`Feed`**: Componente contenedor semántico que agrupa la sección principal donde se ven los posteos.
4. **`ListaPublicaciones`**: Componente intermedio que se encarga exclusivamente de iterar (mapear) el arreglo de datos y renderizar una lista de posteos.
5. **`Publicacion`**: Componente de presentación para un posteo individual. Renderiza la imagen, el usuario emulado y maneja su propia lógica y estado interno para los "Likes".
6. **`Perfil`**: Representa la sección lateral ("sidebar") con la información simulada del usuario activo.
7. **`ModalPublicacion`**: Renderiza la vista ampliada y detallada de un post individual mediante una ventana emergente superpuesta.
8. **`Historia`**: Componente preparado para renderizar usuarios en formato de "stories" circulares.

### Por qué decidimos componentizar de esta manera
La división elegida sigue el principio de **Responsabilidad Única**. Extraer la iteración en `ListaPublicaciones` y el renderizado en `Publicacion` evita que el componente principal `App` se vuelva demasiado grande e ilegible. Además, permite que los componentes sean reutilizables y asegura que, al hacer clic en "Like" en una publicación, solo se vuelva a renderizar ese componente `Publicacion` en específico y no todo el árbol del feed.

## 📡 Comunicación mediante Props

La aplicación utiliza un flujo de datos unidireccional (Top-Down):
* **Datos:** `App` le pasa el arreglo de `publicaciones` a `Feed`, y este a su vez se lo pasa a `ListaPublicaciones`, quien le pasa el objeto individual de cada foto al componente `Publicacion`.
* **Eventos (Lifting State Up):** Se pasa la función `onSelect` desde `App` hasta `Publicacion`. Cuando el usuario hace clic en un posteo, `Publicacion` ejecuta `onSelect` pasándole su propia información, avisándole a `App` cuál debe abrirse en el modal.

## 🎣 Hooks Utilizados y sus usos

* **`useEffect`**: Se utiliza en `App.jsx` con un array de dependencias vacío `[]` para ejecutar la función asíncrona `cargarPublicaciones()` que hace la llamada a Axios de manera que ocurra **una única vez** al montarse el componente en el DOM.
* **`useState`**: 
  * En `App.jsx`: `[publicaciones, setPublicaciones]` para almacenar el array de imágenes de la API, `[error, setError]` para el manejo de fallos en la petición, y `[publicacionSeleccionada, setPublicacionSeleccionada]` para saber qué post renderizar en el Modal.
  * En `Publicacion.jsx`: `[liked, setLiked]` (booleano para saber si pintar el corazón de rojo) y `[likes, setLikes]` (contador numérico) para manejar localmente las interacciones del usuario sin depender del estado global.

## 🎨 Diseño de Referencia
El diseño implementado toma como base e inspiración estructural un prototipo de diseño de la interfaz de Instagram, adaptando una paleta de colores coherente y una disposición en columnas (navegación, feed principal y perfil lateral).

## 🔍 Visualización Individual de Publicaciones

La visualización individual se resolvió mediante un **Modal o ventana emergente**. 
Para lograr esto, en `App.jsx` definimos el estado `publicacionSeleccionada` (inicializado en nulo). Cuando el usuario hace clic sobre una publicación, dicho estado se actualiza con los datos del post. En el JSX de `App`, utilizamos **renderizado condicional** (`{publicacionSeleccionada && ...}`) para montar el componente `<ModalPublicacion />` solo cuando hay un post seleccionado, superponiéndolo visualmente al resto del sitio.

## 👤 Perfil de Usuario Emulado

El perfil de un usuario logueado se simuló directamente en el componente `Perfil.jsx` estableciendo un objeto local predeterminado por defecto. 

Los datos que se muestran en la barra lateral del perfil son:
* **Nombre de usuario:** `mi_usuario`
* **Avatar:** Un placeholder de imagen genérica.
* **Biografía:** "Amante de los gatos"
* **Estadísticas:** Cantidad de publicaciones (12), seguidores (340) y seguidos (180).

## 🚀 Instrucciones para ejecutar el proyecto

1. Clonar el repositorio en tu máquina local.
2. Abrir una terminal en la ruta raíz del proyecto.
3. Instalar las dependencias de Node ejecutando:
   ```bash
   npm install