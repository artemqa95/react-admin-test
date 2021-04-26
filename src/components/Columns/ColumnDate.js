import {useRecordContext} from "react-admin";
import React from "react";

const ColumnDate = props => {
    const record = useRecordContext();
    return (
        <div className={'ColumnDate'}>
            <div>Started at</div>
            <div>{new Date(record.startAt).toLocaleString()}</div>
            <div>Ended at</div>
            <div>{new Date(record.finishedAt).toLocaleString()}</div>
        </div>
    )
}

export default ColumnDate