import React from 'react'
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = () => {
    return (
        <div className='card'>
            <div>icon</div>
            <div>
                <h4>
                    Featured title
                </h4>
                <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
            </div>
        </div>
    )
}

export default Card