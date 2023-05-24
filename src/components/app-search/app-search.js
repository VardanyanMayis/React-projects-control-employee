import { Component } from "react";

class SearchPanelInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    onInput = (event) => {
        event.preventDefault();
        const searchText = event.target.value;
        const {onInput} = this.props;

        this.setState({searchText});
        onInput(searchText);
    }

    render() {
        const {searchText} = this.state;

        return (
            <input 
                value={searchText}
                onChange={(event) => this.onInput(event)}
                type="text"
                className="search-input form-control" 
                placeholder="Введите имя сотрудника"
            />
        )
    }
}

export default SearchPanelInput;
