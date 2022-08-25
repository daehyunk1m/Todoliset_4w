//main
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "../todo/Todo";

    
const List = () => {
    const todoBox = useSelector((module) => module.todos.todos);

    //filter
    const workingTodo = todoBox.filter((todo) => !todo.isDone);
    const doneTodo = todoBox.filter((todo) => todo.isDone);

    return (
        <div>
            <StListH2>Working...🔥</StListH2>
            <StListWrap>
                {workingTodo.map((todo) => {
                    return <Todo key={todo.id} {...todo}/>
                })}
            </StListWrap>
            
            <StListH2>Done..🎉</StListH2>
            <StListWrap>
                {doneTodo.map((todo) => {
                    return <Todo key={todo.id} {...todo}/>
                })}
            </StListWrap>
            
            
        </div>
    )
}

export default List;

const StListH2 = styled.h2`
    margin-top: 40px;
`
const StListWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`