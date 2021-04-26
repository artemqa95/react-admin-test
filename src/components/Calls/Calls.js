import {
    List,
    Datagrid,
} from 'react-admin';
import ColumnFunc from "../Columns/ColumnFunc";
import ColumnDate from "../Columns/ColumnDate";
import ColumnPhone from "../Columns/ColumnPhone";
import ColumnStatus from "../Columns/ColumnStatus";
import ColumnTags from "../Columns/ColumnTags";
import ColumnTheme from "../Columns/ColumnTheme";
import ColumnOptions from "../Columns/ColumnOptions";

export const Calls = props => {
    return (
        <List {...props} >
            <Datagrid rowClick="edit">
                <ColumnFunc label=''/>
                <ColumnDate label=''/>
                <ColumnPhone label=''/>
                <ColumnStatus label=''/>
                <ColumnTags source="marks" label=''/>
                <ColumnTheme source="theme" label=''/>
                <ColumnOptions label=''/>
            </Datagrid>
        </List>
    )
}














