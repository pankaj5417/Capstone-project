
import { Link, Outlet } from "react-router-dom"
import crownLogo from "../../assets/crown.svg"
import './navigation.scss'
const Navigation=()=>{
    return (
        <>
        <div className="navigation">

        <div className="">
        <Link className="logo-container" to="/">
            <img src={crownLogo} alt="" />

        </Link>
        </div>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
        <h2>Shop</h2>

        </Link>
        <Link className="nav-link" to="/sign-in">
        <h2>SignIn</h2>

        </Link>
        </div>
        </div>

        <Outlet />
        </>
    )
}
export default Navigation