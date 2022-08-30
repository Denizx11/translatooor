import { orderClearHistory } from "../../api/order";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";

const ProfileActions = () =>{
    const { user, setUser } = useUser();

    const handleLogoutClick = ( ) =>{
        if(window.confirm('Are you sure?')){
            storageDelete("user")
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () =>{
        if(!window.confirm("Are you sure?\nThis can not be undone!")){
            return
        }

        const [ clearError ] = await orderClearHistory(user.id)

        if(clearError !== null){
            return
        }

        const updatedUser ={
            ...user,
            translations:[],
        };

        storageSave("user", updatedUser)
        setUser(updatedUser)
    }

    return (
        <>
            <li><button className="btn btn-primary" onClick={handleClearHistoryClick}>Clear history</button></li>
            <li><button className="btn btn-primary" onClick={handleLogoutClick}>Logout</button></li>
        </>
    )
}
export default ProfileActions