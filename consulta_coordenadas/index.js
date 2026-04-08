require('dotenv').config()
const axios = require('axios')

const consultaDeCoordenadas = (cidade) => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`

    return axios.get(url)

    .then(res => res.data)
    .then(data => {
        const lat = data.results[0].latitude;
        const long = data.results[0].longitude;
        console.log(`Coordenadas:\n`);
        console.log(`Latitude: ${lat}`);
        console.log(`Longitude: ${long}`);
        console.log(`--------------------------------\n`)
        return {lat, long}
    })
    .catch(err => console.log(err))
}

consultaDeCoordenadas(`São Paulo`)