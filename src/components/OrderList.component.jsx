import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import OrderCard from './OrderCard.component';


const OrderList = ({ finish, setFinish, Order }) => {
    const [orderList, setOrderList] = useState([...Order])

    return (
        <Grid container spacing={3}>
            {orderList.map((data) => {
                return(
                    <OrderCard 
                        key={data.id} 
                        OrderID={data.id} 
                        Order={data.items} 
                        OrderAt={data.orderAt}
                        CardComp={data}
                        orderList={orderList}
                        setOrderList={setOrderList}
                        finish={finish}
                        setFinish={setFinish}
                    />
                )
            })}
        </Grid>
    )
}

export default OrderList
