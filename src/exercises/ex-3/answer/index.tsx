import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import 'mobx-react-lite/batchingForReactDom';
import {createStore} from "./stores/helpers/create-store";
import {StoreProvider} from "./stores/helpers/store-context";

// examples - use this after each lecture
// import './examples/observable';
// import './examples/actions';
// import './examples/reactions';
// import './examples/computed';

// const rootStore = new RootStore();
// console.log(rootStore);


// exercise -1
// import './exercises/ex-1/answer/answer.ts';

// exercise -2
// import './exercises/ex-2/answer/index.tsx';


const rootStore = createStore();

// create 4 users
rootStore.dataStores.usersStore.addUser('Georgy');
rootStore.dataStores.usersStore.addUser('Student 1');
rootStore.dataStores.usersStore.addUser('Student 2');
rootStore.dataStores.usersStore.addUser('Student 3');

ReactDOM.render(
    <StoreProvider value={rootStore}>
        {/*<App/>*/}
    </StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
