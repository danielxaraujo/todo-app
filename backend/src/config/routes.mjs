import express from 'express';
import TodoService from '../api/todo/todoService';

const configRoutes = (server) => {

	// API Routes
	const router = express.Router()
	server.use('/api', router)

	// TODO Routes
	TodoService.register(router, '/todos')
}

export default configRoutes