# Api Rest en Node.js

## Descripción

API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

1. Clonar el repositorio
2. Instalar dependencias:

```bash
npm install
```

3. Configurar variables de entorno:

```bash
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
```

Luego editar el archivo `.env` con los valores correspondientes para tu entorno.

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

5. Para los metodos POST, PUT, DELETE es necesario loguearse para obtener el token.
   El metodo GET no necesita autorizacion.

## Documentación de la API

### Obtener todos los productos

- **GET** `api/products`
- **Descripción:** Devuelve la lista de todos los productos.
- **Respuesta ejemplo:**

```json
[
  {
    "id": "4u2QlO",
    "cantidad": 8000,
    "precio": 203434,
    "articulo": "carro bebe",
    "categoria": [
      "hogar",
      "maternidad"
    ]
  },
  {
    "id": "4u2QlOPkUgGDEC3IXVK",
    "articulo": "carro bebe",
    "precio": 203434,
    "categoria": [
      "hogar",
      "maternidad"
    ],
    "cantidad": 8000
  },
  {
    "id": "4u2QlOPkUgGDEC3IXVKl",
    "cantidad": 8000,
    "categoria": [
      "hogar",
      "maternidad"
    ],
    "precio": 203434,
    "articulo": "cuna"
  }
]
```

<!-- ### Buscar productos por nombre

- **GET** `/api/products/search?name=palabra`
- **Descripción:** Devuelve los productos cuyo nombre contiene la palabra indicada.
- **Parámetros:**
  - `name` (query, requerido): texto a buscar en el nombre del producto.
- **Ejemplo de uso:** `/api/products/search?name=camiseta`
- **Respuesta ejemplo:**

```json
[{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }]
``` -->

### Obtener producto por ID

- **GET** `api/products/:id`
- **Descripción:** Devuelve un producto específico por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto.
- **Ejemplo de uso:** `api/products/4u2QlO`
- **Respuesta ejemplo:**

```json
{"cantidad":8000,"precio":203434,"articulo":"carro bebe","categoria":["hogar","maternidad"]}
```

### Crear un producto

- **POST** `api/products`
- **Descripción:** Crea un nuevo producto.
- **Body (JSON):**

```json
{
    "cantidad": 56,
    "precio": 4000,
    "articulo": "estufa",
    "categoria": [ "hogar", "climatizacion" ]
  }
```

- **Respuesta ejemplo:**

```json
  {
    "id": "DofZQhu8xm5BMhuhbE11",
    "categoria": [
      "hogar",
      "climatizacion"
    ],
    "precio": 4000,
    "cantidad": 56,
    "articulo": "estufa"
  }
```

### Actualizar un producto (PUT)

- **PUT** `api/products/:id`
- **Descripción:** Actualiza completamente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):**

```json
  {
    "id": "DofZQhu8xm5BMhuhbE11",
    "categoria": [
      "hogar",
      "climatizacion"
    ],
    "precio": 4000,
    "cantidad": 56,
    "articulo": "Producto Actualizado"
  }
```

- **Respuesta ejemplo:**

```json
  {
    "id": "DofZQhu8xm5BMhuhbE11",
    "categoria": [
      "hogar",
      "climatizacion"
    ],
    "precio": 4000,
    "cantidad": 56,
    "articulo": "Producto Actualizado"
  }
```
<!-- 
### Actualizar parcialmente un producto (PATCH)

- **PATCH** `api/products/:id`
- **Descripción:** Actualiza parcialmente un producto existente.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a actualizar.
- **Body (JSON):** Solo los campos que se desean actualizar

```json
{ "price": 600 }
```

- **Respuesta ejemplo:**

```json
{ "id": 1, "name": "Camiseta Deportiva", "price": 600 }
```
 -->
### Eliminar un producto

- **DELETE** `api/products/:id`
- **Descripción:** Elimina un producto por su ID.
- **Parámetros:**
  - `id` (path, requerido): ID del producto a eliminar.
- **Respuesta:** 204 No Content

## Códigos de estado

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `204` - No Content: Recurso eliminado exitosamente
- `400` - Bad Request: Datos de entrada inválidos
- `404` - Not Found: Recurso no encontrado

## Estructura del proyecto

```
src/
├── controllers/
│   └── products.controller.js
├── models/
│   └── products.models.js
└── routes/
    └── products.router.js
```

## Tecnologías utilizadas

- Node.js
- Express.js
- ES6 Modules