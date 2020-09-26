import React, {FunctionComponent, useState} from 'react';
import Todo from "../stores/data/todos/todo";
import {observer} from "mobx-react-lite";

interface Props {
    todo: Todo;
}

const TodoComponent: FunctionComponent<Props> = observer(({todo}) => {
    const [isEditing, setEditing] = useState(false);
    const [text, setText] = useState('');

    const saveTodo = () => {
        if (text.length <= 2) {
            alert('name is too short');
            return;
        }
        todo.updateName(text);
        setEditing(false);
        setText('');
    }

    const todoName = isEditing ? <input type="text" value={text} onChange={e => setText(e.target.value)}/> :
        <span>Name: {todo.name}, UserId: {todo.userId}</span>;

    const editButton = isEditing ?
        <button className="btn btn-primary float-right" onClick={saveTodo}>Save</button> :
        <button onClick={() => setEditing(true)} className="btn btn-info float-right">Edit</button>;

    const toggleTodo = isEditing ? null :
        <button className="btn btn-primary float-right" onClick={() => todo.toggleTodo()}>Toggle Todo</button>;

    const removeTodo = isEditing ? null :
        <button className="float-right btn btn-danger" onClick={() => todo.remove()}> Remove</button>;
    return (
        <li className="list-group-item">
            {todoName}
            {editButton}
            {toggleTodo}
            {removeTodo}
        </li>
    )
});

export default TodoComponent;