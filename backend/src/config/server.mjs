/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
import express from 'express';
import bodyParser from 'body-parser';
import allowCors from './cors';

const port = 3001
const app  = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(allowCors)

app.listen(port, () => {
	console.error(`BACKEND is running on port ${port}.`)
})

export default app