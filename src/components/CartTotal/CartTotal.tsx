import './CartTotal.scss'
import productsArray, {
    getProductsObject,
    ProductsProps,
} from '../Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: ProductsProps
    }
    currency: string
    coefficient: number
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    currency,
    coefficient,
}: Props) => {
    return (
        <div className="cart-total">
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title}:{' '}
                    {productsObject[parseInt(productId)].price * coefficient} {currency}
                </div>
            ))}

            <div className="total-price">
                <div>Total:</div>
                <div>
                    {Object.keys(productsInCart).reduce(
                        (total, productId) =>
                            total + productsObject[parseInt(productId)].price * coefficient,
                        0
                    )}
                </div>
                <div>{currency}</div>
            </div>
        </div>
    )
}
export default CartTotal
