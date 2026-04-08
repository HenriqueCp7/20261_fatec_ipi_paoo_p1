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
        console.log(`--------------------------------`)
        return {lat, long}
    })
    .catch(err => console.log(err))
}

const consultaDeCondicoesClimaticas = async (lat, long) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,apparent_temperature,wind_speed_10m`

    try {
        const res = await axios.get(url)
        
        console.log(`Condicoes Climaticas:\n`);
        console.log(`Temperatura: ${res.data.current.temperature_2m} °C`)
        console.log(`Sencacao Termica: ${res.data.current.apparent_temperature} °C`)
        console.log(`Velocidade do Vento: ${res.data.current.wind_speed_10m} Km/h`)
        console.log(`--------------------------------`)
    } catch (err) {
        console.log(err)
    }
}

consultaDeCoordenadas(`São Paulo`)
.then(coords => consultaDeCondicoesClimaticas(coords.lat, coords.long))