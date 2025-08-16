import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItem = ({ todoName, date}) => {
    const {deleteItem} = useContext(TodoItemsContext)
    return (
        <div className="container ">
            <div className="row mad-row">
                <div className="col-6">{todoName}</div>
                <div className="col-4">{date}</div>
                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-danger mad-button"
                        onClick={() => deleteItem(todoName)}
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default TodoItem;
