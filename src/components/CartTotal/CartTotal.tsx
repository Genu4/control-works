import './CartTotal.scss'
import productsArray from '../Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}
const CartTotal = ({ productsInCart }: Props) => {
    console.log(productsInCart)
    console.log(Object.keys(productsInCart))
    return (
        <div className="cart-total">
            CartTotal:
            {Object.keys(productsInCart).map((productId) => (
                <div key={productId}>
                    {' '}
                    {productId} : {productsInCart[parseInt(productId)]}
                </div>
            ))}
        </div>
    )
}
export default CartTotal
