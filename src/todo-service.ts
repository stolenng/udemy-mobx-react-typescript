export default class TodoService {
    async addTodo() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Todo Added!');
    }

    async removeTodo() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Todo Removed!');
    }
}
