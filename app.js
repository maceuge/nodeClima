const { getPlaceLatLng } = require('./lugar/lugar');
const { getClima } = require('./tiempo/tiempo');
const color = require('colors');
const argv = require('yargs').options({
    descripcion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad para obtener el clima.'
    }
}).argv;

let getClimaByCity = async(direccion) => {
    try {
        let coords = await getPlaceLatLng(direccion);
        let clima = await getClima(coords.lat, coords.lng);
        return `La temperatura actual en ${color.cyan(coords.direccion)} es de ${color.yellow(clima.temp)} C°`;
    } catch (error) {
        return `No se pudo determinar el clima en ${ direccion }! ${error}`;
    }
};

getClimaByCity(argv.descripcion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));


// getPlaceLatLng(argv.descripcion)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));

// getClima(55.755826, 37.6172999)
//     .then(resp => console.log(resp))
//     .catch(err => console.log(err));