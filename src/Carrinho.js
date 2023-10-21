import { useDispatch, useSelector } from "react-redux"
import { setQuantidade } from "./ProductsSlice"
import { useState } from "react"
import numeral from "numeral"
import { useNavigate } from "react-router"

export const Carrinho = () =>{
    const enderecos = useSelector((state) => state.adress)
    const produtos = useSelector((state)=>state.products)
    const dispatch = useDispatch()
    var total = 0
    const [indexSelected, setChecked] = useState ("") 

    return(
        <div >
            <h1 className="carrinho">Carrinho</h1>
            <div className="divCarrinho">
                <div className="divEnderecos">
                    <h3>Endereços</h3>
                    {enderecos.map((endereco) =>{
                        return(
                            <div className = "endereco"key = {endereco.id}>
                                <input type = "radio" value = {endereco.id} checked={endereco.id === indexSelected} onChange={() => setChecked(endereco.id)}/>
                                <lable key = {endereco.id}>{endereco.rua}, {endereco.numero}, {endereco.bairro}, {endereco.cidade}, {endereco.estado}</lable>
                                
                            </div>

                        )
                    })}
                </div>
                <div className="resumoPedido">
                    <h3>Resumo do pedido</h3>
                    {produtos.map((produto) => {
                        if(produto.qtd!=0){
                            total+=(produto.price)*(produto.qtd)
                            return(
                                <div className="produto">
                                    <p>{produto.name} - {produto.cor} - Quantidade: {produto.qtd}</p> 
                                    <img className = "imgCancelar" src = "../images/delete.png" alt = "Excluir" onClick={() => {dispatch(setQuantidade({id: produto.id, qtd: 0}))}} />

                                </div>
                            )
                        }

                    })}
                    <h3>Total: R{numeral(total/100).format('$0,0.00')}</h3>
                </div>
            </div>

        </div>
    )
    // )checked = {endereco.id == indexSelected} onChange = {() => setChecked(endereco.id)}
}