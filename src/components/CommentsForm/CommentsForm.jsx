import React, { Component } from 'react';

class CommentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comment: '',
         }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newComment(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Comment:</label>
                <input name='artist' onChange={this.handleChange} value={this.state.artist}/> <br />
                <button type='submit'>Add Song</button>
            </form>
         );
    }
}
 
export default CommentsForm;