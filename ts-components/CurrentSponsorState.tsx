import React from 'react'

const CurrentSponsorState = (text: any) => {
    return (
        <div style={{
            border: '1px solid',
            width: '600px',
            height: '50px'
        }}>
            총 후원 인원: {text.dCount}
        </div>
    )
}

export default CurrentSponsorState