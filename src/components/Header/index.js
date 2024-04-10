import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";

import { Nav } from './styled'

export default function Header() {
    return (
        <Nav>

            <div className="links">
                <Link to="/task">
                    Tarefas
                </Link>
                <Link to="/contacts">
                    Contatos
                </Link>
            </div>

            <div className="icons">
                <Link to="/">
                    <FaHome size={24} />
                </Link>
                <Link to="Login">
                    <FaUserAlt size={24} />
                </Link>
                <Link to="/teste">
                    <FaSignInAlt size={24} />
                </Link>
               
            </div>
            
        </Nav>

    )
}