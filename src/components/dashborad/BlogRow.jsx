import { useState } from "react";

let BlogRow = (props) => {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td><span className="orange">Development2</span></td>
            <td>Improve Your Coding Skills And Get Jobs</td>
            <td>Dec 14, 2020</td>
            <td>Ahmed Karim</td>

            <td className="table-icon">
                <i className="fa fa-edit"></i>
                <i className="fa fa-trash openDeleteModal" ></i>
            </td>
        </tr>)
}

export default BlogRow;