import React from 'react'
import Wrapper from '../../hoc/Wrapper'
import Controls from '../../components/Controls/Controls'
import Modal from '../../UI/Modal/Modal'
import Order from '../../components/Order/Order'
import axios from '../../axios-order'
import Loader from '../../components/Loader/Loader'

const prices = {
    کتاب: 11, 
    دفتر: 35,
    مداد: 49,
    خودکار: 44,
}

class Shopping extends React.Component {
    state = {
        products: null,
        totalPrice: 0,
        purchased: false,
        loader: false
    }    

    componentDidMount() {
        axios
            .get('https://shop-react-2c9bc-default-rtdb.firebaseio.com/products.json')
            .then((response) => {
                this.setState({ products: response.data })
            })
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
        this.setState({ loader: true })
        const order = {
            products: this.state.products,
            totalPrice: this.state.totalPrice,
            customer: {
                name: 'Arash Yasaman',
                email: 'ym.arash@gmail.com',
            }
        }
        axios.post('/orders.json', order)
        .then((response) => {
            this.setState({ loader: false, purchased: false })
            alert('خرید شما با موفقیت ثبت شد')
            console.log(response)
        })
        .catch((response) => {
            this.setState({ loader: false, purchased: false })
            alert('متاسفانه خرید شما ثبت نشد')
            console.log(response)
        })
    }
 
    render() {
        let order = null

        if(this.state.loader) {
            order = <Loader />
        }

        let controls = <Loader/>

        if(this.state.products) {
            controls = <Controls
                    productAdd={this.addProductHandler}
                    productRemove={this.removeProductHandler}
                    price={this.state.totalPrice}
                    order={this.purchasedHandler}
                />

            order = <Order
                products={this.state.products}
                price={this.state.totalPrice}
                continue={this.purchaseContinueHandler}
                cancel={this.modalCloseHandler}
            />    
        }

        return (
            <Wrapper>
                <Modal
                    show={this.state.purchased}
                    modalClose={this.modalCloseHandler}
                >
                {order}
                </Modal>
                {controls}
            </Wrapper>
        )
    }
}

export default Shopping;