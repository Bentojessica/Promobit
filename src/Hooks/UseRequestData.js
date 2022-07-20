import { useEffect, useState } from "react"
import axios from "axios"

export const useRequestData = (initialData, url, key) => {
    const [data, setData] = useState(initialData)

    const getData = () => {
        axios.get(url)
        .then((res) => {
            if(key) {
                setData(res.data[key])
            }else {
                setData(res.data)
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    useEffect(()=>{
        getData()
    },[url])

    return [data, getData]
}