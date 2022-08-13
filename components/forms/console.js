import { useEffect, useState } from "react"
import Spreadsheet from "react-spreadsheet"

export const ConsoleComponent = () => {
    /* 
    
    incoming data is of the form
    {
        field1: [],
        field2: [],
        ...
    } 

    gotta change it to form: 
    [
        [{value: field1}, {value: field2}],
        [{value: abc}, {value: xyz}], 
    ]
    

    */
    const [data, setData] = useState([])
    useEffect(() => {
        let rawData = {
            key1: [1, 2, 3],
            key2: [4, 5, undefined],
            key3: [7, undefined, undefined],
        }
        // authenticate the user
        // get the ipfs uri
        // query the ipfs uri from there

        const lengthsOfElements = Object.keys(rawData).map(
            (key) => rawData[key].length
        )
        const maxLength = Math.max.apply(Math, lengthsOfElements)

        const processedData = [[]]
        Object.keys(rawData).forEach((key) =>
            processedData[0].push({ value: key })
        )
        for (let i = 0; i < maxLength; i++) {
            processedData.push([])
            Object.keys(rawData).forEach((key) => {
                processedData[i + 1].push({ value: rawData[key][i] })
            })
        }
        setData(processedData)
        // console.log("data")
    }, [])

    /* 
    Layout is devided into 2 parts
    1. analytics (total submission for now)
    2. raw data

    */
    return (
        <div className="w-screen h-screen">
            <div className="hidden"></div>
            <div className="w-full flex flex-row">
                <Spreadsheet data={data} />
            </div>
        </div>
    )
}
