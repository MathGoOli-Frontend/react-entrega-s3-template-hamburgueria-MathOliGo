import logo from "../../assets/BurgerKenzie.svg"
import { CartButton } from "./CardButton/index.jsx"
import { StyledHeader, StyledLogo, StyledLogoDiv} from "./style"
import { Search } from "./search/index"


export const Header = ({cart, setSearch, search, setIsOpen}) => {



    return (
        <StyledHeader>
            <StyledLogoDiv isLeft={true}>
                <StyledLogo src={logo} alt="Logo Burger Kenzie" />

                <CartButton setIsOpen={setIsOpen} cart={cart}/>
            </StyledLogoDiv>
            <StyledLogoDiv>
                <Search setSearch={setSearch} search={search}/>
            </StyledLogoDiv>

        </StyledHeader>
    )
}