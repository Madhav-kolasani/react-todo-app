import { useRef, useContext} from "react";
import { RiAddCircleFill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo({ onNewItem }) {
    const todoNameElement = useRef(0);
    const dueDateElement = useRef(0);
    const {addNewItem} = useContext(TodoItemsContext);


    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        dueDateElement.current.value = "";
        todoNameElement.current.value = "";
        addNewItem(todoName, dueDate);
    };
    return (
        <div className="container text-center">
            <form className="row mad-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input
                        type="text"
                        ref={todoNameElement}
                        placeholder="Enter Todo here.."
                    />
                </div>
                <div className="col-4">
                    <input type="date" ref={dueDateElement} />
                </div>
                <div className="col-2">
                    <button
                        type="submit"
                        className="btn btn-success mad-button"
                    >
                        <RiAddCircleFill />
                    </button>
                </div>
            </form>
        </div>
    );
}
export default AddTodo;
