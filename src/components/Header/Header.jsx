import useAuth from "../../shared/hooks/useAuth";
import HeaderMenu from './HeaderMenu';
import UserMenu from "./UserMenu";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
    const isLogin = useAuth();
    
    return (
        <header>
            <nav>
                <HeaderMenu isLogin={isLogin}/>
                {isLogin ? <UserMenu /> : <HeaderAuth />}
            </nav>
        </header>
        
    )
}

export default Header;