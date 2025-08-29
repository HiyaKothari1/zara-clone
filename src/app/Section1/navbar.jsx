import Hamburger from "./hamburger";
import Button from "./button";
export default function Navbar(){
    return(
        <nav className="Navbar">
            <Hamburger />
            <Button label="Login" />
            <Button label="Sign Up" />
        </nav>
    )
}