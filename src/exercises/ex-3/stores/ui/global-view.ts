import {action, autorun, computed, observable} from "mobx";
import RootStore from "../root-store";

export enum Views {
    Todos = 'Todos',
    Users = 'Users'
}

export default class GlobalView {
    private rootStore: RootStore;

    @observable
    currentView: Views = Views.Todos;

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
    }

    @action
    updateView(view: Views) {
        this.currentView = view;
    }
}
