import {action, observable} from "mobx";

export enum Views {
    Todos = 'Todos',
    Users = 'Users'
}

export default class GlobalView {
    @observable
    currentView: Views = Views.Todos;

    @action
    updateView(view: Views) {
        this.currentView = view;
    }
}
