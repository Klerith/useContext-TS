// import { useContext } from 'react';
import { Todo } from '../interfaces/interfaces'
// import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext( TodoContext )
    const { toggleTodo } = useTodos();

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
            onDoubleClick={ () => toggleTodo( todo.id ) }>
           { todo.desc } 
        </li>
    )
}
