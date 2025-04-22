📚 Proyecto CRUD de Libros
Este proyecto es una aplicación de consola desarrollada con TypeScript, Node.js y MongoDB, que permite gestionar una colección de libros mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

🚀 Objetivo
Simular el funcionamiento de una pequeña base de datos de libros desde la terminal. Es ideal para practicar conceptos como:

Modelado de datos con Mongoose.

Conexión a MongoDB.

Tipado estático con TypeScript.

Separación de lógica del negocio en capas.

🧠 ¿Cómo está organizado?
index.ts: Es el punto de entrada del programa. Allí se define qué acción ejecutar (crear, leer, actualizar o eliminar un libro).

controllers/logicaNegocio.ts: Contiene la lógica del negocio, incluyendo:

La interfaz del libro.

El esquema de Mongoose.

Las funciones CRUD.

dataBase/connect.ts: Se encarga de conectar a la base de datos MongoDB.

⚙️ ¿Cómo funciona?
Al iniciar el programa, se conecta automáticamente a una base de datos de MongoDB.

Se elige manualmente una acción dentro del código (createBook, getBooks, updateBook, etc.).

Se ejecuta esa acción con los datos correspondientes.

El resultado se muestra por consola.

📦 Requisitos
Tener Node.js y npm instalados.

Tener una instancia de MongoDB corriendo localmente o en la nube.

Configurar el archivo .env con la URI de tu base de datos.

✅ Estado actual
Actualmente el proyecto funciona desde la consola. Las acciones se prueban editando el archivo index.ts para probar cada función de forma manual.