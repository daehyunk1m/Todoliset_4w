import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
    const state = useSelector((module) => (module.todos.todos))[0];
    const navigate = useNavigate();
    const param = useParams();

    console.log(state.title);
    // console.log(state[0].title);
    // console.log(param);

    return (
        <StDetailWrap>
            <StDetailBox>
                <StDetailHeader>
                    <div>
                        Id: {param.id}
                    </div>
                    <StDetailBtn onClick={() => {
                        navigate(-1)
                    }}>이전으로</StDetailBtn>
                </StDetailHeader>
                
                <StContent>
                    <h2>{state.title}</h2>
                    <br/>
                    <p>{state.desc}</p>
                </StContent>
            </StDetailBox>
        </StDetailWrap>
        
    )
}

export default Detail;

const StDetailWrap = styled.div`
    height: 100vh;
    width: 100vw;
    
    display: flex;
    align-items: center;
    justify-content: center;
`

const StDetailBox = styled.div`
    height: 50vh;
    width: 50vw;
    /* padding: 10px; */
    border: 0.5px solid gray;
    border-radius: 10px;
    background-color: #ede7e2;

    margin: auto;
`
const StDetailHeader = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px 18px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StDetailBtn = styled.button`
    font-size: 1.2rem;
    width: 100px;
    height: 30px;
    padding: 0px 10px;
    
    color: black;
    background-color: rgb(246, 252, 144);
    border: 1.5px solid black;
    
    border-radius: 50px;

    &:hover{
        font-weight: bold;
        background-color: black;
        color: white;
    }
`
const StContent = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 0px 40px;

    font-size: 1.4rem;
`