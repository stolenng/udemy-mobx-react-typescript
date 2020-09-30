import {action, observable} from "mobx";
import User from "./user";
import {getRoot} from "mobx-easy";
import RootStore from "../../root-store";

export default class UsersStore {
    @observable
    users: User[] = [];

    @action
    addUser(name: string) {
        this.users.push(new User(name));
    }

    getUser(name: string) {
        return this.users.find(user => user.name == name) as User;
    }

    @action
    removeUser(name: string) {
        const userToRemove = this.getUser(name);

        if (userToRemove) {
            const rootStore = getRoot<RootStore>();

            userToRemove.todos.forEach(todo => rootStore.dataStores.todoStore.removeTodo(todo.id));
            const userToRemoveIndex = this.users.indexOf(userToRemove);

            this.users.splice(userToRemoveIndex, 1);
        }
    }
}
