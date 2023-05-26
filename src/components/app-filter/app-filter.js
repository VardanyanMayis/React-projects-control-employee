import { Component } from 'react';
import './app-filter.css';

class SearchPanelFilter extends Component {
    constructor(props) {
        super(props);
        this.buttonsData = [
            {data: 'allEmployees', label: 'Все сотрудники'},
            {data: 'forPromotion', label: 'На повышение'},
            {data: 'bestSalary', label: 'З/П больше 1000$'}
        ]


        this.state = {
            forPromotion: false,
            bestSalary: false
        }
    }

    // function for set and change events
    changeActiveBtn = (event) => {
        event.preventDefault();
        const btnData = event.target.dataset.type;
        const {onFilter} = this.props

        if(['forPromotion', 'bestSalary'].indexOf(btnData) >= 0 ) {
            this.setState({
                [btnData]: !this.state[btnData]
            });
        } else {
            this.setState({forPromotion: false, bestSalary: false})
        }
        onFilter(btnData);
    }

    render() {
        const {forPromotion, bestSalary} = this.state;
        let allEmployeesClass = 'btn btn-outline-light';
        let forPromotionClass = 'btn btn-outline-light';
        let bestSalaryClass = 'btn btn-outline-light';

        if(forPromotion || bestSalary) {
            if(forPromotion) forPromotionClass += ' activeBtn';
            if(bestSalary) bestSalaryClass += ' activeBtn';
        } else {
            allEmployeesClass += ' activeBtn';
        }

        // function for create buttons
        const buttons = this.buttonsData.map(({data, label}) => (
                    <button 
                        key={label}
                        className={
                            (data === 'forPromotion') ? forPromotionClass :
                            (data === 'bestSalary') ? bestSalaryClass : allEmployeesClass
                        } 
                        type="button"
                        data-type={data}
                        onClick={this.changeActiveBtn}>
                    {label}
                    </button>
                ));

        return (
        <div className="btn-group">
            {buttons}
        </div>
        )
    }
}

export default SearchPanelFilter;
