import {action, autorun, computed, observable} from "mobx";
import RootStore from "../root-store";
import {getRoot} from "mobx-easy";

export enum Views {
    Todos,
    Users
}

export default class GlobalView {

    @observable
    currentView: Views = Views.Todos;

    constructor() {

        autorun(() => {
           console.log(this.stats);
        });
    }

    @action
    setView(view: Views) {
        this.currentView = view;
    }

    @computed
    get stats() {
        const rootStore = getRoot<RootStore>();

        return `
            User Names: ${rootStore.dataStores.usersStore.users.map(user => user.name)},
            Total Todos: ${rootStore.dataStores.todoStore.todoList.length}
        `;
    }
}
