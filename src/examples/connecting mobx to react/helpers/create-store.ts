import RootStore from "../../../exercises/ex-2/answer/stores/root-store";

const createStore = () => {
    return {
        rootStore: new RootStore()
    };
};

export {createStore};
