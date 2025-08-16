import { createContext } from "react";

export const TodoItemsContext = createContext({ // we can even provide [] also
    todoItems: "",
    addNewItem: () => {},
    deleteItem: () => {},
});
