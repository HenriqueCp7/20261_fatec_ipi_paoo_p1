require('dotenv').config()
const axios = require('axios')

const consultaInfosDaCidade = async (cidade) => {
    const url = `https://pt.wikipedia.org/api/rest_v1/page/summary/${cidade}`

    try {
        const res = await axios.get(url, {headers: {'User-Agent': `a`}})
        console.log(`Definição da Wikipedia:\n`)
        console.log(`Título da página: ${res.data.title}`)
        console.log(`Resumo da cidade: ${res.data.extract}`)
        console.log(`--------------------------------\n`)
    } catch(err) {
        console.log(err)
    }
}

consultaInfosDaCidade(`São Paulo`)