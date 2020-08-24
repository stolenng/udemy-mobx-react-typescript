import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import RootStore from "./examples/principals and concepts/how to structure our stores/stores/root-store";

// current working file
import './fundamentals';
import RootStore from "./stores/root-store";
import User from "./stores/data/users/user";

// examples - use this after each lecture
// import './examples/observable';
// import './examples/actions';
// import './examples/reactions';
// import './examples/computed';

// const rootStore = new RootStore();
// console.log(rootStore);


// exercise -1
// import './exercises/ex-1.txt/exercise-1';

const rootStore = new RootStore();

rootStore.dataStores.usersStore.addUser('Georgy');
rootStore.dataStores.usersStore.addUser('Hen');
rootStore.dataStores.usersStore.addUser('Roni');
rootStore.dataStores.usersStore.addUser('Daniil');

const newUser = rootStore.dataStores.usersStore.getUser('Georgy');

// @ts-ignore
rootStore.dataStores.todoStore.addTodo('Finish The Exercise', newUser.id);
// @ts-ignore
rootStore.dataStores.todoStore.addTodo('OMG', newUser.id);

rootStore.dataStores.usersStore.removeUser('Georgy');

console.log(rootStore);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
