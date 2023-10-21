export const visible = (produtos, text, categoria, sortBy, precoMin, precoMax) => {

    const lista = produtos.filter((produto) => 
        produto.category.toLowerCase().includes(categoria.toLowerCase())
        && 
        produto.name.toLowerCase().includes(text.toLowerCase())
        &&
        produto.price>= parseInt(precoMin)
        &&
        produto.price<= parseInt(precoMax)
    )

    return lista.sort((a,b)=>{
        if(sortBy=='price'){
            return a.price > b.price? 1 : -1
        }
        else if(sortBy == 'alphabetical'){
            return a.name > b.name ? 1 :-1
        }
    })
}