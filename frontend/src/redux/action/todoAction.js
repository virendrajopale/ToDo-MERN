import {createAsyncThunk} from '@reduxjs/toolkit'
import axios, { Axios } from 'axios'
export const getTodos=createAsyncThunk('getTodos',async(_,{rejectWithValue})=>{

    
    try{
        const todo=await axios.get('/todo/all/todo');
        return todo.data
    }
    catch(err){
        return rejectWithValue(err);
    }
})
export const createTodo=createAsyncThunk('createTodo',async(todoData,{rejectWithValue})=>{
    console.log(todoData);
    
    try{
        const newtodo=await axios.post('/todo/new',todoData)
        return newtodo.data;
    }catch(err){
        return rejectWithValue(err);
    }
})
export const updateTodo=createAsyncThunk('updateTodo',async({id,updata},{rejectWithValue})=>{
    console.log(updata);
    
    try{
        const updatedData=await axios.put(`/todo/updatetodo/${id}`,updata);
        return updatedData.data;

    }
    catch(err){
        return rejectWithValue(err);
    }
})
export const deletetodo=createAsyncThunk('deletetodo',async({id},{rejectWithValue})=>{
    try{
        const deleteData=await axios.delete(`/todo/deletetodo/${id}`)
        return deleteData.message;
    }
    catch(err){
        return rejectWithValue(err);
    }
})