import React from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../../../../utils/Icon"

const PaymentCancelled = () => {

    const navigate = useNavigate()

    return (
        <div className="bg-white min-h-screen">
      <div className="p-24  md:mx-auto">
        <Icon className="cross" />
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Cancelled!</h3>
            <div className="py-10 text-center">
                <span  onClick={() => navigate('/pricing')} className="px-12 bg-[#86198F] cursor-pointer rounded-md text-white font-semibold py-3">
                    GO BACK 
               </span>
            </div>
        </div>
    </div>
  </div>
    )
}

export default PaymentCancelled