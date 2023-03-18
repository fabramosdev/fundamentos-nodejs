const express = require('express')

const app = express()
const port = 3333

app.get('/', (request, response) => {
    return response.json({message: `Alô mundo na porta ${3333}!`})
})
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})