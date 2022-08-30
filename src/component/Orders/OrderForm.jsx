import { useForm } from "react-hook-form"


const OrderForm =({onOrder}) =>{

    
    const {register, handleSubmit} = useForm()

    const onSubmit = (orderNotes) =>{onOrder(orderNotes)}
    
    return(
        <form onSubmit={ handleSubmit(onSubmit) }>
        <fieldset>
            <label htmlFor="orderNotes">Translation </label>
            <input type="text" {...register('orderNotes')}
             placeholder="Hello" />
        </fieldset>
        <button className="btn btn-primary" type="submit">Translate!</button>
        </form>
    )
}
export default OrderForm