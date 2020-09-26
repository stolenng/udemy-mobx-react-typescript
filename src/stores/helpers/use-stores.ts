import {useContext} from "react";
import RootStore from "../../../stores/root-store";
import {StoreContext} from "./store-context";


export const useStores = () => {
    return useContext<RootStore>(StoreContext);
};
