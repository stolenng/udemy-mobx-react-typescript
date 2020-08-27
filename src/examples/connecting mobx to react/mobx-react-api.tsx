import React from 'react';
import {Observer, useObserver, observer} from "mobx-react-lite";
import Todo from "../../exercises/ex-2/answer/stores/data/todos/todo";

// our todo from ex-2 answer
const todo = new Todo('Learn Mobx React', 1);

// everything inside "observer" will trigger re-render - just like a autorun,reaction it's a tracked function
const ObserverHOC = observer(() => {
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

// everything inside "observer" will re-render - just like a autorun,reaction it's a tracked function
const ObserverHook = () => {
    // this won't trigger re render, only what's inside "useObserver"
    console.log(todo.name);
    return useObserver(() =>
        <div>
            {/*Only What's inside "useObserver" will trigger update*/}
            {todo.name}
            <div>
                <button onClick={() => todo.updateName('First Name')}>First Name</button>
                <button onClick={() => todo.updateName('Second Name')}>Second Name</button>
            </div>
        </div>
    )
};

// everything inside "observer" will re-render - just like a autorun ,reaction it's a tracked function
const ObserverComponent = () => {
    // this won't trigger re render, only what's inside "Observer"
    console.log(todo.name);
    return (
        <div>
            {/*This Will not Trigger Re Render*/}
            {todo.name}
            {/*Only What's inside "Observer" Component will trigger update*/}
            <Observer>{() => <span>{todo.name}</span>}</Observer>
            <div>
                <button onClick={() => todo.updateName('First Name')}>First Name</button>
                <button onClick={() => todo.updateName('Second Name')}>Second Name</button>
            </div>
        </div>
    )
};

export {ObserverHOC, ObserverComponent, ObserverHook};
