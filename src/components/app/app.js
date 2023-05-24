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
            ],
            searchText: '',
            forPromotion: false,
            bestSalary: false
        }
    }

    deleteItem = (id) => {
        this.setState(({fakeData}) => ({
            fakeData: fakeData.filter(item => item.id !== id)
        }))
    }
    
    addItem = (fullName, salry) => {
        if(fullName.split(' ').join('').length === 0 || salry === '') return;

        this.setState(({fakeData}) => ({
            fakeData: [...fakeData, 
                {fullName: fullName, salry: salry, premium: false, promotion:false, id:uuidv4()}] 
        }))
    }

    // change value of premium or promotion
    changeInfoStatus = (changeInfo, id) => {
        this.setState(({fakeData}) => ({
            fakeData: fakeData.map(item => {
                if(item.id !== id) return item;
                return {...item, [changeInfo]: !item[changeInfo]};
            })
        }));
    }

    // logic for Component search
    searchEmploees = (date, searchText) => {
        if(!searchText.length) return date;

        return date.filter(item => item.fullName.toLowerCase().indexOf(
            searchText.toLowerCase()) > -1
        );
    }
    
    setFilterEmploees = (settingName) => {
        if(['forPromotion', 'bestSalary'].indexOf(settingName) >= 0) {
            this.setState({
                [settingName]: !this.state[settingName]
            })
        } else {
            this.setState({bestSalary: false, forPromotion: false})
        }
    }

    salryFilter = (data) => {
        if(!this.state.bestSalary) return data;
        return data.filter(item => item.salry >= 1000);
    }

    promotionFilter = (data) => {
        if(!this.state.forPromotion) return data;
        return data.filter(item => item.promotion);
    }


    render() {
        const {fakeData, searchText} = this.state;

        // functions for filter
        let data = this.salryFilter(fakeData);
        data = this.promotionFilter(data);
        data = this.searchEmploees(data, searchText);


        const countEmployess = data.length;
        const countPremum = data.filter(item => item.premium).length;

        return (
            <div className='app'>
                <AppInfo 
                    nameOfCompany={'ARMCompany'}
                    countOfEmployess={countEmployess}
                    countOfEmployessWithPremum={countPremum}
                />
                <div className="search__pannel">
                    <SearchPanelInput 
                        onInput={
                            (searchText) => this.setState({searchText: searchText})
                        }
                    />
                    <SearchPanelFilter 
                        onFilter={
                            (settings) => this.setFilterEmploees(settings)
                        }
                    />
                </div>
    
                <EmployeesList 
                    onPremium={id => this.changeInfoStatus('premium', id)}
                    onPromotion={id => this.changeInfoStatus('promotion', id)}
                    data={data} 
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
