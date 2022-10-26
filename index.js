require('dotenv').config();
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => [
    res.json({
        success: true,
        message: 'Serviama API'
    })
])

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))