const OrdersSummary = ({ coffee  }) => {

    return (
        <section>
            <h4>Order Summary</h4>
            <div>
                <img src={coffee.image} alt={coffee.name} width="55" />
            </div>
            <p>You are ordering a {coffee.name}</p>
        </section>
    )

}

export default OrdersSummary
