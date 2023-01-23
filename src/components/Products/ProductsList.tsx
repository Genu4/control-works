import { Grid } from '@mui/material'
import productsArray from './productsArray'

import ProductsListItem from './ProductsListItem'
type ProductsProps = {
    id: number
    title: string
    desc: string
    type: string
    capacity: string
    price: number
}

type Props = {
    addProductToCart: (id: number) => void
    currency: string
    coefficient: number
}

const ProductsList = ({ currency, coefficient, addProductToCart }: Props) => {
    return (
        <>
            <Grid container direction="row" alignItems="center" spacing={4}>
                {productsArray.map(
                    ({
                        id,
                        title,
                        desc,
                        type,
                        capacity,
                        price,
                    }: ProductsProps) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductsListItem
                                id={id}
                                title={title}
                                desc={desc}
                                type={type}
                                capacity={capacity}
                                price={price}
                                addProductToCart={addProductToCart}
                                currency={currency}
                                coefficient={coefficient}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductsList
