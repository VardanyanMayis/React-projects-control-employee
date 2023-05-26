import {Component} from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.baseClass = 'list-group-item d-flex justify-content-between'
        this.state = {
            isPromotion: this.props.promotion,
            isPremium: this.props.premium,
            salry: this.props.salry
        }
    }

    bindPremium = () => {
        const {onPremium} = this.props;
        this.setState(({isPremium}) => ({
            isPremium: !isPremium,
        }));
        onPremium();
    }

    bindPromotion = () => {
        const {onPromotion} = this.props;
        this.setState(({isPromotion}) => ({
            isPromotion: !isPromotion,
        }))
        onPromotion();
    }

    changeBaseClass(checkState, addClassName) {
        if(checkState) {
            this.baseClass += ` ${addClassName}`;
        } else {
            const deleteWorld = new RegExp(addClassName, 'gi')
            this.baseClass = this.baseClass.replace(deleteWorld, '');
        }
    }

    // change salry
    newSelry = (event) => {
        event.preventDefault();
        const value = parseInt(event.target.value);
        this.props.onSelry(value);
    }

    render() {
        const {fullName, onDelete} = this.props;
        const {salry, isPremium, isPromotion} = this.state

        this.changeBaseClass(isPremium, 'increase');
        this.changeBaseClass(isPromotion, 'like');

        return (
            <li className={this.baseClass}>
                <span onClick={this.bindPromotion}
                    className="list-group-item-label">{fullName}
                </span>
                <input type="text" 
                    className="list-group-item-input" 
                    defaultValue={`${salry}$`}
                    onChange={(event) => this.newSelry(event)}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.bindPremium}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        onClick={onDelete}
                        className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    }
}

export default EmployeesListItem;
