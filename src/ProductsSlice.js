import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category: "necessarios",
        description: "Chinelo Havaianas Slim Feminina Opção de Cores Original Havaianas Slim Feminina. A Havaianas Slim é um clássico dos nossos tempos. Com tiras e solado mais fino, ela conquistou os pés de quem gosta de um visual delicado, sem abrir mão do conforto.",
        id: "-NYxjzLaJkqompeSzDU3",
        image: "https://images-americanas.b2w.io/produtos/3205081262/imagens/chinelo-havaianas-slim-feminina-opcao-de-cores-original/3205081692_1_xlarge.jpg",
        name: "Havaiana",
        price: 3490,
        qtd: 0,
        cor: '',
        nota: 1,
		comentario: ["Bom chinelo, mas as cores no site não correspondem totalmente ao produto real. Confortável, mas um pouco caro.", "Adoro esses chinelos Havaianas Slim! São leves, confortáveis e perfeitos para o verão. A variedade de cores é ótima para combinar com diferentes roupas. Recomendo!"],
        fav: 0
    },
    {
        category: "moveis",
        description: "Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito",
        id: "-NYxk1LAhTw0HchDaW9w",
        image: "https://images-americanas.b2w.io/produtos/32857830/imagens/armario-de-cozinha-12-portas-1-gaveta-clara-poliman-moveis-branco/32857831_1_xlarge.jpg",
        name: "Armário",
        price: 55990,
        qtd :0,
        cor: '',
        nota: 2,
		comentario: ["Econômico, mas a montagem foi um pesadelo. As portas não alinham perfeitamente, o que é frustrante.", "Este armário de cozinha é um excelente custo-benefício. Sim, a montagem foi um desafio, mas valeu a pena. As 12 portas e 1 gaveta oferecem muito espaço para organizar utensílios de cozinha. Fiquei satisfeito com a minha compra."],
        fav: 0

    },
    {
        category: "necessarios",
        description: "Bicicleta De Equilíbrio 4 Rodas",
        id: "-NYxnriKfiMQ57CEveUu",
        image: "https://images-americanas.b2w.io/produtos/6062369575/imagens/bicicleta-de-equilibrio-4-rodas-vermelha-10728-buba/6062369575_1_xlarge.jpg",
        name: "Bicicleta ",
        price: 21060,
        qtd: 0,
        cor: '',
        nota: 3,
		comentario: ["Bicicleta sólida para crianças, mas o preço poderia ser mais competitivo. Fácil de montar.", "Minha filha adora essa bicicleta de equilíbrio! As 4 rodas a tornam mais estável para os pequenos. No entanto, o preço poderia ser mais acessível."],
        fav: 0

    },
    {
        category: "celular",
        description: "Smartphone Sansung",
        id: "-NYxnriO7RFX4lon7o3r",
        image: "https://images-americanas.b2w.io/produtos/01/00/img/5242830/2/5242830242_1SZ.jpg",
        name: "Smartphone",
        price: 99900,
        qtd: 0,
        cor: '',
        nota: 4,
        comentario: ["Ótimo smartphone! Ótimo desempenho e câmera. Um pouco caro, mas vale a pena.", "Este smartphone Samsung é incrível! A tela é impressionante, as fotos são nítidas e a velocidade é excelente. Sim, é caro, mas vale cada centavo."],
        fav: 0

    },
    {
        category: "moveis",
        description: "Que tal mobiliar o coração da casa de um jeito fácil? O armário de cozinha 12 portas 1 gaveta Clara Poliman Móveis é feito para quem quer economizar e deixar o cômodo bonito",
        id: "-NYxnriPDjXsdkH35U0R",
        image: "https://images-americanas.b2w.io/produtos/3072707478/imagens/sofa-3-lugares-retratil-e-reclinavel-cama-inbox-compact-1-80m-velusoft-cafe/3072707486_1_xlarge.jpg",
        name: "Sofá ",
        price: 98999,
        qtd: 0,
        cor: '',
        nota: 5,
        comentario: ["Sofá confortável, mas a montagem foi complicada e as almofadas perdem a forma rapidamente. Poderia ser mais durável pelo preço.", "Este sofá é a estrela da minha sala de estar! É tão confortável e a cor combina perfeitamente com a decoração. Estou completamente satisfeito com a minha compra."],
        fav: 0

    }
]

export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setQuantidade: (state, action) => {
            state.map((e) =>{
                if(e.id === action.payload.id){
                    e.qtd = action.payload.qtd
                }
            })
            
        },
        setCor: (state, action) => {
            state.map((e) =>{
                if(e.id === action.payload.id){
                    e.cor = action.payload.cor
                }
            })
            
        },
        
        setFav: (state, action) => {
            state.map((e) =>{
                if(e.id === action.payload.id){
                    e.fav = action.payload.fav
                }
            })
            
        }
    }

})

export const {setQuantidade, setCor, setFav} = productsSlice.actions
export default productsSlice.reducer