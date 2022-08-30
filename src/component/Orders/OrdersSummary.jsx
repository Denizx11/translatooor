import OrdersCoffeeButton from "./OrdersCoffeeButton"

const OrdersSummary = ({ words }) => {
    console.log(words + "orderssummary");
    if(words){
        const TranslateSentenceArray = Array.from(words)
        console.log(words, "ordersummary");
        return (
            <fieldset>
                <div>
                    {TranslateSentenceArray.map((item,index) =>(
                    <OrdersCoffeeButton key={index} letter={item}></OrdersCoffeeButton>))}
                </div>&nbsp;
            </fieldset>
        )

    }
    else{
        return(
            <fieldset>
                <div>
                    Field is empty
                </div>
            </fieldset>
        )
    }

}

export default OrdersSummary
