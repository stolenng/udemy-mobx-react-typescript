import React, {useState} from 'react';
import {useStores} from "../stores/helpers/use-stores";
import {TodoComponent} from "./Todo";
import {useObserver} from "mobx-react-lite";

export const TodoList = () => {
    const {dataStores: {todoStore}} = useStores();
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.length <= 2) {
            alert('too short text :/');
            return;
        }
        
        todoStore.addTodo(text, 999);
        setText('');
    }

    return useObserver(() =>
        <div>
            <div className="input-group mb-3">
                <input value={text} onChange={e => setText(e.target.value)} type="text" className="form-control"
                       placeholder="Add Todo"
                       aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button onClick={addTodo} className="btn btn-outline-secondary" type="button"
                            id="button-addon2">Button
                    </button>
                </div>
            </div>
            <div className="card" style={{marginBottom: '25px'}}>
                <div className="card-header">
                    Incomplete Todos {todoStore.incompleteTodos.length}:
                </div>
                <ul className="list-group">
                    {todoStore.incompleteTodos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
                </ul>
            </div>
            <div className="card" style={{marginBottom: '25px'}}>
                <div className="card-header">
                    Complete Todos {todoStore.completedTodos.length}:
                </div>
                <ul className="list-group">
                    {todoStore.completedTodos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
                </ul>
            </div>
        </div>
    )
};