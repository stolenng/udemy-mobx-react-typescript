import {StoreContext} from "./store-context";
import {useContext} from "react";
import RootStore from "../../../exercises/ex-2/answer/stores/root-store";

export const useStore = (): RootStore => {
    const rootStore = useContext(StoreContext);

    return rootStore;
};
