import { useState } from "react"
import { orderAdd } from "../../api/order"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import { storageSave } from "../../utils/storage"
import OrderForm from "../Orders/OrderForm"
import OrdersSummary from "../Orders/OrdersSummary"

const Orders = (prop) => {

    const { user, setUser } = useUser()

    const [theWord, setTheWord] = useState();


    const handleOrderClicked = async (word) => {
        if (!word) {
            alert("Please write something")
            return
        }
        const [error, updatedUser] = await orderAdd(user, word.orderNotes.trim())
        console.log( word.orderNotes," orders.jsx");
        setTheWord(word.orderNotes);
        
        if (error !== null) {
            return
        }
        console.log(updatedUser);
        
        //Keep UI state and server  state in
        storageSave("user", updatedUser)
        //update context state
        setUser(updatedUser)

        console.log("Error", error);
        console.log("updated User", updatedUser);
    }
    
        console.log(user.translations + " translations");
    return (
        <>
            <section>
                <h1>Translate</h1>&nbsp;
                <OrderForm
                    onOrder={handleOrderClicked}
                ></OrderForm>
            </section>&nbsp;
            <section>
            <p>Translation: </p>&nbsp;
            {theWord !== ""  &&(
                <OrdersSummary words={ theWord} />//user.translations[user.translations.length-1]}/>
            )}
                {theWord === "" &&(
                <OrdersSummary words={"hello"}/>)}
            </section>&nbsp;

        </>
    )
    
    
}

export default withAuth(Orders)