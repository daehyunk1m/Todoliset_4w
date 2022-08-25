import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todolist from "../pages/todolist";
import Detail from "../pages/detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Todolist/>}/>
                <Route path='detail' element={<Detail/>}/>
                <Route path='detail/:id' element={<Detail/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;