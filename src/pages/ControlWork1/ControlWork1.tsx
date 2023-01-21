import Btn from '../../components/Button/Btn'
import './ControlWork1.scss'

type Props = {}
const ControlWork1 = (props: Props) => {
    return (
        <div className="control1">
            <div className="control1-content">
                <h1 className='control1-header'>Task 1</h1>
                <div className="btn-block">
                    <Btn/>
                    <Btn/>
                    <Btn/>
                </div>
            </div>
        </div>
    )
}
export default ControlWork1
