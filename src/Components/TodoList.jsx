import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm'

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem('todos'))
  return !data ? [] : data
}

function TodoList() {

  const [todos, setTodos] = useState(getInitialData)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));

  }, [todos])

  const removeTodo = (id) => {
    setTodos(prev => {
      return prev.filter(item => item.id !== id)

    })
  }
  const toggleTodo = (id) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo;
        }
      })
    })
  }

  const addTodo = (text) => {
    setTodos((prev) => {
      return [...prev, { text: text, id: crypto.randomUUID(), completed: false }]
    })
  }
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDelete={removeTodo} toggle={() => toggleTodo(todo.id)} />)}
      <TodoForm add={addTodo} />
    </List>
  );
}

export default TodoList
