import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Output = () => {
    const location = useLocation()
    const [data, setData] = useState(location.state ? location.state : {})

    console.log(Object.keys(data))
    return (
        <div className="my-12 max-w-2xl mx-auto">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-bold leading-7 text-gray-900">Transaction Succesfull</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600"></p>
            <div>
                {Object.keys(data).map((key) => (
                    <div>
                        <span>Key: {key} </span>
                        <span>Value: {data[key]}</span>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}

export default Output
