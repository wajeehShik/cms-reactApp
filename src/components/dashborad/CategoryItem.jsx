let CategoryItem = (props) => {
    //orange,green
    return (<section class={props.color}>
        <div className="info-category">
            <span>Design</span>
            <p>Blog No.</p>
            <div className="time">
                <i className="fa fa-clock"></i>
                <span>23 Blog</span>
            </div>
        </div>
        <i className="fa fa-trash"></i>
    </section>);

}
export default CategoryItem