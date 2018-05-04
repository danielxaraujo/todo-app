import mongoose from 'mongoose'

mongoose.Promise = Promise
export default mongoose.connect('mongodb://localhost/todo').then(() => {
	console.log('DB is running!')
})