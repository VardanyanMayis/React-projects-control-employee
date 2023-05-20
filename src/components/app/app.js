import AppInfo from '../app-info/app-info';
import SearchPanelInput from '../app-search/app-search';
import SearchPanelFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import AddEmployess from '../employees-add-form/employees-add-form';
import './app.css';

function App() {
     return (
        <div className='app'>
            <AppInfo />
            <div className="search__pannel">
                <SearchPanelInput />
                <SearchPanelFilter />
            </div>

            <EmployeesList />
            <AddEmployess />
        </div>
     )
}

export default App;
