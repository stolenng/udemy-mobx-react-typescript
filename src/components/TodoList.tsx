import React, {FunctionComponent, useState} from 'react';
import {useStores} from "../stores/helpers/use-stores";
import TodoComponent from "./Todo";
import {observer} from "mobx-react-lite";
import User from "../stores/data/users/user";

interface Props {
    user?: User;
}

const TodoList: FunctionComponent<Props> = ({user}) => {
    const {dataStores: {todoStore}} = useStores();
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.length <= 2) {
            alert('too short :/');
            return;
        }

        todoStore.addTodo(text, user ? user.id : 999);
        setText('');
    }

    const completedTodos = user ? user.completedTodos : todoStore.completedTodos;
    const incompleteTodos = user ? user.incompleteTodos : todoStore.incompleteTodos;

    return (
        <div>
            <div className="input-group">
                <input className="form-control" type="text" value={text} onChange={e => setText(e.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={addTodo}>
                        Add Todo
                    </button>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    Incomplete Todos({incompleteTodos.length}):
                </div>
                <ul className="list-group">
                    {incompleteTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
            <div className="card">
                <div className="card-header">
                    Complete Todos({completedTodos.length}):
                </div>
                <ul className="list-group">
                    {completedTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
        </div>
    )
};

export default observer(TodoList);