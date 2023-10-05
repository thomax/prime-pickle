import { fileURLToPath } from 'url'
import path from 'path'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Serve static files from the "dist" directory
app.use(express.static(path.resolve(__dirname, '../dist')))

app.get('/ping', (req, res) => {
    res.json({ result: 'pong' })
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
