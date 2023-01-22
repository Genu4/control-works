import { StyledEngineProvider } from '@mui/material'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Main from '../Main/Main'

type Props = {}



const App = (props: Props) => {

    

    return (
        <>
            <StyledEngineProvider>
                <Header />
                <Main />
                <Footer />
            </StyledEngineProvider>
        </>
    )
}
export default App
