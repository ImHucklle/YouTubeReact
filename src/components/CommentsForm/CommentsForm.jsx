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
            [event.target.comment]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.newComment(this.state)
    }

    render() { 
        return ( 
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <label>Add a public comment...</label>
                <input name='comment' onChange={this.handleChange} value={this.state.comment}/> <br />
                <button type='submit'>Comment</button>
            </form>
         );
    }
}
 
export default CommentsForm;