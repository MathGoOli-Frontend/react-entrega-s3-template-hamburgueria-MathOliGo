import logo from "../../assets/BurgerKenzie.svg"
import { CartButton } from "./CardButton/index.jsx"
import { StyledHeader, StyledLogo, StyledLogoLeftDiv, StyledLogoRightDiv} from "./style"
import { Search } from "./search/index"


export const Header = ({cart, setSearch, search, setIsOpen}) => {



    return (
        <StyledHeader>
            <StyledLogoLeftDiv isLeft={true}>
                <StyledLogo src={logo} alt="Logo Burger Kenzie" />

                <CartButton setIsOpen={setIsOpen} cart={cart}/>
            </StyledLogoLeftDiv>
            <StyledLogoRightDiv>
                <Search setSearch={setSearch} search={search}/>
            </StyledLogoRightDiv>

        </StyledHeader>
    )
}