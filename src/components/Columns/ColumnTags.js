import React, {useState} from "react";
import {useDataProvider} from "react-admin";
import ControlPointIcon from "@material-ui/icons/ControlPoint";

const ColumnTags = props => {
    const record = props.record;
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
        const copy = {...record}
        copy[props.source].push(newMarkName)
        await dataProvider.update('calls', {id:record.id, data:copy})
        setPupUpWindow(false)
        setNewMarkName(null)
    }

    return (
        <div className={'ColumnTags'}>
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

export default ColumnTags