import React from 'react'

function CetagoryTitle(props) {
    return (
        <>
            <section className="pb-4">
                <div className="container">
                    <h4 className="section-title py-3 text-right font-normal">{props.title}</h4>
                    <p className="text-black">{props.description}</p>
                </div>
            </section>
        </>
    )
}

export default CetagoryTitle