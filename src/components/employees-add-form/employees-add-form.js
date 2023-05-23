import {Component} from 'react';
import './employees-add-form.js.css'

class AddEmployess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            salry: '',
        }
    }

    onInputChange = (event) => {
        event.preventDefault();
        const newLetter = event.target.value.at(-1);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        if (newLetter === ' ') {
            this.setState({[name]: value});
            return;
        } 

        // every new word starts with a capital letter
        let newArray = [];
        value.split(' ').forEach(item => {
            if(item.length > 0) {
                newArray.push(item[0].toUpperCase() + item.slice(1).toLowerCase());
            }
        })

        this.setState({[name]: newArray.join(' '),});
    }

    addItem = (event) => {
        event.preventDefault();
        const {onAdd} = this.props;

        this.setState({salry: '',fullName: '',}); // reset this.state
        onAdd(this.state.fullName, this.state.salry);
    }

    render() {
        const {fullName, salry} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        value={fullName}
                        name="fullName"
                        onChange={this.onInputChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        value={salry}
                        name="salry"
                        onChange={this.onInputChange} 
                        />
    
                    <button type="submit"
                        onClick={this.addItem}
                        className="btn btn-outline-light">Добавить        
                    </button>
                </form>
            </div>
        );
    }
}

export default AddEmployess;
