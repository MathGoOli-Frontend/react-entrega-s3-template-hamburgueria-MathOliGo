import {SearchDiv} from "./style"
import icon from "../../../assets/search-icon.svg"
export const Search = () =>{

return(
    <SearchDiv>
        <input type="text" />
        <button>
            <img src={icon} alt="" />
        </button>
    </SearchDiv>

)
}