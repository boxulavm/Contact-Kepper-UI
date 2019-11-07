import React from 'react'
import './spinner.css'

const Spinner = () => {
    return (
        <div className="text-center mt-5">
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner