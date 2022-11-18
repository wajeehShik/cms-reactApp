import { Fragment } from "react";
import NotificationItem from "../../components/dashborad/NotificationItem";
import "../../resources/dashborad/css/notifications.css"


let Notfications = () => {
    return (<Fragment>

        <span>Notifications</span>
        <p>Recent Notification</p>

        <section className="notifiactions">
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />
            <NotificationItem />

            <button>Load More</button>
        </section>


    </Fragment>)
}
export default Notfications;