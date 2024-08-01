import React from 'react'

const CustomSpinner = (props) => {
    let { show } = props
    return (
        <>{show ?
            <section id="spinner">
                <div className="container">
                    <div id="loading-dot"></div>
                </div>
            </section>
            : null
            }
        </>
    )
}

export default CustomSpinner