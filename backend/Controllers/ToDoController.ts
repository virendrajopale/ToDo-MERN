import {Request,Response} from 'express'
import Todo from '../Models/TodoModel'
//new todo
export const createToDo=async(req:Request,res:Response):Promise<void>=>{
    const {task,completed}=req.body
    try{
        const newTask=await Todo.create({task,completed});
        res.status(201).json({
            success:true,
            newTask
        })
    }catch(err){
        res.status(400).json({ error: 'Server error' })
    }
}
//all todo
export const getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
      const todos = await Todo.find({});
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
//update todo
export  const  updateTodo=async(req: Request, res: Response): Promise<void> =>{
  const { id } = req.params;
  const { task, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task, completed });
    if (!updatedTodo) {
      res.status(404).json({ message: 'Todo not found' });
      return;
    }
    res.status(200).json(
      {updatedTodo}
      );
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}
  export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    
    try {
      const deletedTodo = await Todo.findByIdAndDelete(id);
      if (!deletedTodo) {
        res.status(404).json({ message: 'Todo not found' });
        return;
      }
      res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };