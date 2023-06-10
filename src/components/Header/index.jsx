import logo from "../../assets/BurgerKenzie.svg"
import { CartButton } from "./CardButton/index.jsx"
import { StyledHeader, StyledLogo, StyledLogoDiv} from "./style"
import { Search } from "./search/index"

export const Header = () => {



    return (
        <StyledHeader>
            <StyledLogoDiv isLeft={true}>
                <StyledLogo src={logo} alt="Logo Burger Kenzie" />

                <CartButton/>
            </StyledLogoDiv>
            <StyledLogoDiv>
                <Search/>
            </StyledLogoDiv>
        </StyledHeader>
    )
}