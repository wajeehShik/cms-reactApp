import { Fragment } from "react"
import { useSelector } from "react-redux";
import CategoryItem from "../../components/dashborad/CategoryItem";
import CreateCategory from "../../components/modal/CreateCategory";

import "../../resources/dashborad/css/category.css"
let Category = () => {
    let createCategory = useSelector((state) => state.categories.showModel)
    return (
        <Fragment>


            <span>All Categories</span>
            <div className="all-category">
                <CategoryItem color="green" />
                <CategoryItem color="orange" />


                <section className="create-new" id="create-new">
                    <i className="fas fa-plus"></i>
                    <span>Create new category</span>
                </section>
            </div>


            {createCategory && <CreateCategory />}
        </Fragment>
    )
}
export default Category;