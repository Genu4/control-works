import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp'
import './Home.scss'

type Props = {}
const Home = (props: Props) => {
    return (
        <main>
            <div className="main">
                <h1 className="main-header">Control works</h1>
                <p className="main-content">
                    Wellcome to my control works project!
                </p>
                <p className="main-content">
                    Choose the task that you wont to see above{' '} <span className='arrow orange'><KeyboardDoubleArrowUpIcon /></span>
                    
                </p>
            </div>
        </main>
    )
}
export default Home
