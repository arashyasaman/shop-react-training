import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Button from '../../UI/Button/Button'

const Order = (props) => {
    const cartProduct = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                {item}: {props.products[item]}
            </li>
        )
    })

    return (
        <Wrapper>
            <h2>سبد خرید</h2>
            <ul>
                {cartProduct}
            </ul>
            <p>قیمت کل: {props.price}</p>
            <p>خرید خود را نهایی می‌کنید؟</p>
            <Button btnType="success" click={props.continue}>ادامه خرید</Button>
            <Button btnType="danger" click={props.cancel}>لفو سفارش</Button>
        </Wrapper>
    )
}

export default Order