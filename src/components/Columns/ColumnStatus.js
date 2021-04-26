import React from "react";

const ColumnStatus = props => {
    const record = props.record;
    return (
        <div className={'ColumnStatus'}>
            <div>Status</div>
            <div>{record.status}</div>
            <div>Result</div>
            <div>{record.result}</div>
        </div>
    )
}

export default ColumnStatus