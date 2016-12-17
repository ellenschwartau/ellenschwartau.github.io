// --
// Entry point for the client
// --
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout/Layout.jsx'

ReactDOM.render(
    <Layout>
        <Home />
    </Layout>
    , document.getElementById('app')
);
