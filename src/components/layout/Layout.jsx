import React from "react";
import styled from "styled-components";

import Head from "../head/Head";
import Form from "../form/Form";
import List from "../list/List";

const StLayout = styled.div`
    max-width: 1200px;
    min-width: 800px;
    height: 100vh;
    margin: auto;
    padding: 0px 80px;

    background-color: #ede7e2;
`

const Layout = ({todos, onChange, onRemove, addTodo}) => {
    return (
        <StLayout>
            <Head/>
            <Form addTodo={addTodo}/>
            <List todos={todos} onChange={onChange} onRemove={onRemove}/>
        </StLayout>
    )
}

export default Layout;