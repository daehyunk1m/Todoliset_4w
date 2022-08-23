import React, {useState} from "react";
import styled from "styled-components";


const StForm = styled.div `
    background-color: #ddd;
    height: 14vh;
    padding: 0px 60px;

    border-radius: 15px;

    font-size: 1.2rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const StFormButton = styled.button `
    background-color: rgb(246, 252, 144);
    padding: 1.2vh 3.5vw;
    border: 1.6px solid black;
    border-radius: 8px;

    font-size: 1rem;

    &:hover{
        background-color: black;
        color: white;
        font-weight: bold;
    }

    
    /* display: flex;
    align-items: center;
    justify-content: right; */
`

const StFormInput = styled.input `
width: 20vw;
height: 4vh;
border: 1.6px solid black;
border-radius: 8px;

/* display: flex;
align-items: center;
justify-content: left; */
`


const Form = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    return (
        <StForm>
            제목<StFormInput type='text' value={title} onChange={(event)=>setTitle(event.target.value)}/>
            내용<StFormInput type='text' value={desc} onChange={(event)=>setDesc(event.target.value)}/>
            <StFormButton onClick={() => {
                if (title !== '' && desc !== '' ){
                    addTodo(title, desc)
                    setTitle('');
                    setDesc('');
                }
            }}>추가하기</StFormButton>
        </StForm>
    )
}

export default Form;