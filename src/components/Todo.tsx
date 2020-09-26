import React, {FunctionComponent, useState} from 'react';
import Todo from "../stores/data/todos/todo";
import {observer} from "mobx-react-lite";

interface Props {
    todo: Todo;
}

export const TodoComponent: FunctionComponent<Props> = observer(({todo}) => {
    const [text, setText] = useState('');
    const [isEditing, setEditing] = useState(false);

    const updateTodo = () => {
        todo.updateName(text);
        setEditing(false);
        setText('');
    }

    return (
        <li className='list-group-item'>
            {
                isEditing ?
                    <input value={text} type="text" onChange={e => setText(e.target.value)}/>
                    :
                    <span>{`Name: ${todo.name} - UserId: ${todo.userId}`}</span>
            }
            {
                isEditing ?
                    <button onClick={updateTodo} className="btn btn-danger">Save</button>
                    :
                    <button onClick={() => setEditing(true)} className="btn btn-info float-right">Edit</button>

            }
            {
                isEditing ? null : <button className="btn float-right btn-danger" onClick={() => todo.remove()}>Delete</button>
            }
            {isEditing ? null :             <button onClick={() => todo.toggleTodo()} className="btn btn-primary float-right">Toggle</button>
            }
        </li>
    )
});