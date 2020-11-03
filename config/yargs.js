const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completada la tarea por hacer'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', descripcion)
    .command('actualizar', 'Actualiza una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {})
    .command('borrar', 'Borrar una tarea por hacer', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}