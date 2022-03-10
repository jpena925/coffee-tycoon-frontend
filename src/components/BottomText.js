import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function BottomText({orders, setOrders}) {
  

  // useEffect(() => {
  //   fetch('http://localhost:9292/orders')
  //   .then(res => res.json())
  //   .then(data => setOrders(() => data))
  // }, [])

    let fulfilled_orders = orders.filter((order)=> order.fulfilled)
    let unfulfilled_orders = orders.filter((order) => !order.fulfilled)

    let happy_customers = fulfilled_orders.length > 0 ? 
      fulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} bought a {order.menu_item.item.name} 😀</li>) : "No happy customers! 😩"
    let sad_customers = unfulfilled_orders.length > 0 ?
      unfulfilled_orders.map((order) => <li key={order.id}>{order.customer.name} didn't get their order of a {order.menu_item.item.name} and left! 😩</li>) : "No sad customers! 😀"

  
  return (
    <div id="customers">
      <div className="customer_lists">
        <h3>Happy Customers</h3>
        <ul>{happy_customers}</ul>
      </div>
      <div className="customer_lists">
        <h3>Sad Customers</h3>
        <ul>{sad_customers}</ul>
      </div>
    </div>
  )
}

export default BottomText