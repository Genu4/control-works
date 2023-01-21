import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductsListItem.scss'


type Props = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
    image: string    
}
const ProductsListItem = ({
    id,
    title,
    desc,
    type,
    capacity,
    price,
    image,
    
}: Props) => {
    return (
        <Card className="product-list-item">
            <CardContent>
                <h4 className="product-title">{title}</h4>
                <p className="product-desc">{desc}</p>
                <div className="product-features">
                    <span>Type:</span> {type}
                </div>
                <div className="product-features">
                    <span>Capacity:</span> {capacity} gb
                </div>
                <div className="product-price">{price}$ </div>
            </CardContent>

            <CardActions className="btns-wrap">
                <Button className='btn' variant="outlined">Add to cart</Button>
            </CardActions>
        </Card>
    )
}
export default ProductsListItem
