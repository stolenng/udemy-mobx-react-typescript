import {useContext} from "react";
import RootStore from "../root-store";
import {StoreContext} from "./store-context";

export const useStores = () => {
    return useContext<RootStore>(StoreContext);
};
