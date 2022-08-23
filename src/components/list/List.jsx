//main
import React from "react";
import styled from "styled-components";

import Todo from "../todo/Todo";

const StListH2 = styled.h2`
    margin-top: 40px;
`
const StListWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const List = ({todos, onChange, onRemove}) => {
    return (
        <div>
            <StListH2>Working...🔥</StListH2>
            <StListWrap>
                {todos.map(todo => todo.isDone === false
                    ? <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                    :null
                    )}
            </StListWrap>
            
            <StListH2>Done..🎉</StListH2>
            <StListWrap>
                {todos.map(todo => todo.isDone === true
                    ? <Todo todo={todo} onChange={onChange} onRemove={onRemove} key={todo.id}/>
                    :null
                    )}    
            </StListWrap>
            
            
        </div>
    )
}

export default List;