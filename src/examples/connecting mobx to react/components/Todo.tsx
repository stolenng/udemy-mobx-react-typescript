import React, {FunctionComponent} from 'react';
import {useObserver} from "mobx-react-lite";
import Todo from "../../../stores/data/todos/todo";

interface Props {
    todo: Todo;
}

export const TodoComponent: FunctionComponent<Props> = ({todo}) => {
    return useObserver(() => {
        return (
            <>
                <div>{todo.name}- ${todo.userId}</div>
                <button onClick={() => todo.toggleTodo()}>Toggle TOdo</button>
            </>
        )
    });
};
