import { useDispatch, useSelector } from "react-redux";
import { categoriesAction } from "../../redux/categories-slice";

let CreateCategory = () => {
    let categories = useSelector((state) => state.categories.data);
    let dispatch = useDispatch();

    let closeModel = () => {
        alert('test')
        // dispatch(categoriesAction.disableModel(categories))

    }
    return (<div className="modal-add" id="modal-add">
        <section>
            <span>Add new Category</span>
            <p>category Name</p>
            <input type="text" placeholder="Ex:  Development" />
            <div>
                <button onClick={closeModel}>Cancel</button>
                <button >Delete</button>
            </div>
        </section>
    </div>);
}
export default CreateCategory