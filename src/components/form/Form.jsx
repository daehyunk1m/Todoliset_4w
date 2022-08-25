import React, {useState} from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux";
//action creator import
import { addTodo } from "../../redux/modules/todos";

const Form = () => {

    const dispatch = useDispatch();
    const [inputTodos, setInputTodos] = useState({title:'', desc:''});

    const addHandler = () => {
        const { title, desc } = inputTodos
        const todo = {
            id: uuidv4(),
            title: title,
            desc : desc,
            isDone: false
        }
    
        if (title === '' || desc === '' ) return
                        
            dispatch(addTodo(todo));
    };

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setInputTodos({...inputTodos, [name]: value});
        //비워지는 것 구현 못함.
    };

    return (
        <StForm>
            <StFormLabel>제목:
                <StFormInput name="title"  onChange={changeHandler}/>
            </StFormLabel>
                
            <StFormLabel>내용:
                <StFormInput name="desc" label="formDesc" onChange={changeHandler}/>
            </StFormLabel>
                
        
            <StFormButton 
                disabled={!inputTodos.title || !inputTodos.desc}
                onClick={addHandler}
            >추가하기</StFormButton>
        </StForm>
    )
    
}

export default Form;

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
    /* gap: 20px; */
`

const StFormLabel = styled.label`
    width: fit-content;
    
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
`

const StFormInput = styled.input `
width: 20vw;
height: 4vh;
border: 1.6px solid black;
border-radius: 8px;
margin-left: 10px;
`

const StFormButton = styled.button `
    background-color: rgb(246, 252, 144);
    padding: 1.2vh 3.5vw;
    border: 1.6px solid black;
    border-radius: 8px;

    /* display: flex; */
    /* justify-content: right; */

    font-size: 1rem;

    &:hover{
        background-color: black;
        color: white;
        font-weight: bold;
    }
`