import CustomButton from './customButtons'
import './App.css'
function Navbar() {
  return (
    <nav className="navbar">
    
          <CustomButton name="Home" />
    
          <CustomButton name="About" />
    
          <CustomButton name="Contact" />
    
    </nav>
  )
}

export default Navbar