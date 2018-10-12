const axios = require('axios');
const color = require('colors');

const url = 'https://api.openweathermap.org/data/2.5/weather';
const apikey = '0bd0ed9e60eb91296032838a5154da24';

let getClima = async(lat, lon) => {
    let resp = await axios.get(`${ url }?lat=${ lat }&lon=${ lon }&units=metric&appid=${ apikey }`)
    if (resp.code === '400') {
        throw new Error(`Error: "${ color.bgYellow(resp.message) }"`.red);
    }
    return {
        temp: resp.data.main.temp
    }
};

module.exports = {
    getClima
}