import React from 'react';
import uniqid from 'uniqid'

const printRawData = props => {

    const output = props.data.map((el, i) => {
        return <div key={uniqid()}>{`${el}`}</div>
    })

    return output
}

export default printRawData