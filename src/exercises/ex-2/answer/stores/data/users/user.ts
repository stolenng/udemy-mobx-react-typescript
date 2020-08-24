import RootStore from "../../root-store";
import {computed, observable} from "mobx";
import Todo from "../todos/todo";

let runningId = 0;

export default class User {
    id = runningId++;

    @observable
    name: string;

    private rootStore: RootStore;

    constructor(name: string, rootStore: RootStore) {
        this.name = name;
        this.rootStore = rootStore;
    }

    @computed
    get todos(): Todo[] {
        return this.rootStore.dataStores.todoStore.byUser(this.id);
    }
}
