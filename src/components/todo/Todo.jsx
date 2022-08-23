import React from "react";
import styled from "styled-components";
import Detail from "../detail/Detail";

const StTodo  = styled.div`
    width: 320px;
    height: 180px;
    background-color: white;
    
    border: 2px solid black;
    border-radius: 15px;

    margin: 10px;

`

const StTodoTxtWrap  = styled.div`
    width: 300px;
    height: 90px;
    /* padding: 0px 18px; */
    margin: 0px 20px 10px 20px;
    /* display: flex;
    align-items: center;
    justify-content: left; */
    
`

const StTodoBtnWrap  = styled.div`
    padding: 0px 24px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StTodoBtn  = styled.button`
    width: 130px;
    height: 40px;

    background-color: transparent;
    border: 2px solid ${(props) => props.Color};
    border-radius: 6px;

    color: black;

    &:hover{
        background-color: ${(props) => props.Color};
        color: white;
        font-weight: bold;
    }
`
// rgb(252, 123, 112)


const Todo = ({todo, onChange, onRemove}) => {
    

    return (
        <StTodo>
            <StTodoTxtWrap>
                {/* <Detail onClick={todo}>상세보기</Detail> */}
                <h2>{todo.title}</h2>
                <p>{todo.desc}</p>
            </StTodoTxtWrap>
            
            <StTodoBtnWrap>
                <StTodoBtn onClick={ () => onRemove(todo.id) } Color='rgb(252, 123, 112)'>삭제하기</StTodoBtn>
                {todo.isDone === false
                    ?<StTodoBtn onClick={ () => onChange(todo.id) } Color='black'>완료</StTodoBtn>
                    :<StTodoBtn onClick={ () => onChange(todo.id) } Color='black'>취소</StTodoBtn>
                }
            </StTodoBtnWrap>
        </StTodo>
    )
}

export default Todo;