import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import { Preview } from '@mui/icons-material';
import TodoForm from './TodoForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Box, Typography } from '@mui/material';

//====GETTING INITIALDATA -[IF DATA IS ONLY AVAIABLE] ====// 
const getinitialData = () => {
       const data = JSON.parse(localStorage.getItem("todos"));
       if (!data) return [];
       return data;
};

export default function TodoList() {
       const [todos, setTodos] = useState(getinitialData());

       //======STOREING IN LOCALSTORAGE ======//
       useEffect(() => {
              localStorage.setItem("todos", JSON.stringify(todos));
       }, [todos]);

       //=========DELETING TODOS ========// 
       const removeTodo = (id) => {
              setTodos((prevTodo) => {
                     return prevTodo.filter((t) => t.id !== id);
              });
       };

       //========TOGGLE / TICK-MARK //USING MAP METHOD======//       
       const toggleTodo = (id) => {
              setTodos((prevTodo) => {
                     return prevTodo.map((todo) => {
                            if (todo.id === id) {
                                   return { ...todo, completed: !todo.completed };
                            } else {
                                   return todo;
                            }
                     });
              });
       };
       //======= ADDING NEW TODOS=======//
       const addTodo = (text) => {
              setTodos((prevTodo) => {
                     return [...prevTodo, { text: text, id: uuidv4(), completed: false }];
              });
       };
       //===== RENDERING THE LIST ======//
       return (
              <Box sx={{
                     display: "flex",
                     justifyContent: "center",
                     textAlign: "center",
                     flexDirection: "column",
                     alignItems: "center",
                     marginTop: "20px",
              }}>


                     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {todos.map(todo => {
                                   return <TodoItem
                                          todo={todo}
                                          key={todo.id}
                                          removeTodo={() => removeTodo(todo.id)}
                                          toggleTodo={() => toggleTodo(todo.id)}
                                   />;
                            })}
                            <TodoForm addTodo={addTodo} />
                     </List>
              </Box>
       );
}




