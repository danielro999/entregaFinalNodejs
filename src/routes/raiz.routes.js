import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
      const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Entrega Final - Curso Node.js</title>
    </head>
    <body>
        <h1>Bienvenido al espacio de entrega final del curso Node.js</h1>
    </body>
    </html>
  `;

  res.send(htmlContent);
});


export default router;