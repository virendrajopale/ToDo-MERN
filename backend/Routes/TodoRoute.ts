import express,{Router} from 'express';

import { createToDo, deleteTodo, getAllTodos, updateTodo } from '../Controllers/ToDoController';
const toDoRouter:Router=express.Router();

toDoRouter.route('/new').post(createToDo);
toDoRouter.route('/all/todo').get(getAllTodos);
toDoRouter.route('/updatetodo/:id').put(updateTodo);
toDoRouter.route('/deletetodo/:id').delete(deleteTodo);

export default toDoRouter;