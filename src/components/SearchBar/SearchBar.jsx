import React, {Component} from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <form>
                <input placeholder="Search" name="searchWord" title="search" type="text" value={this.state.searchWord} onChange={this.handleChange} />
                <button className="button1" type='submit' value="search">Submit</button>
            </form>
        </div>      
        );
    }
}
 
export default SearchBar;