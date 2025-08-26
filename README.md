# Formulario simple

## Descripción

Aplicación web simple creada con **React** y **Bootstrap** que muestra un formulario con validación básica.  
El usuario debe completar los campos de **Nombre**, **Apellido**, **DNI** y **Email** antes de poder enviar el formulario.  
Si falta algún dato, aparece un **alert** indicando que hay que completar los campos.  
Si todo está correcto, aparece un **alert** confirmando que los datos fueron enviados.

## Deploy

Podés ver la aplicación aquí: [Lista de empleados](https://formsimple-mj.netlify.app/)

# 📂 Estructura de Componentes

- **App.jsx** → Componente raíz, integra `Header` y `Formulario`.  
- **components/Header.jsx** → Muestra el título *"Formulario"*.  
- **components/Formulario.jsx** → Contiene los campos del formulario y la validación.  

## 🚀 Tecnologías utilizadas

- [React](https://react.dev/) → Librería principal para la UI.  
- [Bootstrap](https://getbootstrap.com/) → Framework CSS para el diseño responsivo.  
- [Vite](https://vitejs.dev/) → Bundler rápido para desarrollo.  
