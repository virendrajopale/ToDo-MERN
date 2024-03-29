
import React, { useEffect } from 'react';
import TodoItem from './TodoItem'; 
import { useDispatch, useSelector } from 'react-redux';

import { getTodos } from '../redux/action/todoAction';

function TodoList() {
  const dispatch = useDispatch();
  const { todos} = useSelector(state => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch,todos]);


  return (
    <div className=" flex flex-col gap-5">
      {todos.map((todo )=> (
        <TodoItem key={todo._id} todo={todo} /> 
      ))}
    </div>
  );
}

export default TodoList;
