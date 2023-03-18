const express = require('express')

const app = express()
const port = 3333

app.get('/', (request, response) => {
    return response.json({message: `Alô mundo na porta ${port}!`})
})

app.get('/courses', (request, response) => {
    return response.json(["Java", "Node", "React"])
})

app.post("/courses", (request, response) => {
    return response.json(["Java", "Node", "React", "React Native"])
})

app.put("/courses/:id", (request, response) => {
    return response.json(["Javascript", "Node", "React", "React Native"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Javascript", "NodeJS", "React", "React Native"])
})

app.delete("/courses/:id", (request, response) => {
    return response.json(["Javascript", "NodeJS", "React"])
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})