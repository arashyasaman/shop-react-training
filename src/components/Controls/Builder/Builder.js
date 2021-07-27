import React from 'react'
import './Builder.css'

const Builder = (props) => {
    return (
        <div className="builder">
            <div className="title">{props.title}</div>
            <button onClick={props.add}>افزودن</button>
            <button onClick={props.remove}>حذف</button>
        </div>
    )
}

export default Builder;