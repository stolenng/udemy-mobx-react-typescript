import RootStore from "../../../exercises/ex-2/answer/stores/root-store";
import {createContext} from "react";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreContext = StoreContext.Provider;
