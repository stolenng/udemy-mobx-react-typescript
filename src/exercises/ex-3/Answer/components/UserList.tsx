import React, {useState} from 'react';
import {useStores} from "../stores/helpers/use-stores";
import {observer} from "mobx-react-lite";
import TodoList from "./TodoList";

const UserList = () => {
    const {dataStores: {usersStore}} = useStores();
    const [text, setText] = useState('');
    const [currentUser, setCurrentUser] = useState(usersStore.users[0]);

    const addUser = () => {
        if (text.length <= 2) {
            alert('too short :/');
            return;
        }

        usersStore.addUser(text);
        setCurrentUser(usersStore.users[usersStore.users.length-1])
        setText('');
    }

    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="input-group">
                    <input className="form-control" type="text" value={text} onChange={e => setText(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" onClick={addUser}>
                            Add User
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                    {usersStore.users.map(user => (
                        <>
                            <li className={`list-group-item ${currentUser.id === user.id ? 'active' : 'hover'}`} onClick={() => setCurrentUser(user)}>
                                <span>{user.name}</span>
                                <button onClick={() => usersStore.removeUser(user.name)} className="btn btn-danger">Remove</button>
                            </li>
                        </>
                    ))}
                </ul>
            </div>
            <div className="col-sm-8">
                <TodoList user={currentUser} />
            </div>
        </div>
    )
}

export default observer(UserList);