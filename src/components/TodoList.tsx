import React, {useState} from 'react';
import {useObserver} from "mobx-react-lite";
import {TodoComponent} from "./Todo";
import {useStores} from "../stores/helpers/use-stores";

export const TodoList = () => {
    const [text, setText] = useState('');
    const {dataStores: {todoStore}} = useStores();

    return useObserver(() => {
       return (
           <div>
               <div style={{marginBottom: 150}}>
                   <div>Incomplete</div>
                   {todoStore.incompleteTodos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
               </div>
               <div>
                   <div>Complete</div>
                   {todoStore.completedTodos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
               </div>
               <div style={{marginTop: 50}}>
                   <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                   <button onClick={() => {
                       todoStore.addTodo(text, 999);
                       setText('');
                   }}>Add Todo</button>
               </div>
           </div>
       )
    });
};
