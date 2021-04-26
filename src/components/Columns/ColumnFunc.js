import LinkIcon from "@material-ui/icons/Link";
import HeadsetIcon from "@material-ui/icons/Headset";
import PersonIcon from "@material-ui/icons/Person";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import React from "react";

const ColumnFunc = props => {
    const record = props.record;
    return (
        <div className={'ColumnFunc'}>
            <div>
                ID {record.id}
            </div>
            <div>
                GUID <span><LinkIcon style={{fontSize: 'large'}}/></span>
            </div>
            <div>
                {record.listened ?
                    <HeadsetIcon style={{fontSize: '30px'}}/>
                    :
                    <PersonIcon style={{color: 'blue', fontSize: '30px'}}/>}
                <PlayCircleOutlineIcon style={{marginLeft: 5, fontSize: '30px'}}/>

            </div>
        </div>
    );
};

export default ColumnFunc