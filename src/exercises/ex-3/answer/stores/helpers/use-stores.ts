import {useContext} from "react";
import {StoreContext} from "./store-context";
import RootStore from "../root-store";

export const useStores = () => {
    return useContext<RootStore>(StoreContext);
};
