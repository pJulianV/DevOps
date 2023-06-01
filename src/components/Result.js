import React from 'react'

const Result = ({amount, term, total}) => (
    <div className='u-full-width result'>
        <h2>Your account</h2>
        <p>The requested amount its: $ {amount}</p>
        <p>To pay in {term} months</p>
        <p>Your monthly payment its $ { (total / term).toFixed(2) } </p>
        <p>Total amount to pay: $ {total}</p>
    </div>
)
 
export default Result;