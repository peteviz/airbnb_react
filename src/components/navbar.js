
import '../App.css';

const logo = require('../airbnb1.png')
export default function NavBar(){
    return (
        <nav className='Navbar'>
            <img
            src={logo}
            alt="Airbnb"
            className='NavLogo'
            />
        </nav>
    )
}