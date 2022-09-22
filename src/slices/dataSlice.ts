import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { modifyData } from '../utils/modifyData'

export interface CurrencyData {
    ID: string,
    NumCode: string,
    CharCode: string,
    Nominal: number,
    Name: string,
    Value: number,
    Previous: number
}

interface DataState {
    info: CurrencyData[],
    loading: string,
    userCurrency: CurrencyData | null
}

const initialState: DataState = {
    info: [],
    loading: 'idle',
    userCurrency: null
}

export const fetchData = createAsyncThunk(
    'data/fetchData',
    async (url: string) => {
        return await fetch(url)
            .then(res => res.json())
            .then(res => modifyData(res.Valute))
    }
)

export const fetchCode = createAsyncThunk(
    'data/fetchCode',
    async (url: string) => {
        return await fetch(url)
            .then(res => res.json())
            .then(res => Object.keys(res[0].currencies)[0])
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, state => { state.loading = 'loading' })
            .addCase(fetchData.fulfilled, (state, action: PayloadAction<CurrencyData[]>) => {
                state.loading = 'idle'
                state.info = action.payload
            })
            .addCase(fetchData.rejected, state => {
                state.loading = 'error'
            })
            .addCase(fetchCode.fulfilled, (state, action: PayloadAction<string>) => {
                state.userCurrency = state.info.filter(item => item.CharCode === action.payload)[0]
            })
            .addDefaultCase(() => { })
    }
})

const { reducer } = dataSlice

export { reducer }