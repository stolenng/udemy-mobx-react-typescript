import {observable} from "mobx";
import RootStore from "../root-store";

export default class GlobalView {
    @observable
    color: string = 'green';

    private rootStore: RootStore;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }
}
