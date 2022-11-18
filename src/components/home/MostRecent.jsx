import { NavLink } from "react-router-dom"
import imageData from "../../resources/home/img/a1.png"
let MostRecent = (props) => {
    //,
    return (<article>
        <section>
            <div>
                <span className={props.color}>Development</span>
                <span className="date">SEPTEMBER 28,2022</span>
            </div>
            <NavLink
                to="/blog" className={isActive =>
                    "nav-link" + (!isActive ? " unselected" : "")
                } >It's Time to Code, Improve Your Coding Skills And Get Jobs</NavLink>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erea.
            </p>
        </section>
        <img src={imageData} alt="" />
    </article>)
}
export default MostRecent