import React from 'react';``
const Spinner = ({ small = false, width = '100%' }: any) => {
    return (
        <div className={`flex items-center backdrop-blur-sm justify-center min-w-[${width}] absolute top-0 bottom-0 right-0 left-0`}>
        <div
            className={`inline-block ${small ? 'h-6 w-6' : 'h-8 w-8'} animate-spin rounded-full border-4 border-solid border-[#c026d3] border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
            role="status">
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
        </div>
    )
};
export default Spinner;