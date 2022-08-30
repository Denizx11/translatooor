const OrdersCoffeeButton = ({letter}) => {
    let format = /[ `!@#$%^&*()_+\-=\[\]{};1234567890æøå':"\\|,.<>\/?~]/;
    
    if(format.test(letter)) {
        return(
            <img src="" alt="" width="55"/>
         )

    }

    const imgLetter ="/individual_signs/" + letter + ".png";
    return(
         <img src={imgLetter} alt={letter+".png"}width="55"/>
    )
}

export default OrdersCoffeeButton