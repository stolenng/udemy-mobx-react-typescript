import {action, observable, reaction} from "mobx";
import RootStore from "../../root-store";
import User from "./user";

export default class UsersStore {
    @observable
    collection: User[] = [];

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;

        reaction(
            () => this.collection.length,
            () => {
                const lastUser = this.collection[this.collection.length-1];

                if (lastUser.todos.length === 0) {
                    this.rootStore.dataStores.todoStore.addTodo('Finish The Course', lastUser.id);
                }
            }
        )
    }

    getUser(name: string) {
        return this.collection.find(user => user.name === name);
    }

    @action
    addUser(name: string) {
        this.collection.push(new User(name, this.rootStore));
    }

    @action
    removeUser(name: string) {
        const userToRemove = this.collection.find(user => user.name === name);

        if (userToRemove) {
            const todosToRemvoe = userToRemove.todos.map(todo => todo.name);
            const indexToRemove = this.collection.indexOf(userToRemove);

            todosToRemvoe.forEach(todoName => this.rootStore.dataStores.todoStore.removeTodo(todoName));

            this.collection.splice(indexToRemove, 1);
        }
    }
}
