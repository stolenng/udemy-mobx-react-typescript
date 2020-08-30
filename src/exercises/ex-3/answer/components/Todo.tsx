import React, {FunctionComponent, useState} from 'react';
import {useObserver} from "mobx-react-lite";
import Todo from "../stores/data/todos/todo";

interface Props {
    todo: Todo;
}

export const TodoComponent: FunctionComponent<Props> = ({todo}) => {
    const [text, setText] = useState('');
    const [editMode, setEditMode] = useState(false);

    return useObserver(() => {
        return (
            <>
                {
                    editMode ? <input type="text" value={text} onChange={e => setText(e.target.value)}/> :
                        <div>{todo.name}- ${todo.userId}</div>
                }
                {
                    editMode ? <button onClick={() => {
                            todo.updateName(text);
                            setEditMode(false);
                        }}>Save</button> :
                        <button onClick={() => setEditMode(true)}>Edit</button>

                }
                <button onClick={() => todo.remove()}>Remove</button>
                <button onClick={() => todo.toggleTodo()}>Toggle TOdo</button>
            </>
        )
    });
};
