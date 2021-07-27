import React from 'react';
import Builder from './Builder/Builder';
import './Controls.css';

const products = [
    { title: 'کتاب', type: 'کتاب' },
    { title: 'قلم', type: 'دفتر' },
    { title: 'مداد', type: 'مداد' },
    { title: 'خودکار', type: 'خودکار' }
]

const Controls = (props) => {
    return (
        <div className="controls">
            <div className="total-price">
                <p>جمع کل: {props.price}</p>
            </div>
            {products.map((product) => {
                return <Builder
                    title={product.title}
                    type={product.type}
                    key={product.title}
                    add={() => props.productAdd(product.type)}
                    remove={() => props.productRemove(product.type)}
                />
            })}

            <button
                className="order-btn"
                onClick={props.order}
            >ثبت سفارش</button>
        </div>
    ) 
}

export default Controls;