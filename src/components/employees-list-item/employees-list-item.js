import {Component} from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.baseClass = 'list-group-item d-flex justify-content-between'
        this.state = {
            isPromotion: false,
            isPremium: this.props.premium,
        }
    }

    bindPremium = () => {
        this.setState(({isPremium}) => ({
            isPremium: !isPremium,
        }));
    }

    bindPromotion = () => {
        this.setState(({isPromotion}) => ({
            isPromotion: !isPromotion,
        }))
    }

    changeBaseClass(checkState, addClassName) {
        if(checkState) {
            this.baseClass += ` ${addClassName}`;
        } else {
            const deleteWorld = new RegExp(addClassName, 'gi')
            this.baseClass = this.baseClass.replace(deleteWorld, '');
        }
    }

    render() {
        const {fullName, salry} = this.props;
        const {name, surname} = fullName;

        this.changeBaseClass(this.state.isPremium, 'increase');
        this.changeBaseClass(this.state.isPromotion, 'like');

        return (
            <li className={this.baseClass}>
                <span onClick={this.bindPromotion}
                    className="list-group-item-label">{name} {surname}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={`${salry}$`}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.bindPremium}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
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
