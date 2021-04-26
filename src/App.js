import * as React from "react";
import {Admin, Resource} from 'react-admin';
import {Calls, CallsCreate} from './components/Calls/Calls';
import restProvider from 'ra-data-simple-rest';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = restProvider('http://localhost:5000');

const App = () => {
    return (
        <Admin dataProvider={dataProvider} title={'Calls'}>
            <Resource name="calls" list={Calls} create={CallsCreate} icon={UserIcon}/>
        </Admin>
    )
}

export default App;
