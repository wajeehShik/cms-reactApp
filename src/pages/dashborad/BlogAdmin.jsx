import { Fragment, useState } from "react"
import BlogRow from "../../components/dashborad/BlogRow";
import CreateBlog from "../../components/modal/CreateBlog";
import DeleteCategoy from "../../components/modal/DeleteCategoy";
import "../../resources/dashborad/css/index.css"

let BlogAdmin = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShow = () => setShowModal(true);
    return (
        <Fragment>
            <span>Blog</span>
            <div className="search">
                <div className="left">
                    <i className="fa fa-filter"></i>
                    <select>
                        <option value="">Due Date</option>
                        <option value="">Due Date</option>
                        <option value="">Due Date</option>
                        <option value="">Due Date</option>
                    </select >
                    <select>
                        <option value="">category by:Due Date</option>
                        <option value="">category by:Due Date</option>
                        <option value="">category by:Due Date</option>
                        <option value="">category by:Due Date</option>
                    </select>

                    <i className="fa fa-trash"></i>
                </div >
                <button id="showCreateBlogModal" onClick={handleShow}>Create New Blog2</button>
            </div >
            <div className="table-content">
                <table>
                    <thead>
                        <tr>
                            <th><input type="checkbox" /></th>
                            <th>Category</th>
                            <th>Blog Title</th>
                            <th>Due date</th>
                            <th>Publisher</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <BlogRow />
                    </tbody>
                </table>
            </div>
            {/* {deleteModal && <DeleteCategoy />} */}
            {showModal && <CreateBlog />}
        </Fragment >
    )
}
export default BlogAdmin