import {action, observable, reaction} from "mobx";

let runningId = 0;

export default class Todo {
    id: number;

    userId: number;

    @observable
    name: string;
    @observable
    isCompleted: boolean = false;

    private readonly disposer: () => void;

    constructor(name: string, userId: number) {
        this.id = runningId++;
        this.name = name;
        this.userId = userId;

        this.disposer = reaction(
            () => this.isCompleted,
            () => console.log(`${this.id}-Todo: ${this.name} changed to ${this.isCompleted ? 'Done' : 'Incomplete'}`)
        );
    }

    @action
    toggleTodo() {
        this.isCompleted = !this.isCompleted;
    }

    @action
    updateName(name: string) {
        this.name = name;
    }

    dispose() {
        this.disposer();
    }
}
