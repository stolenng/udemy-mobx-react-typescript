import DataStore from "./data/data-store";
import UiStore from "./ui/ui-store";

export default class RootStore {
    dataStores: DataStore;
    uiStores: UiStore;

    init() {
        this.dataStores = new DataStore();
        this.uiStores = new UiStore();
    }
}
