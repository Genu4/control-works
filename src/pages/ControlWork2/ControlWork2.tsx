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
    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({})
    const addProductToCart = (id: number) => {
        setProductsInCart((prevState: ProductsInCart) => ({
            ...prevState,
            [id]: prevState[id],
        }))
    }

    const [currency, setCurrency] = useState<string>('uah')
    const [coefficient, setCoefficient] = useState<number>(1)
    const setCurrencyUsd = () => {
        setCurrency('$')
        setCoefficient(0.02)
    }
    const setCurrencyEur = () => {
        setCurrency('€')
        setCoefficient(0.02)
    }
    const setCurrencyUah = () => {
        setCurrency('₴')
        setCoefficient(1)
    }
    const setCurrencyZl = () => {
        setCurrency('zł')
        setCoefficient(0.11)
    }

    return (
        <div className="control2">
            <div className="control2-content">
                <h1 className="control2-header">Our shop page</h1>
                <div className="btn-block">
                    <Button
                        className="btn"
                        variant="outlined"
                        onClick={setCurrencyUsd}
                    >
                        USD
                    </Button>
                    <Button
                        className="btn"
                        variant="outlined"
                        onClick={setCurrencyEur}
                    >
                        EUR
                    </Button>
                    <Button
                        className="btn"
                        variant="outlined"
                        onClick={setCurrencyUah}
                    >
                        UAH
                    </Button>
                    <Button
                        className="btn"
                        variant="outlined"
                        onClick={setCurrencyZl}
                    >
                        ZL
                    </Button>
                </div>
                <div>
                    <ProductsList
                        addProductToCart={addProductToCart}
                        currency={currency}
                        coefficient={coefficient}
                    />
                </div>
                <CartTotal
                    productsInCart={productsInCart}
                    currency={currency}
                    coefficient={coefficient}
                />
            </div>
        </div>
    )
}
export default ControlWork2
