import React from 'react';
import Todo from "./stores/data/todos/todo";
import {Observer, useObserver, observer} from "mobx-react-lite";

const todo = new Todo('Learn Mobx React', 1);

const TestComponent = observer(() => {
    console.log(todo.name);
    return (
        <div>
            {todo.name}
            <div>
                <button onClick={() => todo.updateName('First Name')}>First Name</button>
                <button onClick={() => todo.updateName('Second Name')}>Second Name</button>
            </div>
        </div>
    )
});

export default TestComponent;
