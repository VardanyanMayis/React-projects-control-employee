import AppInfo from '../app-info/app-info';
import SearchPanelInput from '../app-search/app-search';
import SearchPanelFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import AddEmployess from '../employees-add-form/employees-add-form';
import './app.css';

function App() {

    const getData = () => {
        const fakeData = [
            {fullName:{name: 'Narek', surname: 'Martirosyan'}, salry:820, premium: true, id:1},
            {fullName:{name: 'Hayk', surname: 'Boyajyan'}, salry:450, premium: true, id:2},
            {fullName:{name: 'Nare', surname: 'Mkitaryan'}, salry:1000, premium: false, id:3},
            {fullName:{name: 'Abraham', surname: 'Alexsanyan'}, salry:1200, premium: false, id:4},
        ]
    
        return fakeData;
    }

     return (
        <div className='app'>
            <AppInfo />
            <div className="search__pannel">
                <SearchPanelInput />
                <SearchPanelFilter />
            </div>

            <EmployeesList data={getData()} />
            <AddEmployess />
        </div>
     )
}

export default App;
