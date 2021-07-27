import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Controls from '../../components/Controls/Controls'
import Modal from '../../UI/Modal/Modal'
import Order from '../../components/Order/Order'

const prices = {
    کتاب: 11, 
    دفتر: 35,
    مداد: 49,
    خودکار: 44,
}

class Shopping extends React.Component {
    state = {
        products: {
           کتاب: 0, 
           دفتر: 0,
           مداد: 0,
           خودکار: 0,
        },
        totalPrice: 0,
        purchased: false
    }    

    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount

        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice + priceAdd

        this.setState({ totalPrice: newPrice, products: updatedProducts })
    }

    removeProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1
        const updatedProducts = {
            ...this.state.products
        }
        updatedProducts[type] = updatedCount

        const priceSub = prices[type]
        const prevPrice = this.state.totalPrice
        const newPrice = prevPrice - priceSub

        this.setState({ totalPrice: newPrice, products: updatedProducts })
    }

    purchasedHandler = () => {
        this.setState({ purchased: true })
    }
    modalCloseHandler = () => {
        this.setState({ purchased: false })
    }
    purchaseContinueHandler = () => {
        alert('خرید شما با موفقیت ثبت شد')
        this.setState({ purchased: false })
    }
 
    render() {
        return (
            <Wrapper>
                <Modal
                    show={this.state.purchased}
                    modalClose={this.modalCloseHandler}
                >
                    <Order
                        products={this.state.products}
                        price={this.state.totalPrice}
                        continue={this.purchaseContinueHandler}
                        cancel={this.modalCloseHandler}
                    />
                </Modal>
                <Controls
                    productAdd={this.addProductHandler}
                    productRemove={this.removeProductHandler}
                    price={this.state.totalPrice}
                    order={this.purchasedHandler}
                />
            </Wrapper>
        )
    }
}

export default Shopping;