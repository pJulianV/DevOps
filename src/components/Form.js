import React, { Fragment, useState } from 'react'
import { getTotal } from '../helpers'

const Form = (props) => {

    const {amount, saveAmount, term, saveTerm, saveTotal, saveLoader} = props;

    // Local State
    const [error, saveError]=useState(false)

    const getLoan = evt => {
        evt.preventDefault();
        // check if
        if (amount === 0 || term === '') {
            saveError(true)
            return;
        }
        //Remove error message
        saveError(false);

        //Turn on the spinner
        saveLoader(true)
        setTimeout(() =>{
            // Do the math
            const total = getTotal(amount, term)
            // Then save the total
            saveTotal(total)

            // turn off the spinner
            saveLoader(false)
        }, 2000)

    }
    
    return ( 
        <Fragment>
            <form onSubmit={ getLoan }>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={ evt => saveAmount(parseInt(evt.target.value)) } 
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={ evt => saveTerm(parseInt(evt.target.value)) }
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            { (error) ? <p className='error'>Fields Required!</p> : null }
            
        </Fragment>
     );
}
 
export default Form;