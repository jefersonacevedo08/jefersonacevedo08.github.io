# Jeferson Acevedo — página personal

Sitio estático (HTML + CSS + JS, sin dependencias).

```
index.html     contenido de la página
styles.css     diseño (los colores están arriba, en :root)
script.js      tema claro/oscuro, menú en celular, filtro de proyectos
assets/        foto de perfil
```

## Verla en tu computador

Abre `index.html` con doble clic, o desde esta carpeta:

```bash
python -m http.server 5500
```

y entra a http://localhost:5500

## Publicarla gratis en https://jefersonacevedo08.github.io

La dirección sale de una **organización gratis** llamada `jefersonacevedo08`, creada desde tu
cuenta `Jeferson0809`. Así tu cuenta y los enlaces de tus repos no cambian.

1. **Crear la organización:** entra a https://github.com/organizations/plan, elige el plan
   **Free**, ponle de nombre **`jefersonacevedo08`**, usa tu Gmail como correo de contacto y
   marca que pertenece a tu cuenta personal.
2. **Crear el repositorio** dentro de la organización: público y llamado exactamente
   **`jefersonacevedo08.github.io`**, sin README.
3. **Subir los archivos** desde esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Primera versión de mi página"
   git branch -M main
   git remote add origin https://github.com/jefersonacevedo08/jefersonacevedo08.github.io.git
   git push -u origin main
   ```

4. En el repo: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`** → Save.
5. En uno o dos minutos queda en **https://jefersonacevedo08.github.io**

> La carpeta `.claude/` solo sirve para la vista previa local; puedes borrarla o dejarla, no afecta la página.

## Editar contenido

- **Nuevo paper:** copia un bloque `<article class="pub card">` en `index.html`.
- **Nuevo proyecto:** copia un `<article class="project card">`; `data-cat` puede ser `research`, `vision` o `software`.
- **Noticia:** agrega un `<li>` dentro de `<ol class="timeline">`.
- **Correos:** están en el botón "Email" del inicio y en la sección Contact (busca `mailto:`).
- **Color de acento:** cambia `--accent` en `styles.css` (hay uno para tema claro y otro para oscuro).
