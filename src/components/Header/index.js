import React from "react";
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

import { Nav } from './styled'

export default function Header() {

    const isLogged = useSelector(state => state.auth.isLoggedIn)

    if (!isLogged || isLogged === false) {
        return (
            <Nav>
                <div></div>
            </Nav>


        )
    }
    return (
        <Nav>

            <div className="links">
                <Link to="/task">
                    Tarefas
                </Link>
                {/* <Link to="/contacts">
                    Contatos
                </Link> */}
            </div>

            <div className="icons">
                <Link to="/dashboard">
                    <FaHome size={23} />
                </Link>
                <Link to="/">
                    <FaUserAlt size={23} />
                </Link>
                <Link to="/teste">
                    <FaSignInAlt size={23} />
                </Link>

            </div>

        </Nav>

    )
}