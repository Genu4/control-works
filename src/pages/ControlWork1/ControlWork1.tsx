import { Button } from '@mui/material'
import './ControlWork1.scss'

type Props = {}
const ControlWork1 = (props: Props) => {
    return (
        <div className="control1">
            <div className="control1-content">
                <h1 className='header'>Task 1</h1>
                <div className="btn-block">
                    <Button className="btn" variant="outlined">
                        Contained
                    </Button>
                    <Button className="btn" variant="outlined">
                        Contained
                    </Button>
                    <Button className="btn" variant="outlined">
                        Contained
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default ControlWork1
