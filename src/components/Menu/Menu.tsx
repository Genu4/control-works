import MenuItem from './MenuItem'
import './Menu.scss'

type Props = {}
const Menu = (props: Props) => {
    return (
        <ul className="nav-menu-list">
            <li>
                <MenuItem to="/">Home</MenuItem>
            </li>
            <li>
                <MenuItem to="task1">Task 1</MenuItem>
            </li>
            <li>
                <MenuItem to="task2">Task 2</MenuItem>
            </li>
        </ul>
    )
}
export default Menu
