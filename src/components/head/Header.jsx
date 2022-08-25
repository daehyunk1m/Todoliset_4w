import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
            <StHead>
                <h2>TODOLIST</h2>
                <p>React</p>
            </StHead>
    )
}

export default Header;

const StHead = styled.div`
    height: 10vh;
    padding: 0px 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;