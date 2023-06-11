import {SearchDiv} from "./style"
import icon from "../../../assets/search-icon.svg"
export const Search = ({setSearch, search}) =>{
    
return(
    <SearchDiv>
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
        <button>
            <img src={icon} alt="" />
        </button>
    </SearchDiv>

)
}