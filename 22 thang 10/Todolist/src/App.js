import React  from 'react';
import { TodoProvider } from './context/TodoContext';
import Addtodo from './Components/addtodo';
import TodoList from './Components/todolist';

const App = () =>
{
    return(
        <TodoProvider>
 <div>
                <Addtodo/>
                <TodoList/>
            </div>
        </TodoProvider>

        
    );
};
export default App;


