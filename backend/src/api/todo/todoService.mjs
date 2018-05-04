import Todo from "./todo";

const TodoService = Todo
TodoService.methods(['get', 'post', 'put', 'delete'])
TodoService.updateOptions({new: true, runValidators: true})

export default TodoService