import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanelInput from '../app-search/app-search';
import SearchPanelFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import AddEmployess from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fakeData : [
                {fullName:'Narek Martirosyan', salry:820, premium: true, promotion:true, id:uuidv4()},
                {fullName:'Hayk Boyajyan', salry:450, premium: true, promotion:false, id:uuidv4()},
                {fullName:'Nare Mkitaryan', salry:1000, premium: false, promotion:true, id:uuidv4()},
                {fullName:'Abraham Alexsanyan', salry:1200, premium: false, promotion:false, id:uuidv4()},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({fakeData}) => ({
            fakeData: fakeData.filter(item => item.id !== id)
        }))
    }
    
    addItem = (fullName, salry) => {
        this.setState(({fakeData}) => ({
            fakeData: [...fakeData, 
                {fullName: fullName, salry: salry, premium: false, promotion:false, id:uuidv4()}] 
        }))
    }

    changeInfoStatus = (changeInfo, id, status) => {
        const {fakeData} = this.state;
        const index = fakeData.findIndex(elem => elem.id === id); 
        const cloneObj = Object.assign(fakeData[index]);

        cloneObj[changeInfo] = status;
        this.setState(({fakeData}) => ({
            fakeData: [...fakeData.slice(0, index), cloneObj,
                ...fakeData.slice(index + 1)]
        }))
    }

    countOfEmployessWithPremum = () => {
        const {fakeData} = this.state;
        let count = 0;
        fakeData.forEach(item => {
            if(item.premium) count++
        });
        return count;
    }


    render() {
        const {fakeData} = this.state;

        return (
            <div className='app'>
                <AppInfo 
                    nameOfCompany={'ARMCompany'}
                    countOfEmployess={fakeData.length}
                    countOfEmployessWithPremum={this.countOfEmployessWithPremum()}
                />
                <div className="search__pannel">
                    <SearchPanelInput />
                    <SearchPanelFilter />
                </div>
    
                <EmployeesList 
                    onPremium={(id, salry) => {
                        this.changeInfoStatus('premium', id, salry)
                    }}
                    onPromotion={(id, salry) => {
                        this.changeInfoStatus('promotion', id, salry)
                    }}
                    data={this.state.fakeData} 
                    onDelete={this.deleteItem}    
                />
                <AddEmployess 
                    onAdd={this.addItem} 
                />
            </div>
         )
    }
}

export default App;
