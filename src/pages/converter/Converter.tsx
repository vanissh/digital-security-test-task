import './Converter.scss'
import { useState, useEffect } from 'react'
import { useAppSelector } from '../../hooks/hook'
import { CurrencyData } from '../../slices/dataSlice'

const Converter = () => {

    const [inValue, setInValue] = useState<number | null>(null)
    const [outValue, setOutValue] = useState<number | null>(null)
    const [userValue, setUserValue] = useState<number | null>(null)
    const [result, setResult] = useState<number | null>(null)

    const { info, userCurrency } = useAppSelector(state => state.dataReducer)

    useEffect(() => {
        if (info.length) {
            setOutValue(+info[0].Value)
        }
        if (userCurrency) {
            setInValue(userCurrency.Value)
        }
        if (!userCurrency && info.length) {
            setInValue(+info[0].Value)
        }
    }, [info, userCurrency])

    useEffect(() => {
        if (!userValue) {
            setResult(0)
        }
        toConvert()
    }, [userValue, inValue, outValue])

    const toConvert = () => {
        if (userValue && outValue && inValue) {
            let result = (inValue / outValue) * +userValue

            setResult(+result.toFixed(3))
        }
    }

    return (
        <div className="converter">
            <div className="converter-wrapper">
                <div className="row">
                    <select className='converter-selector'
                        value={inValue?.toString()}
                        onChange={(e) => setInValue(+e.target.value)}
                    >
                        {info && options(info)}
                    </select>

                    <select className='converter-selector'
                        value={outValue?.toString()}
                        onChange={(e) => setOutValue(+e.target.value)}
                    >
                        {info && options(info)}
                    </select>
                </div>
                <input type="text" className="calc-block block" onChange={e => setUserValue(+e.target.value)} />
                <div className="result-block"><span>Результат: {result ? result : 0}</span></div>
            </div>
        </div>
    )
}

export default Converter

const options = (data: CurrencyData[]) => {
    return (
        data.map(item =>
            <option
                value={item.Value}
                key={item.ID}
            >{item.Name}</option>
        )
    )
}