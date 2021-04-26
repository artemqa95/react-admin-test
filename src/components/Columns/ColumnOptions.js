import SwapVertIcon from "@material-ui/icons/SwapVert";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React from "react";

const ColumnOptions = props => {
    return (
        <div className={'ColumnOptions'}>
            <div>
                <SwapVertIcon style={{color: 'grey'}}/>
            </div>
            <div>
                <VisibilityIcon style={{color: 'purple'}}/>
            </div>
        </div>
    )
}

export default ColumnOptions