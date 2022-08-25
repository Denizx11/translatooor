import { useForm } from "react-hook-form"


const OrderForm =({onOrder}) =>{

    const {register, handleSubmit} = useForm()

    const onSubmit = (orderNotes) =>{onOrder(orderNotes)}
    
    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="order-notes">Order Notes: </label>
            <input type="text" {...register('orderNotes')} placeholder="No sugar, extra milk" />
        </fieldset>

        <button type="submit">Order</button>
        </form>
    )
}
export default OrderForm