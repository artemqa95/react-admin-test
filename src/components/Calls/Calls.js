import React, {useState, useEffect} from "react";
import LinkIcon from '@material-ui/icons/Link';
import PersonIcon from '@material-ui/icons/Person';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import VisibilityIcon from '@material-ui/icons/Visibility';
import HeadsetIcon from '@material-ui/icons/Headset';
import {
    List,
    Datagrid,
    useRecordContext,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useDataProvider
} from 'react-admin';

export const Calls = props => {
    return (
        <List {...props} >
            <Datagrid rowClick="edit">
                <Column1 source="calls" label=''/>
                <Column2 source="calls" label=''/>
                <Column3 source="calls" label=''/>
                <Column4 source="calls" label=''/>
                <Column5 source="marks" label=''/>
                <Column6 source="theme" label=''/>
                <Column7 label=''/>
            </Datagrid>
        </List>
    )
}

const Column1 = () => {
    const record = useRecordContext();
    return (
        <div className={'Column1'}>
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

const Column2 = () => {
    const record = useRecordContext();
    return (
        <div className={'Column2'}>
            <div>Started at</div>
            <div>{new Date(record.startAt).toLocaleString()}</div>
            <div>Ended at</div>
            <div>{new Date(record.finishedAt).toLocaleString()}</div>
        </div>
    )
}

const Column3 = () => {
    const record = useRecordContext();
    return (
        <div className={'Column3'}>
            <div>Phone number <span><LinkIcon style={{fontSize: 'large'}}/></span></div>
            <div>{record.number}</div>
            <div>Duration</div>
            <div>{record.duration}</div>
        </div>
    )
}

const Column4 = () => {
    const record = useRecordContext();
    return (
        <div className={'Column4'}>
            <div>Status</div>
            <div>{record.status}</div>
            <div>Result</div>
            <div>{record.result}</div>
        </div>
    )
}

const Column5 = props => {
    const [pupUpWindow, setPupUpWindow] = useState(false)
    const [newMarkName, setNewMarkName] = useState(null)
    const dataProvider = useDataProvider()
    const markAdditionHandler = event => {
        setPupUpWindow(true)
    }

    const markFieldChangeHandler = event => {
        setNewMarkName(event.target.value)
    }

    const finishedMarkAdditionHandler = async event => {
        const copy = {...props.record}
        copy[props.source].push(newMarkName)

        const data = await dataProvider.update('calls', {id:props.record.id, data:copy})
        console.log(data)
        setPupUpWindow(false)
        setNewMarkName(null)
    }

    return (
        <div className={'Column5'}>
            {pupUpWindow ?
                <div className={'addMark'}>
                    <input onChange={markFieldChangeHandler} type="text"/>
                    <button onClick={finishedMarkAdditionHandler}>Добавить</button>
                </div>
                :
                <div>
                    Tags <span onClick={markAdditionHandler}><ControlPointIcon
                    style={{fontSize: 'large'}}/></span>
                </div>
            }
            {props.record[props.source]?.map((mark, index) => {
                return <div key={index}>{mark}</div>
            })}
        </div>)
}


const Column6 = () => {
    const
        record = useRecordContext();

    return (
        <div className={'Column6'}>
            <div>
                Theme
            </div>
            {record.theme?.map((theme, index) => {
                    return <div key={index}>{theme}</div>
                })}
        </div>
    )
}

const Column7 = () => {
    return (
        <div className={'Column7'}>
            <div>
                <SwapVertIcon style={{color: 'grey'}}/>
            </div>
            <div>
                <VisibilityIcon style={{color: 'purple'}}/>
            </div>
        </div>
    )
}

export const CallsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id"/>
            </ReferenceInput>
            <TextInput source="id"/>
            <TextInput source="title"/>
            <TextInput source="body"/>
        </SimpleForm>
    </Edit>
);


export const CallsCreate = props => (
    <Create {...props} >
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="startedAt"/>
            <TextInput source="finishedAt"/>
            <TextInput source="number"/>
            <TextInput source="duration"/>
            <TextInput source="result"/>
            <TextInput source="status"/>
            <TextInput source="listened"/>
        </SimpleForm>
    </Create>
);