import { useState, useEffect } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const a = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2025.2.25/v1/currencies/${currency}.json`)
            const x = await a.json()
            setData(x[currency])
        }
        if(currency){
            fetchData();
        }else{
            setData({});
        }
    }, [currency])
    return data
}

export default useCurrencyInfo;
