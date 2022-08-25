import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { onRemove, onChange } from "../../redux/modules/todos";
import { useNavigate } from "react-router-dom";


const Todo = ({id, title, desc, isDone}) => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onClickRemove = () => {
        dispatch(onRemove(id))
    };

    const onClickChange = () => {
        dispatch(onChange(id))
    };

    // console.log(title, desc)
    
    return (
        <StTodo>
            <StTodoTxtWrap>
                <div>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <StLink onClick={() => {navigate(`/detail/${id}`)}}>
                    상세보기
                </StLink>
            </StTodoTxtWrap>
            
            <StTodoBtnWrap>
                <StTodoBtn onClick={onClickRemove} Color='rgb(252, 123, 112)'>삭제하기</StTodoBtn>
                {isDone === false
                    ?<StTodoBtn onClick={onClickChange} Color='black'>완료</StTodoBtn>
                    :<StTodoBtn onClick={onClickChange} Color='black'>취소</StTodoBtn>
                }
            </StTodoBtnWrap>
        </StTodo>
    )
}

export default Todo;

const StTodo  = styled.div`
    width: 320px;
    height: 200px;
    background-color: white;
    border: 2px solid black;
    border-radius: 15px;
    margin: 10px;
`

const StTodoTxtWrap  = styled.div`
    width: 300px;
    height: 120px;
    margin: 10px 20px 10px 20px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    
`

const StLink = styled.button`
    min-width: fit-content;
    height: 25px;
    margin: 10px 15px;
    padding: 0px 10px;

    background-color: rgb(246, 252, 144);
    border: 1.6px solid black;
    border-radius: 50px;

    font-size: 0.8em;
    color: black;
    /* text-decoration: none; */

    &:hover {
        background-color: black;
        font-weight: bold;
        color: white;
    }
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