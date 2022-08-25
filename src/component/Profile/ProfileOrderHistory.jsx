import { useUser } from "../../context/UserContext"
import ProfileOrderHistoryItem from "./ProfileOrderHistoryItem"

const ProfileOrderHistory = ({orders}) =>{

    const {user} = useUser();

    

    return (
        <section>
            <h4>Your order history </h4>
                { user.orders && user.orders.map(
        (order,index) => <ProfileOrderHistoryItem key={index + '-' + order} item={order}/>)}
        </section>
    )
}
export default ProfileOrderHistory