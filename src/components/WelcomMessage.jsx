import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import style from "./WelcomeMessage.module.css";
const WelcomeMessage = () => {
    const contextObject = useContext(TodoItemsContext);
    const todoItems = contextObject.todoItems
    return (
        todoItems.length === 0 && (
            <p className={style.welcome}>Enjoy Your Day.</p>
        )
    );
};
export default WelcomeMessage;
