import { Route, Routes } from 'react-router-dom'
import ControlWork1 from '../../pages/ControlWork1/ControlWork1'
import ControlWork2 from '../../pages/ControlWork2/ControlWork2'
import Home from '../../pages/Home/Home'

type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const Main = ({ productsInCart }: Props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="task1" element={<ControlWork1 />} />
                <Route
                    path="task2"
                    element={<ControlWork2 productsInCart={productsInCart} />}
                />
            </Routes>
        </div>
    )
}
export default Main
