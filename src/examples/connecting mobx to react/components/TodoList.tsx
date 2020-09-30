import React from 'react';
import {useObserver} from "mobx-react-lite";
import {useStores} from "../../../stores/helpers/use-stores";
import {TodoComponent} from "./Todo";

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
