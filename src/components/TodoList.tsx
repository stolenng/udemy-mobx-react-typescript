import React from 'react';
import {useObserver} from "mobx-react-lite";
import {TodoComponent} from "./Todo";
import {useStores} from "../stores/helpers/use-stores";

export const TodoList = () => {
    const {dataStores: {todoStore}} = useStores();

    return useObserver(() => {
       return (
           <div>
               <div style={{marginBottom: 150}}>
                   Incomplete
                   {todoStore.incompleteTodos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
               </div>
               <div>
                   Complete
                   {todoStore.completedTodos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}
               </div>
           </div>
       )
    });
};
