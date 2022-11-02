import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/home"
import Register from "./screens/auth/register"
import Login from "./screens/auth/login"
import Notes from "./screens/notes/index/index"
import UserEdit from "./screens/users/edit"

import PrivateRoute from "./components/auth/private_route"

function Rotas() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<HomeScreen/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/notes" element={
                        <PrivateRoute redirectTo="/login">
                            <Notes/>
                        </PrivateRoute>      
                    } />
                    <Route path="/users/edit" element={
                        <PrivateRoute redirectTo="/login">
                            <UserEdit/>
                        </PrivateRoute>      
                    } />
                </Routes>
            </Router>
    )
}

export default Rotas