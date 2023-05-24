import { Component } from 'react';
import './app-filter.css';

class SearchPanelFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forPromotion: false,
            bestSalary: false
        }
    }

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

        return (
            <div className="btn-group">
            <button 
                className={allEmployeesClass} 
                type="button"
                data-type="allEmployees"
                onClick={this.changeActiveBtn}>
                Все сотрудники
            </button>
            <button 
                className={forPromotionClass} 
                type="button"
                data-type="forPromotion"
                onClick={this.changeActiveBtn}>
                На повышение
            </button>
            <button 
                className={bestSalaryClass} 
                type="button"
                data-type="bestSalary"
                onClick={this.changeActiveBtn}>
                З/П больше 1000$
            </button>
        </div>
        )
    }
}

export default SearchPanelFilter;
