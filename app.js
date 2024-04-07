const express = require('express')
const { mongoConection } = require('./databases/config')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')

mongoConection()

app.use(
    cors({
        origin: '*'
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

const generos = require('./routes/GeneroRoute')
const director = require('./routes/DirectorRouter')
const productora = require('./routes/ProductoraRouter')
const media =  require('./routes/MediaRouter')
const tipo = require('./routes/TipoRouter')
app.use('/api/v1/generos', generos)
app.use('/api/v1/director', director)
app.use('/api/v1/productora', productora)
app.use('/api/v1/tipo', tipo)
app.use('/api/v1/media', media)

app.get("*", (req, res) => {
    return res.status(404).json({
        msj: 'No encontrado',
        status: 404
    })
})

module.exports = app