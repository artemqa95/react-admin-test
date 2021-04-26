import LinkIcon from "@material-ui/icons/Link";
import React from "react";

const ColumnPhone = props => {
    const record = props.record;
    return (
        <div className={'ColumnPhone'}>
            <div>Phone number <span><LinkIcon style={{fontSize: 'large'}}/></span></div>
            <div>{record.number}</div>
            <div>Duration</div>
            <div>{record.duration}</div>
        </div>
    )
}

export default ColumnPhone