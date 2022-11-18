let CreateBlog = () => {
    return (<div className="modal-create-blog" id="modal-create-blog">
        <article>
            <span>Add new Blog</span>
            <div className="form-group">
                <label fprhtml="fileField" className="attachment">
                    <div className="row btn-file">
                        <div className="btn-file__preview"></div>
                        <div className="btn-file__actions">
                            <div className="btn-file__actions__item col-xs-12 text-center">
                                <div className="btn-file__actions__item--shadow">
                                    <i className="fa fa-plus fa-lg fa-fw" aria-hidden="true"></i>
                                    <div className="visible-xs-block"></div>
                                    Select file
                                </div>
                            </div>
                        </div>
                    </div>
                    <input name="file" type="file" id="fileField" />
                </label>
            </div>
            <section>
                <article className="left">
                    <div className="form-group">
                        <span>Blog title</span>
                        <input placeholder="Blog name" />
                    </div>
                    <div className="form-group">
                        <span>Publisher name</span>
                        <input placeholder="Ex. Momen M. Reyad Sisalem" />
                    </div>
                    <div className="form-group">
                        <span>Publisher name</span>
                        <select>
                            <option value="">Development</option>
                        </select>
                    </div>
                    <button id="cancle">cancle</button>
                </article>
                <article className="right">
                    <div className="form-group">
                        <span>Description</span>
                        <textarea placeholder="Description"></textarea>
                    </div>
                    <button className="create">Done</button>
                </article>
            </section>
        </article>
    </div>);
}
export default CreateBlog