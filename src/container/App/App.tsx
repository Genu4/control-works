import { StyledEngineProvider } from '@mui/material'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

type Props = {}

type ProductsInCart = {
    [id:number]:number
}

const App = (props: Props) => {

    const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
        1: 5,
        2: 2,
        3: 1,
    })

    return (
        <>
            <StyledEngineProvider>
                <Header />
                <Main productsInCart={productsInCart}/>
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
