import RootStore from "../root-store";
import {wrapRoot} from "mobx-easy";

export const createStore = () => {
  const env = {};

  const rootStore = wrapRoot({
    RootStore: RootStore,
    env: env // will add this in the next lecture
  })

  return {
    rootStore,
    env
  };
};
