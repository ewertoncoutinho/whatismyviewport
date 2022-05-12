const express = require('express')
const serveStatic = require('serve-static')

const app = express()
const port = 3000

app.use(serveStatic('.', { index: 'index.html' }))
app.listen(port, () => {
	console.log(
		`started server on 0.0.0.0:${port}, url: http://localhost:${port}`
	)
})
