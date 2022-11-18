import ntoficationImage from "../../resources/dashborad/image/ntofication.png"
import avatar from "../../resources/dashborad/image/avatar.png"
let NotificationItem = () => {
    return (<article>
        <div className="image">
            <img src={ntoficationImage} className="icon-notifcation" />
            <img src={avatar} className="user-image" />
        </div>
        <div className="data">
            <span>Asmaa H. Madi</span>
            <div>
                <span>Project name</span>
                <span>12h</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
            </p>
        </div>
    </article>)
}
export default NotificationItem