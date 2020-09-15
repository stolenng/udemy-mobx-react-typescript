import React from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import {useStores} from "./stores/helpers/use-stores";
import {Views} from "./stores/ui/global-view";
import {TodoList} from "./components/TodoList";
import {UserList} from "./components/UserList";

function App() {
    const {uiStores: {globalView}} = useStores();

    const getView = () => {
      if (globalView.currentView === Views.Todos) {
          return <TodoList />;
      }

      if (globalView.currentView === Views.Users) {
          return <UserList />;
      }
    };

    return (
        <div className="App">
            <div className="navbar">
                <button onClick={() => globalView.setView(Views.Todos)}>Todos</button>
                <button onClick={() => globalView.setView(Views.Users)}>Users</button>
            </div>
            {getView()}
        </div>
    );
}

export default observer(App);
