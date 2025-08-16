import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currTodoItems, action) => {
    let newTodoItems = currTodoItems;
    if (action.type === "NEW_ITEM") {
        newTodoItems = [
            ...currTodoItems,
            {
                name: action.payload.itemName,
                dueDate: action.payload.itemDueDate,
            },
        ];
    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currTodoItems.filter(
            (item) => item.name !== action.payload.itemName
        );
    }
    return newTodoItems; 
};

function App() {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer,[])

    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate,
            },
        };
        dispatchTodoItems(newItemAction);
    };
    const deleteItem = (todoItemName) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                itemName: todoItemName,
            },
        };
        dispatchTodoItems(deleteItemAction);
    };

    return (
        <TodoItemsContext.Provider
            value={{
                todoItems,
                addNewItem,
                deleteItem,
            }}
        >
            <center className="todo-container">
                <h1>Todo App</h1>
                <AddTodo />
                <WelcomeMessage></WelcomeMessage>
                <TodoItems></TodoItems>
            </center>
        </TodoItemsContext.Provider>
    );
}

export default App;
