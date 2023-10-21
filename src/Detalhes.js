import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { setCor, setFav, setQuantidade } from "./ProductsSlice"

export const Detalhes = () => {
    const produtos = useSelector((state)=>state.products)
    const params = useParams()
    const produto = produtos.find((p) => p.id == params.id)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let i=0
    const array = Array.from(Array(produto.nota).keys())
    console.log(array)

    return(
        <div>
            <div className="detalhes">
                <img  src={produto.image} width = '400px'/>

            <div className="infos">
                <h1>{produto.name}</h1>
                {array.map((e)=> {
                    return(
                        <img src ="../imagem/star.png" alt = "star" height={"30px"}/>
                    )
                } )}
                <img src ="../imagem/favorito.png" alt = "favorito" height={"30px"} onClick={() => {dispatch(setFav({id: produto.id, fav: 1}))}}/>
                <p>{produto.description}</p>
                
            </div>

                <div className="divPreco">
                    <h1>R${(produto.price/100).toFixed(2)}</h1>
                    Quantidade:
                    <select value = {produto.qtd} onChange={(e) => {dispatch(setQuantidade({id: produto.id, qtd: e.target.value}))}}>
                        <option value ='1'>1</option>
                        <option value ='2'>2</option>
                        <option value ='3'>3</option>
                        <option value ='4'>4</option>
                        <option value ='5'>5</option>
                        <option value ='6'>6</option>
                        <option value ='7'>7</option>
                        <option value ='8'>8</option>
                        <option value ='9'>9</option>
                    </select>
                Cor:
                <select value = {produto.cor} onChange={(e) => {dispatch(setCor({id: produto.id, cor: e.target.value}))}}>
                    <option value ='Azul'>Azul</option>
                    <option value ='Amarelo'>Amarelo</option>
                    <option value ='Branco'>Branco</option>
                    <option value ='Cinza'>Cinza</option>
                    <option value ='Preto'>Preto</option>
                    <option value ='Rosa'>Rosa</option>
                    <option value ='Vermelho'>Vermelho</option>
                </select>
                    <button className="bAdd" onClick = {()=>navigate('/')}>Adicionar ao carrinho</button>
                    <button className = "bCarrinho" onClick={()=>navigate('/carrinho')} >Comprar</button>
                    
            </div>
                
            </div>
            <div className="comentarios">
                <h3>Comentários</h3>
                {produto.comentario.map((coment)=>
                <div className="coment">{coment}</div>)}
            </div>
        </div>
    )
}