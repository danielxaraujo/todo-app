import restful from 'node-restful';

const todoSchema = new restful.mongoose.Schema({
    description: { type: String, required: true },
    done: { type: Boolean, required: true, default: false },
    createdAt: { type: Date, default: Date.now }
})

export default restful.model('Todo', todoSchema)