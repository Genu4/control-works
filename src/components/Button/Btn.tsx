import { Button } from '@mui/material'
import { useState } from 'react'
import './Btn.scss'

type Props = {}

const Btn = (props: Props) => {
    const [count, setCount] = useState<number>(0)

    const onIncrement = () => {
        setCount((prevState: number) => prevState + 1)
    }

    return <Button className="btn" variant="outlined" onClick={onIncrement}>Click to change count "<span className='number'>{count}</span>"</Button>
}
export default Btn
