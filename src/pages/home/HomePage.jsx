import { Fragment } from "react";
import '../../resources/home/css/style.css'
import '../../resources/home/css/media.css'
import Nav from "../../components/home/Nav";
import MostRecent from "../../components/home/MostRecent";
import JoinUs from "../../components/home/JoinUs";
let HomePage = () => {
    return (
        <Fragment>
            <Nav />
            <div className="container">
                <section>
                    <span>Most Recent</span>
                    <MostRecent color="alert" />
                    <MostRecent color="alert" />
                    <MostRecent color="alert" />
                    <MostRecent color="alert" />
                </section>
                <section className="trendy">
                    <span>Trendy blogs</span>
                    <MostRecent color="alert-success " />
                    <MostRecent color="alert-success " />
                    <MostRecent color="alert-success " />
                    <MostRecent color="alert-success " />

                </section>
            </div>
            <JoinUs />
        </Fragment>
    );
}
export default HomePage;