import TodoStore from "./todos/todo-store";
import UsersStore from "./users/users-store";

export default class DataStore {
    todoStore: TodoStore;
    usersStore: UsersStore;

    constructor() {
        this.todoStore = new TodoStore();
        this.usersStore = new UsersStore();
    }
}
