import { NavLink, Outlet } from "react-router-dom";
import { FaAddressBook, FaHome, FaRegListAlt, FaUser } from "react-icons/fa";

export const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul style={{ color: "white", fontWeight: "bold" }}>
                            <li>
                                <NavLink to="/admin/users"><FaUser />users</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/contacts"><FaAddressBook /> contacts</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/services"><FaRegListAlt />services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"><FaHome />Home</NavLink>
                            </li>

                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}