import React, {useState} from 'react';
import {useStores} from "../stores/helpers/use-stores";
import TodoComponent from "./Todo";
import {observer} from "mobx-react-lite";

const TodoList = () => {
    const {dataStores: {todoStore}} = useStores();
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.length <= 2) {
            alert('too short :/');
            return;
        }

        todoStore.addTodo(text, 999);
        setText('');
    }

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
                    Incomplete Todos({todoStore.incompleteTodos.length}):
                </div>
                <ul className="list-group">
                    {todoStore.incompleteTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
            <div className="card">
                <div className="card-header">
                    Complete Todos({todoStore.completedTodos.length}):
                </div>
                <ul className="list-group">
                    {todoStore.completedTodos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
                </ul>
            </div>
        </div>
    )
};

export default observer(TodoList);