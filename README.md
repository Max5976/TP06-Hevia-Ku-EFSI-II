# 🐱 Catstagram — Clon de Instagram con React

Aplicación web inspirada en la interfaz de Instagram, desarrollada en React con Vite. En lugar de fotos de usuarios, el feed se alimenta con imágenes reales obtenidas de **The Cat API**.

---

## 🏗️ Estructura del proyecto

```
src/
├── api/
│   └── the-cat-api.jsx       # Instancia de Axios con baseURL y API Key
├── components/
│   ├── Feed/
│   │   └── Feed.jsx          # Lista el feed de publicaciones
│   ├── Header/
│   │   └── Header.jsx        # Barra de navegación superior
│   ├── Historia/
│   │   └── Historia.jsx      # Ítem individual de story circular
│   ├── ModalPublicacion/
│   │   └── ModalPublicacion.jsx  # Vista ampliada de un post
│   ├── Perfil/
│   │   └── Perfil.jsx        # Sidebar con datos del usuario
│   └── Publicacion/
│       ├── Publicacion.jsx   # Card individual de un post
│       └── Publicacion.css
├── App.jsx                   # Componente raíz y estado global
├── App.css
├── index.css
└── main.jsx
```

---

## 🧩 Componentes

### `App`
Componente raíz. Realiza **3 peticiones en paralelo** a The Cat API con `Promise.all` para obtener 30 imágenes, les agrega un número de likes aleatorio, y distribuye esas imágenes entre las stories (primeras 8) y el feed (restantes 22). Maneja el estado global de `publicaciones`, `perfilCat`, `error` y `publicacionSeleccionada`.

### `Header`
Barra fija superior con el logo **Catstagram** y botones de navegación simulados: Home, Search, Create, Likes y Profile.

### `Historia`
Recibe `usuario` y `avatar` por props. Renderiza un avatar circular con el nombre del usuario debajo, en formato stories. Se genera uno por cada una de las primeras 8 imágenes del feed.

### `Feed`
Recibe el array de `publicaciones` y la función `seleccionar` por props. Itera el array y renderiza un componente `<Publicacion>` por cada elemento.

### `Publicacion`
Card de un post individual. Maneja su propio estado local de `likeado` (booleano) y `likes` (contador). Al hacer clic en el corazón, alterna el estado y suma/resta 1 al contador sin afectar al resto del feed. Al hacer clic en la imagen, llama a `seleccionar` para abrir el modal.

### `Perfil`
Sidebar izquierdo con los datos del usuario activo. Recibe `avatarApi` por props (la última imagen cargada de la API) y muestra datos estáticos: usuario `mi_usuario`, bio *"Amante de los gatos"*, y estadísticas de publicaciones (12), seguidores (340) y seguidos (180).

### `ModalPublicacion`
Recibe `publicacion` y `cerrarModal` por props. Se superpone sobre el layout completo mostrando la imagen en grande junto con los datos del post. Se cierra al hacer clic en el fondo o en el botón "Cerrar".

---

## 📡 Flujo de datos

La app sigue un flujo **unidireccional top-down**:

```
App
 ├─ publicaciones ──► Feed ──► Publicacion
 ├─ publicaciones[0..7] ──► Historia (×8)
 ├─ perfilCat ──► Perfil
 └─ publicacionSeleccionada ──► ModalPublicacion
```

El **lifting state up** se aplica en el like del modal: `Publicacion` llama a `seleccionar(publicacion)` para que `App` actualice `publicacionSeleccionada` y monte el modal.

---

## 🎣 Hooks utilizados

- **`useEffect`** — en `App.jsx` con dependencias vacías `[]` para ejecutar `cargarPublicaciones()` una única vez al montar el componente.
- **`useState`** — en `App.jsx` para `publicaciones`, `perfilCat`, `error` y `publicacionSeleccionada`; en `Publicacion.jsx` para `likeado` y `likes`.

---

## 🚀 Cómo ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd TP06-Hevia-Ku-EFSI-II-main

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173) en el navegador.
3. Instalar las dependencias de Node ejecutando:
   ```bash
   npm install
4. Iniciar el servidor de desarrollo de Vite con el comando:
   ```bash
   npm run dev
