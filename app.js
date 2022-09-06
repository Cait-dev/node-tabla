const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.red, 'creado'.bgMagenta))
    .catch(err => console.log(err));


