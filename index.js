const express = require('express');
const app = express();
const jimp = require('jimp');
const { v4 } = require('uuid');
const fs = require('fs');

app.listen (3000, () => console.log("Servidor expres activo https://localhost:3000"));

// Los estilos del HTML deben ser definidos por el archivo CSS alojado en el servidor.

app.use('/css', express.static(`${__dirname}/assets/css/`));
app.use('/images', express.static(`${__dirname}/assets/img/`));

// El servidor debe disponibilizar una ruta raíz que devuelva un HTML con el formulario para el ingreso de la URL de la imagen a tratar.

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});

