import React, { Fragment } from 'react'

function Header({title}) {
    return (
        <Fragment>
            <h1>
                { title }
            </h1>
        </Fragment>
    )
}

export default Header;