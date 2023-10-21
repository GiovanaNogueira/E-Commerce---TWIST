import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {visible} from "./Visible.js"
import { setFaixaPrecoMax, setFaixaPrecoMin, setShowCategoria, setSortBy } from "./FilterSlice.js";
import numeral from "numeral";


export const PageCat = () =>{
    const filtros = useSelector((state)=>state.filter)
    const produtos = useSelector((state)=>state.products)


    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(setShowCategoria(params.categoria))


    const produtosVisiveis = visible(produtos, filtros.text, filtros.showCategoria, filtros.sortBy, filtros.precoMin, filtros.precoMax)

    return(
        <div>
            <div className="order">
                <p>Ordene por:</p> 
                <select className = "select" value = {filtros.sortBy} onChange={(e) => {dispatch(setSortBy(e.target.value))}}>
                    <option value = "price">Preço</option>
                    <option value = "alphabetical">A-Z</option>     
                </select>

                <p>Escolha uma faixa de preço:</p>
                <select className = "select" value = {filtros.precoMin} onChange={(e) => {dispatch(setFaixaPrecoMin(e.target.value))}}>
                    <option value = "2000" >R$20.00</option>
                    <option value = "5000">R$50.00</option>
                    <option value = "25000">R$250.00</option>
                    <option value = "60000">R$600.00</option>
                    <option value = "100000">R$1000.00</option>        
                </select>

                <select className = "select" value = {filtros.precoMax} onChange={(e) => {dispatch(setFaixaPrecoMax(e.target.value))}}>
                    <option value = "2000" >R$20.00</option>
                    <option value = "5000">R$50.00</option>
                    <option value = "25000">R$250.00</option>
                    <option value = "60000">R$600.00</option>
                    <option value = "100000">R$1000.00</option>        
                </select>

            </div>
            <h3>{params.categoria}</h3>
            {produtosVisiveis.map((produto) => {
                return(
                    <div className = "box" onClick = {() => navigate(`/${produto.category}/${produto.id}`)} key = {produto.id} >
                        <img  src={produto.image} width = '200px'/>
                        <h3 className="nome">{produto.name}</h3>
                        <p className="preco">R{numeral(produto.price/100).format('$0,0.00')}</p>
                        {/* <h4>R${(produto.price/100).toFixed(2)}</h4> */}
                    </div>
                )
            })}
        </div>
    )
}