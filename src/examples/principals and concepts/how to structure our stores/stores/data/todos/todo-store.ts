import {observable} from "mobx";
import RootStore from "../../root-store";
import Todo from "./todo";

export default class TodoStore {
    @observable
    collection: Todo[] = [];

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}
