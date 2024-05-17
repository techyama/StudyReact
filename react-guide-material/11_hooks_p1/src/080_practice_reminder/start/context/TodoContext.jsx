import { createContext, useContext, useReducer } from "react";


const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
    {
      id: 1,
      content: "店予約する",
      editing: false
    },
    {
      id: 2,
      content: "卵買う",
      editing: false
    },
    {
      id: 3,
      content: "郵便出す",
      editing: false
    }
];

const todoReducer = (todos, { type, todo }) => {
    switch (type) {
        case "add": {
            return { ...todos, todo };
        }
        case "delete": {
            return todos.filter((beforeTodo) => beforeTodo.id !== todo.id);
        }
        case "update": {
            return todos.map( (beforeTodo) => beforeTodo.id === todo.id ? {...beforeTodo, ...todo} : { ...beforeTodo} );
        }
        default:
          throw new Error("operator is invalid");
    }
}


const TodoProvider = ({ children }) => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, todosList);
    
    return (
        <TodoContext.Provider value={todos}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
};

const useTodo = () => useContext(TodoContext);

const useTodoDispatch = () => useContext(TodoDispatchContext);


export { TodoProvider, useTodo, useTodoDispatch };