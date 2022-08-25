import React from "react";
//components
import Layout from "../components/layout/Layout";
import Header from "../components/head/Header";
import Form from '../components/form/Form'
import List from "../components/list/List";

const Todolist = () => {

    return (
        <Layout>
            <Header/>
            <Form/>
            <List/>
        </Layout>
    )
}

export default Todolist;