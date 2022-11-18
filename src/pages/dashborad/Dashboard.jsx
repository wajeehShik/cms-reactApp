import { Fragment } from "react"
import { Outlet } from "react-router-dom";
import Header from "../../components/dashborad/Header"

import "../../resources/dashborad/css/style.css"
import Sidebar from "../../components/dashborad/Sidebar"


let Dashboard = () => {
    return (
        <Fragment>
            <div className="container-dashborad">
                <Sidebar />

                <div className="content">
                    <Header />
                    <Outlet />

                </div>
            </div>
            <div class="modal-add" id="modal-add">
                <section>
                    <span>Add new Category</span>
                    <p>category Name</p>
                    <input type="text" placeholder="Ex:  Development" />
                    <div>
                        <button id="cancleDelete">Cancel</button>
                        <button id="delete">Delete</button>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default Dashboard