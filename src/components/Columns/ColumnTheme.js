import React from "react";

const ColumnTheme = props => {
    const record = props.record;
    return (
        <div className={'ColumnTheme'}>
            <div>
                Theme
            </div>
            {record.theme?.map((theme, index) => {
                return <div key={index}>{theme}</div>
            })}
        </div>
    )
}

export default ColumnTheme