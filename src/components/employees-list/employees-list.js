import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data}   ) => {

    const createItems = data.map(item => {
        const {id, ...compProps} = item;
        return(
            <EmployeesListItem key={id} {...compProps}/>
        )
    })

    return (
        <ul className="list-group app-list">
            {createItems}
        </ul>
    );
}

export default EmployeesList;
