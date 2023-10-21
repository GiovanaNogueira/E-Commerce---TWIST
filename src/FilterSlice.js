import { createSlice } from "@reduxjs/toolkit";


export const filterSlice = createSlice({
    name: 'products',
    initialState: 
    {   showCategoria: '',
        text: '',
        sortBy:'price',
        precoMin: '0',
        precoMax: '100000',   
    },
    reducers: {
        setShowCategoria: (state, action) => {
            state.showCategoria = action.payload || ''
        },

        setFilterText:(state, action) => {
            state.text = action.payload || ''

        },
        setSortBy:(state, action) => {
            state.sortBy = action.payload 
        },
        setFaixaPrecoMin:(state, action) =>{
            state.precoMin = action.payload
            console.log(state.precoMin)
        },
        setFaixaPrecoMax:(state, action) =>{
            state.precoMax = action.payload
            console.log(state.precoMax)
        }


    }

})

export const { setShowCategoria, setFilterText, setSortBy, setFaixaPrecoMin, setFaixaPrecoMax} = filterSlice.actions

export default filterSlice.reducer