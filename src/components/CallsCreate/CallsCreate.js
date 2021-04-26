import {Create, SimpleForm, TextInput} from "react-admin";
import React from "react";

const CallsCreate = props => (
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

export default CallsCreate;