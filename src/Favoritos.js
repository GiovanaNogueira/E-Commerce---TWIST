
import { useDispatch, useSelector } from "react-redux"
import { setFav } from "./ProductsSlice"
import { useNavigate} from "react-router"

export const Favoritos = () => {
    const produtos = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div >

            <div className="favoritados">
                <h3>Produtos Favoritados</h3>
                {produtos.map((produto) => {
                    if (produto.fav != 0) {
                        return (
                            <div className="boxFav">
                                <div className="box" onClick={() => navigate(`/${produto.category}/${produto.id}`)} key={produto.id} >
                                    <img src={produto.image} width='200px' />
                                    <h3 className="nome">{produto.name}</h3>
                                </div>
                                <button onClick={() => {dispatch(setFav({id: produto.id, fav: 0}))}}>Remover</button>
                            </div>
                        )
                    }

                })}
            </div>
        </div >
    )
}