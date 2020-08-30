import DataStore from "./data/data-store";
import UiStore from "./ui/ui-store";

export default class RootStore {
    dataStores: DataStore;
    uiStores: UiStore;

    constructor() {
        this.dataStores = new DataStore(this);
        this.uiStores = new UiStore(this);
    }
}
