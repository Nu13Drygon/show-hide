import React, { useState } from 'react';

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className='pure-u-1-5'>
            <header>
                <h4>{title}</h4>
                <button className="button-error pure-button" onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? 'Less' : 'More'}
                </button>
                {showInfo && <p>{info}</p>}
            </header>
        </article>
    )
}

export default Question;