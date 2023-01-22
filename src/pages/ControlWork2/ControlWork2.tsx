import Button from '@mui/material/Button'
import CartTotal from '../../components/CartTotal/CartTotal'
import ProductsList from '../../components/Products/ProductsList'
import { useState } from 'react'
import './ControlWork2.scss'

type Props = {}

type ProductsInCart = {
    [id: number]: number
}

const ControlWork2 = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        
    })

    const addProductToCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    return (
        <div className="control2">
            <div className="control2-content">
                <h1 className="control2-header">Task 2</h1>
                <h2 className="title">Our shop page</h2>
                <div className="btn-block">
                    <Button className="btn" variant="outlined">
                        USD
                    </Button>
                    <Button className="btn" variant="outlined">
                        EUR
                    </Button>
                    <Button className="btn" variant="outlined">
                        UAH
                    </Button>
                    <Button className="btn" variant="outlined">
                        ZL
                    </Button>
                </div>
                <div>
                    <ProductsList addProductToCart={addProductToCart}/>
                </div>
                <CartTotal productsInCart={productsInCart} />
            </div>
        </div>
    )
}
export default ControlWork2
