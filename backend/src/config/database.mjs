import mongoose from 'mongoose'

mongoose.Promise = global.Promise
export default mongoose.connect('mongodb://localhost/todo').then(db => {
	console.log(`DB is running!`)
})