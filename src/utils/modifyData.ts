import { CurrencyData } from '../slices/dataSlice'

export const modifyData = (data: object) => {
    const newObj = Object.values(data)
    newObj.push(RUB)
    return newObj
}

const RUB: CurrencyData = {
    ID: 'ADD',
    NumCode: '643',
    CharCode: 'RUB',
    Nominal: 1,
    Name: 'Российский рубль',
    Value: 1,
    Previous: 1
}