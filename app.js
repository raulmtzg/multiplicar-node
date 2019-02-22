

// requireds Tipos:
// 1. Que son de proyectos propios de node ya existen, x ejemplo: require('fs')
// 2. No son propias de node pero que se instalan, x ejemplo require('express')
// 3. Que se crean para el proyecto (creadas por nosotros) se identifican por tener la siguiente sintaxis: require('./miFuncion')


const argv = require('yargs')
                    .command('listar', 'Imprime en consola la tabla de multiplicar',{
                        base: {
                            demand:true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .command('crear', 'Crear en archivo la tabla de multiplicar',{
                        base: {
                            demand:true,
                            alias: 'b'
                        },
                        limite: {
                            alias: 'l',
                            default: 10
                        }
                    })
                    .help()
                    .argv;

const colors = require('colors');

//Destructuracion es cuando despues de un let o const van llaves
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch( comando){
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( archivo => console.log(`Archivo creado: ${ colors.green(archivo) }`))
        .catch( e => console.log(e));
    break;

    default:
        console.log('comando no reconocido');

}




//let argv2 = process.argv;

//console.log('Limite',argv.limite);


// let parametro = argv[2];
// let base = parametro.split('=')[1];



