import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

function Navbar() {
   return (
      <header className={styles.header}>
         <nav>
            <NavLink className={styles.active} to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to="/contact">Contact us</NavLink>
         </nav>
      </header>
   )
}

export default Navbar