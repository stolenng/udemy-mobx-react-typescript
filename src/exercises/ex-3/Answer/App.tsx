import React from 'react';
import './App.css';
import {useStores} from "./stores/helpers/use-stores";
import {Views} from "./stores/ui/global-view";
import TodoList from "./components/TodoList";
import {observer} from "mobx-react-lite";
import UserList from "./components/UserList";

function App() {
    const {uiStores: {globalView}} = useStores();

    const getCurrentView = () => {
        if (globalView.currentView === Views.Todos) {
            return <TodoList />;
        }

        if (globalView.currentView === Views.Users) {
            return <UserList />;
        }

        return null;
    }

    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div style={{flexDirection: 'row'}} className="navbar-nav">
                    <span className={`nav-item ${globalView.currentView === Views.Todos ? 'active' : null}`}>
                        <a className="nav-link" onClick={() => globalView.updateView(Views.Todos)} href="#">{`${Views.Todos}`} View</a>
                    </span>
                    <span style={{marginLeft: '15px'}} className={`nav-item ${globalView.currentView === Views.Users ? 'active' : null}`}>
                        <a className="nav-link" onClick={() => globalView.updateView(Views.Users)} href="#">{`${Views.Users}`} View</a>
                    </span>
                </div>
            </nav>

            {getCurrentView()}
        </div>
    );
}

export default observer(App);
