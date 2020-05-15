import React from 'react';

const printRawData = props => {

    const output = props.data.map((el, i) => {
        return <div>{`${el}`}</div>
    })

    return output
}

export default printRawData