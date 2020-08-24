import {autorun, computed, observable} from "mobx";
import RootStore from "../root-store";

export default class GlobalView {
    @observable
    color: string = 'green';

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore

        autorun(() => {
            console.log(this.stats);
        });
    }

    @computed
    get stats() {
        return `
         Current Users - ${this.rootStore.dataStores.usersStore.collection.map(user => user.name)},
         Total Number Of Todos: ${this.rootStore.dataStores.todoStore.todoList.length}\
         `;
    }
}
