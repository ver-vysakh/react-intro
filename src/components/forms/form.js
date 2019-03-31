import React, { Component } from 'react';
import './form.css';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h2> blah blah blah.. </h2>
                <form>
                    <div className="formClass">
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>ISBN</label>
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input />
                        </div>
                        <div className="form-group buttonClass">
                            <button type="button" className="form-control" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    onClick() {
        console.log(this.state)
        alert('fk')
    }
}
export default Form;