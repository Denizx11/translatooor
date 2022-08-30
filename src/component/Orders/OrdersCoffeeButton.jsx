const OrdersCoffeeButton = ({letter}) => {
    const imgLetter ="/individual_signs/" + letter + ".png";
    return(
         <img src={imgLetter} alt={letter+".png"}width="55"/>
    )
}

export default OrdersCoffeeButton