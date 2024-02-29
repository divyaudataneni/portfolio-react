import {Link} from 'react-router-dom'
import './index.css'

function Navbar() {
    return (
        <>
             <div className="nav-bg">
                <Link to="/" className='link'><h1 className='heading'>DU</h1></Link>
                <ul>
                    <Link to="/" className='link'><li>Profile</li></Link>
                    <Link to="/about" className='link'><li>Aboutme</li></Link>
                    <Link to="/education" className='link'><li>Education</li></Link>
                    <Link to="/projects" className='link'><li>Projects</li></Link>
                    
                </ul>
                <Link to="/contact" className='link'>
                <h1 className='heading'>Contact</h1>
                </Link>
             </div>
        </>

        );
}
               
export default Navbar;