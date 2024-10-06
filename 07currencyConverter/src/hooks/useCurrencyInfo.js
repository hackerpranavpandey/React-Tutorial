// here we are creating our own custom hook
import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    const API_url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    useEffect(() => {
        fetch(API_url)
        .then(res => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;