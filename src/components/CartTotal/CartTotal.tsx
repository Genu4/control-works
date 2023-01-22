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
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div className="cart-total">
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {productsObject[parseInt(productId)].title}: {' '}
                    {productsObject[parseInt(productId)].price}
                </div>
            ))}

            <div className='total-price'>Total:
                {Object.keys(productsInCart).reduce((total, productId) => (
                    total + productsObject[parseInt(productId)].price
                ),0)}
            </div>
        </div>
    )
}
export default CartTotal
