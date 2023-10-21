import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setFilterText } from "./FilterSlice"


export const Header = () => {
    const filtro = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    return(
        <div className = "header" >
            <h1>TWIST</h1>
            <input className="header_search" value = {filtro.text} onChange = {(e)=>dispatch(setFilterText(e.target.value))} placeholder="Busque seu produto"></input>
            <img className = "header_cart" src ="../imagem/carrinho2.png" alt = "carrinho" onClick = {()=>navigate('/carrinho')} height={"30px"}/>
            <img className = "header_heart" src ="../imagem/favorito.png" alt = "carrinho" onClick = {()=>navigate('/favoritos')} height={"30px"}/>

        </div>
    )
}