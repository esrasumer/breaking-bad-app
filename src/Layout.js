import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <div>
            <nav>
                <Outlet />
                <ul>
                    <li>
                        <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "pink" })} to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Layout;