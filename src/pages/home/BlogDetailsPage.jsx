import { Fragment } from "react";
import JoinUs from "../../components/home/JoinUs";
import MostRecent from "../../components/home/MostRecent";
import Nav from "../../components/home/Nav";

let BlogDetailsPage = () => {
    return (

        <Fragment>
            <Nav />
            <div className="container">
                <ul className="predcamp">
                    <li><a href="">All</a></li>
                    <li className="active"><a href="">Develope</a></li>
                    <li><a href="">Design</a></li>
                    <li><a href="">Medical</a></li>
                    <li><a href="">Motion </a></li>
                    <li><a href="">Marketing</a></li>
                    <li><a href="">Accounting</a></li>
                </ul>

                <section>

                    <MostRecent color="alert " />
                    <MostRecent color="alert " />
                    <MostRecent color="alert " />
                    <MostRecent color="alert " />
                    <MostRecent color="alert " />
                    <MostRecent color="alert " />
                </section>


            </div>
            <JoinUs />
        </Fragment>
    )
}
export default BlogDetailsPage;