import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onPremium, onPromotion}) => {

    const createItems = data.map(item => {
        const {id, ...compProps} = item;
        return(
            <EmployeesListItem 
                key={id}
                {...compProps}
                onPremium={(status) => onPremium(id, status)}
                onPromotion={(status) => onPromotion(id, status)}
                onDelete={() => onDelete(id)}
            />
        )
    })

    return (
        <ul className="list-group app-list">
            {createItems}
        </ul>
    );
}

export default EmployeesList;
