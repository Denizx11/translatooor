import { NavLink } from "react-router-dom"
import { useUser } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUser
    return (
        <nav>
            {user !== null&&
                <ul className="nav" >
                    <li >
                        <NavLink to="/orders">Translate</NavLink>
                    </li>&nbsp;
                    <li >
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                </ul>
            }
        </nav>
    )
}

export default Navbar