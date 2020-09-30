import GlobalView from "./global-view";

export default class UiStore {
    globalView: GlobalView;

    constructor() {
        this.globalView = new GlobalView();
    }
}
