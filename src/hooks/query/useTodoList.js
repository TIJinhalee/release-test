import { useQuery } from "@tanstack/react-query";
import { getAllTodosAPI } from "../../api/TodoAPI";
import { TodoStore } from "../../store/todolist/TodoStore";
import { useEffect } from "react";

export const useTodoList =()=>{
    const { data:todos, isLoading, isError } = useQuery({
        queryKey: ['todos'],
        queryFn: getAllTodosAPI
    });

    const setTodoList = TodoStore((state) => state.setTodos);

    useEffect(() => {
        if(!isLoading && !isError){
            setTodoList(todos);
        }
    }, [todos, setTodoList]);

    return { todos, isLoading, isError }
}