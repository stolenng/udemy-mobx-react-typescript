import {observable} from "mobx";
import RootStore from "../../root-store";

class User {}

export default class UsersStore {
    @observable
    collection: User[] = [];

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}
