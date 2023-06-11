import {SyledSection, StyledUlDeck} from "./style"

import {api} from "../../assets/Requests/api"
import { useEffect, useState } from "react"
import {Card} from "./Card/index"

export const Menu = ({search, addItemToCard}) => {
    const [apiMenu, setApiMenu] = useState([])
    const [isLoading, setLoading] = useState(true)


    useEffect(()=>{
        const apiCall = async()=>{
            try{
                const response = await api.get('/products')
                setApiMenu(response.data)
                
            } catch(error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        apiCall()
    },[])
    
    if (isLoading){
        return(
            <SyledSection>
                <StyledUlDeck>
                    Carregando...
                </StyledUlDeck>
        </SyledSection>
        )
    }
    return(
        <SyledSection>
            <StyledUlDeck>
                {apiMenu.map((item) => {
                    if(item.name.toLowerCase().includes(search.toLowerCase())){
                        return <Card key={item.id} item={item} addItemToCard={addItemToCard}/>
                    }
                })}
            </StyledUlDeck>
        </SyledSection>
    )
} 