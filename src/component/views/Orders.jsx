import { useState } from "react"
import { orderAdd } from "../../api/order"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import withAuth from "../../hoc/withAuth"
import { storageSave } from "../../utils/storage"
import OrderForm from "../Orders/OrderForm"
import OrdersCoffeeButton from "../Orders/OrdersCoffeeButton"
import OrdersSummary from "../Orders/OrdersSummary"

const COFFEES = [
    {
        id:1,
        name: "Americano",
        image: "img/americano.png"
    },
    {
        id:2,
        name: "Cappuccino",
        image: "img/cappuccino.png"
    },
    {
        id:3,
        name: "Latte",
        image: "img/latte.png"
    },
    {
        id:4,
        name: "Espresso",
        image: "img/espresso.png"
    }
]

const Orders = () => {

    const [coffee, setCoffee] = useState(null)
    
    const { user, setUser } = useUser()
    

    const handleCoffeeClicked = (coffeeId) =>{
        setCoffee(COFFEES.find(coffee => coffee.id === coffeeId))

    }

    const handleOrderClicked = async (notes) =>{
        if(!coffee){
            alert ("Please select a coffee first")
            return
        }

        const order = (coffee.name + ' ' + notes).trim()
        
        const [error, updatedUser] = await orderAdd(user,order)

        if(error !== null){
            return
        }

        //Keep UI state and server  state in
        storageSave(STORAGE_KEY_USER, updatedUser)
        //update context state
        setUser(updatedUser)

        console.log("Error", error);
        console.log("updated User", updatedUser);
    }

    const availableCoffees = COFFEES.map(coffee =>{
        return <OrdersCoffeeButton 
                    key={ coffee.id }
                    coffee={coffee}
                    onSelect={ handleCoffeeClicked }/>

    })

    return (
        <>
            <h1>Orders</h1>
            <section id="coffee-options">
                {availableCoffees}
            </section>
            <section id="order-notes">
                <OrderForm onOrder={handleOrderClicked}/>
            </section>

            { coffee &&  <OrdersSummary coffee = {coffee}/>}
        </>

    )
}

export default withAuth(Orders)