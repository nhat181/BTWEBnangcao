
import React, {useState,useContext} from "react";
import { TodoContext } from "../context/TodoContext";
const Addtodo = () =>
{
    const [todotext, setTodotext] = useState('');
    const {addtodo} =  useContext (TodoContext);

    const handlesubmit = (e) =>{ e.preventDefault();
        if(!todotext)return;
        addtodo({id:Date.now(),text:todotext});
        setTodotext('');
    };
    return(
        <form onSubmit={handlesubmit}>
            <input
            type="text"
            value={todotext}
            onChange={(e)=>setTodotext(e.target.value)}
            placeholder="Them Todo moi..."
            />
            <button type="submit">Them</button>

        </form>
    );


};
export default Addtodo