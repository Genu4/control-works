import Button from '@mui/material/Button'
import ProductsList from '../../components/Products/ProductsList'
import './ControlWork2.scss'

type Props = {}
const ControlWork2 = (props: Props) => {
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
                    <ProductsList />
                </div>
            </div>
        </div>
    )
}
export default ControlWork2
