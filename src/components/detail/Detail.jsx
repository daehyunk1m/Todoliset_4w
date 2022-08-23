import React from "react";
import styled from "styled-components";

const StDetail = styled.div`
    width: 400px;
    height: 300px;
    padding: 10px;
    border: 0.5px solid gray;

    display: flex;
    align-items: center;
    justify-content: center;
`
const StDetailHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StDetailBtn = styled.button`
    width: 100px;
    height: 20px;
    border: 0.5px solid gray;
    border-radius: 4px;
`


const Detail = ({todo}) => {

    return (
        <StDetail>
            <StDetailHeader>
                {todo.id}
                <StDetailBtn>이전으로</StDetailBtn>
            </StDetailHeader>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
        </StDetail>        
    )
}

export default Detail;