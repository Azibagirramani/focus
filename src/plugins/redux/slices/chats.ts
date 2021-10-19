import { createSlice, PayloadAction  } from "@reduxjs/toolkit"
import { RootState } from "../store"


interface chartInterface {
    total: number,
    items: Object[]
}

interface itemInterface {
    id?: number,
    name?: string,
    description?: string,
    image_url?: string,
    rating?: number,
    available_quantity?: number,
    prices?: Object[]
}

const itemsLog: itemInterface [] = []

const initialState: chartInterface = {
    total: 0,
    items: itemsLog
}

export const chart = createSlice({
    name: "chart",
    initialState,
    reducers:{
        setItems(state, { payload }: PayloadAction<itemInterface>){
            state.items.forEach(items=> {
                console.log(items)
            })
        }
    }
})

export const { setItems } = chart.actions

export const chartState = (state: RootState) => state;

export default chart.reducer
