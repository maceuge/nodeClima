const axios = require('axios');
const color = require('colors');

const url = 'https://maps.googleapis.com/maps/api/geocode/json';
const apikey = 'AIzaSyAa3jcKGuXqr9D4QpjUyodFOJc94sYJSfk';

let getPlaceLatLng = async(direccion) => {
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`${ url }?address=${ encodeUrl }&key=${ apikey }`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No existe el resultado para la ciudad "${ color.bgYellow(direccion) }"`.red);
    }

    let result = resp.data.results[0];
    let location = result.geometry.location;

    return {
        direccion: result.formatted_address,
        lat: location.lat,
        lng: location.lng
    };
};

module.exports = {
    getPlaceLatLng
}