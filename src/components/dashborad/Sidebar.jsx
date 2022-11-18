import { Fragment } from "react"
import { NavLink } from "react-router-dom"
import avatarImage from "../../resources/dashborad/image/avatar 1.png"

let Sidebar = () => {
    return (
        <Fragment>
            <div className="sidebar">
                <span><span>B</span>logs</span>

                <span className="tool">Admin tools</span>
                <section>
                    <a>
                        <i className="fa-solid fa-eye fa-2x"></i>
                        <span>Overview</span>
                    </a>

                    <NavLink
                        to="/dashborad"
                        className={(props) => props.isActive ? `div active` : `nav-link`} aria-current="page" href="#" end>

                        <div>
                            <i className="fa-solid fa-bars fa-2x"></i>
                            <span>All Blogs</span>
                        </div>

                    </NavLink>
                    <NavLink
                        to="/dashborad/categories"
                        className={(props) => props.isActive ? `div active` : `nav-link`} aria-current="page" href="#" end>

                        <div>
                            <i className="fa fa-compass fa-2x"></i>
                            <span>Categories</span>
                        </div>
                    </NavLink>
                    <a>
                        <i className="fa fa-gear fa-2x"></i>
                        <span>Settings</span>
                    </a>
                </section>
                <span className="line-appove">Insights</span>
                <NavLink
                    to="/dashborad/notfications"
                    className={(props) => props.isActive ? `div active` : `nav-link`} aria-current="page" href="#" end>

                    <div className="notfication">
                        <i className="fa-regular fa-bell fa-2x"></i>
                        <span>Notification</span>
                        <span className="number">2</span>
                    </div>
                </NavLink>
                <div className="user-info">
                    <figure>
                        <img src={avatarImage} />
                    </figure>
                    <div className="info">
                        <span>wajeeh ayube</span>
                        <p>admin</p>
                    </div>
                    <i className="fa-solid fa-right-from-bracket fa-2x"></i>
                </div>
            </div>
        </Fragment>
    )
}
export default Sidebar