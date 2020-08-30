import React, {useState} from 'react';
import {useObserver} from "mobx-react-lite";
import {TodoComponent} from "./Todo";
import {useStores} from "../stores/helpers/use-stores";
import {TodoList} from "./TodoList";

export const UserList = () => {
    const [text, setText] = useState('');
    const {dataStores: {usersStore}} = useStores();
    const [currentUser, setCurrUser] = useState(usersStore.users?.[0]);

    return useObserver(() => {
        return (
            <div>
                <div>
                    <ul>
                        {usersStore.users.map(user => {
                            return (
                                <li>
                                    <span onClick={() => setCurrUser(user)}>{user.name}</span>
                                    <span onClick={() => usersStore.removeUser(user.name)}>Remove</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <TodoList user={currentUser} />
                </div>
                <div style={{marginTop: 50}}>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                    <button onClick={() => {
                        usersStore.addUser(text);
                        setText('');
                    }}>Add User
                    </button>
                </div>
            </div>
        )
    });
};
