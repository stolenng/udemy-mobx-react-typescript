import {action, observable, reaction} from "mobx";
import TodoStore from "./todo-store";
import {setter} from "mobx-easy";

let runningId = 0;

interface Todo {
    updateName: (name: string) => void;
}

class Todo {
    id: number;
    userId: number;
    @setter('updateName')
    @observable
    name: string;
    @observable
    isCompleted: boolean = false;

    private readonly disposer: () => void;
    private store: TodoStore;

    constructor(name: string, userId: number, store: TodoStore) {
        this.store = store;
        this.id = runningId++;
        this.name = name;
        this.userId = userId;

        this.disposer = reaction(
            () => this.isCompleted,
            () => console.log(`${this.id}-Todo: ${this.name} changed to ${this.isCompleted ? 'Done' : 'Incomplete'}`)
        );
    }

    remove() {
        this.store.removeTodo(this.name);
    }

    @action
    toggleTodo() {
        this.isCompleted = !this.isCompleted;
    }

    dispose() {
        this.disposer();
    }
}

export default Todo;
